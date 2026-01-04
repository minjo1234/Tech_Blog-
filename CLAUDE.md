# Claude Code Project Guidelines

## 프로젝트 개발 방침

### 🎨 디자인 및 테마

#### Dark Mode - 미지원
이 프로젝트는 **Dark Mode를 사용하지 않습니다**.

**주의사항:**
- 모든 새로운 코드에서 `dark:` Tailwind 클래스를 추가하면 **안됩니다**.
- 기존 코드의 `dark:` 클래스를 발견하면 제거해야 합니다.
- 코드 리뷰 시 `dark:` 클래스 사용은 반드시 제거 요청합니다.

**예시:**
```tsx
// ❌ 금지됨
<div className="bg-white dark:bg-gray-900">Content</div>

// ✅ 올바른 방식
<div className="bg-white">Content</div>
```

### 🔤 폰트 설정

**글로벌 폰트:**
```css
font: 400 18px 'Roboto Slab', AppleSDGothicNeo, sans-serif;
```

- **기본 폰트**: Roboto Slab (본문 및 전체)
- **폴백**: AppleSDGothicNeo, sans-serif
- **크기**: 18px
- **굵기**: 400

모든 텍스트는 위의 글로벌 폰트를 상속합니다.

### 🎯 색상 스키마

**주요 강조색:**
- Primary: `#a4ac86` (올리브 그린)
- 배경: 흰색(`#ffffff`) 또는 light neutral colors
- 텍스트: Dark neutrals (`#000000` ~ `#333333`)

### 📁 프로젝트 구조

- `src/config/globals.css` - 글로벌 스타일, 폰트 설정
- `src/layouts/` - 레이아웃 컴포넌트
- `src/app/blog/[...slug]/page.tsx` - 블로그 게시글 페이지
- `src/components/blog/TableOfContents.tsx` - 목차 컴포넌트

### 🚀 개발 체크리스트

새로운 기능이나 컴포넌트를 추가할 때:

1. **Dark Mode 클래스 확인**
   - [ ] `dark:` 클래스 사용하지 않았는가?
   - [ ] 기존 코드의 `dark:` 클래스 제거했는가?

2. **폰트 설정 확인**
   - [ ] 글로벌 폰트 설정이 적용되어 있는가?
   - [ ] 커스텀 폰트 오버라이드가 필요한 경우, 명확히 문서화했는가?

3. **색상 사용 확인**
   - [ ] 정해진 색상 팔레트를 사용했는가?
   - [ ] Dark mode colors를 사용하지 않았는가?

---

**마지막 업데이트**: 2026-01-02
**작성자**: Claude Code