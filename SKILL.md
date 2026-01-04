# React Context API 가이드

## 1. Context API 3단계 구조

### ① createContext() - Context 생성
```tsx
const LanguageContext = createContext<LanguageContextType | undefined>(undefined);
```
- **실행 시점**: 파일 로드 시 1회
- **역할**: Context 객체 생성 (방송 채널 개설)

### ② Provider - 데이터 제공
```tsx
export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('ko');

  const value = useMemo(
    () => ({ language, setLanguage }),
    [language, setLanguage]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}
```
- **실행 시점**: 렌더링될 때마다
- **역할**: value를 Context에 등록 (데이터 방송)

### ③ useContext() - 데이터 사용
```tsx
export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('Provider 밖에서 사용됨');
  }
  return context;
}
```
- **실행 시점**: 호출될 때마다
- **역할**: Context에서 value 읽기 (데이터 수신)

---

## 2. 전체 작동 흐름

### 앱 시작 시
```
1. createContext() 실행 (파일 로드)
   → Context 객체 생성

2. <LanguageProvider> 렌더링
   → useState로 상태 생성
   → useMemo로 value 객체 생성
   → Provider에 value 전달

3. children 렌더링 (Header, Footer 등)

4. useContext() 호출
   → Provider의 value 받아옴

5. 화면에 표시
```

### 상태 변경 시 (버튼 클릭 등)
```
1. setLanguage('en') 호출
   → setLanguageState('en') 실행

2. React가 상태 변경 감지
   → LanguageProvider 자동 리렌더링

3. useMemo 실행
   → 의존성이 바뀌었으므로 새 value 생성

4. Provider에 새 value 전달

5. React가 Provider value 변경 감지
   → useContext 사용하는 모든 컴포넌트 자동 리렌더링

6. 화면 자동 업데이트
```

---

## 3. useMemo를 사용하는 이유

### useMemo 없을 때
```tsx
const value = { language, setLanguage };
// 매 렌더링마다 새 객체 생성
// → 참조가 계속 바뀜
// → useContext 사용처 모두 리렌더링 (성능 낭비)
```

### useMemo 있을 때
```tsx
const value = useMemo(
  () => ({ language, setLanguage }),
  [language, setLanguage]
);
// language가 실제로 바뀔 때만 새 객체 생성
// → 안 바뀌면 이전 객체 재사용
// → 불필요한 리렌더링 방지 (성능 최적화)
```

---

## 4. useEffect의 역할

```tsx
useEffect(() => {
  const savedLanguage = getCookie('language') || localStorage.getItem('language');
  if (savedLanguage) {
    setLanguageState(savedLanguage);
  }
}, []);  // 빈 배열 = 마운트 시 1회만
```

- **역할**: 앱 시작 시 저장된 값 복원
- **실행 시점**: Provider 마운트 직후 1회만
- **버튼 클릭 시**: 실행되지 않음 (React 리렌더링이 처리)

---

## 5. Provider Pattern의 장점

### Props Drilling 없이 사용
```tsx
// ❌ Provider 없으면
<App>
  <Header language={lang} setLanguage={setLang}>
    <Nav language={lang} setLanguage={setLang}>
      <Button language={lang} setLanguage={setLang} />
    </Nav>
  </Header>
</App>

// ✅ Provider 있으면
<LanguageProvider>
  <Header>
    <Nav>
      <Button />  {/* useLanguage()로 직접 접근 */}
    </Nav>
  </Header>
</LanguageProvider>
```

---

## 6. 자식 컴포넌트 업데이트 메커니즘

### 자동 리렌더링 과정
```
1. setLanguageState('en') 호출
   ↓
2. React: "상태가 바뀌었네!"
   ↓
3. LanguageProvider 리렌더링
   ↓
4. 새 value = { language: 'en', ... }
   ↓
5. React: "Provider value가 바뀌었네!"
   ↓
6. useContext 사용하는 모든 컴포넌트 찾기
   ↓
7. 해당 컴포넌트들 모두 리렌더링
   ↓
8. 화면 자동 업데이트
```

**핵심**: useEffect가 아니라 **React의 상태 관리 + 리렌더링 메커니즘**이 자동으로 처리!

---

## 7. 실전 사용 예시

### Provider 설정 (layout.tsx)
```tsx
<LanguageProvider>
  <Header />
  <main>{children}</main>
  <Footer />
</LanguageProvider>
```

### 자식 컴포넌트에서 사용
```tsx
export function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button onClick={toggleLanguage}>
      {language === 'ko' ? 'KO' : 'EN'}
    </button>
  );
}
```

---

## 8. 핵심 정리

| 요소 | 역할 | 실행 시점 |
|------|------|----------|
| `createContext()` | Context 객체 생성 | 파일 로드 시 1회 |
| `<Provider>` | value를 방송 | 렌더링될 때마다 |
| `useContext()` | value를 수신 | 호출될 때마다 |
| `useMemo` | 객체 재사용 (최적화) | 의존성 변경 시만 |
| `useEffect` | 초기 값 복원 | 마운트 시 1회 |
| React 리렌더링 | 자식 자동 업데이트 | 상태 변경 시 자동 |