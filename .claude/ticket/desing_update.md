# 전체적인 디자인을 수정하려고 한다.

## 사용하고자 하는 skill :
- frontend-design

# 요구사항
- 전체 폰트 변경
    - font: 400 18px 'Roboto Slab', AppleSDGothicNeo, sans-serif;
- TOC Sticky 안되고있음
    - 원인파악 해주셈
- 다크모드 사용 안 할거임 다크모드 고려한 코드 모두제거.
    - CLAUDE.md 파일만들어서 다크모드 고려안한다는것도 추가해줘



### 5️⃣ 대량 게시글 처리 전략
- **현재 상태**: 무한 스크롤 방식 (페이지 네이션 없음)
- **검토 사항**:
  - [ ] 게시글이 많아질 경우의 성능 영향도 분석
  - [ ] 페이지네이션 vs 무한 스크롤 중 선택
  - [ ] 참고: Carrot Blog와 Kurly Tech Blog는 모두 페이지네이션 사용
  - [ ] 필요시 pagination 구현
  - [ ] SEO 고려: 게시글 많을 경우 페이지네이션이 더 유리

