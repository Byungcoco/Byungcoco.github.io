# byungcoco.github.io

강병준 · 게임 클라이언트 프로그래머 포트폴리오 (Astro + GitHub Pages)

- 메인 페이지 내용: `src/data/site.ts`
- 코드 리뷰: `src/content/reviews/<프로젝트>/<번호>-<이름>.mdx`
  - 프론트매터 `project`, `order`, `title`, `topic`만 맞추면 목차·이전/다음 글이 자동으로 이어집니다.
  - 그림 `<Fig n={1} … />`, 그림 참조 `<FigRef n={1} />`, 코드 창 `<Editor file="…" fn="…">` + ```cpp 펜스, 탭 `<Tabs labels={[…]}><Tab>…</Tab></Tabs>`
- 이미지: `public/img/…`
- 로컬 실행: `npm install` → `npm run dev`
