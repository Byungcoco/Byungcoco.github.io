# 홈페이지 수정 가이드

GitHub의 `main` 브랜치에 커밋이 올라가면 GitHub Actions가 자동으로 빌드해서 1~2분 뒤 https://byungcoco.github.io 에 반영됩니다.
빌드가 실패하면 사이트는 **이전 버전 그대로** 남습니다(깨진 화면이 올라가지 않음). 결과는 저장소의 **Actions** 탭에서 초록 체크 / 빨간 X로 확인합니다.

---

## 1. 처음 한 번: 내 PC에 준비

필요한 것: **Node.js 20 이상**, **Git**, **VS Code**(확장 "Astro" 설치)

```bash
git clone https://github.com/Byungcoco/byungcoco.github.io.git
cd byungcoco.github.io
npm install
```

## 2. 고치면서 보기

```bash
npm run dev
```
- 브라우저에서 `http://localhost:4321` 을 엽니다.
- VS Code에서 파일을 고치고 **Ctrl+S** 하면 1초 안에 화면이 바뀝니다(새로고침 불필요).
- 한 창에서 보기: VS Code `Ctrl+Shift+P` → **Simple Browser: Show** → `http://localhost:4321`
- 고칠 곳 찾기: 사이트에서 바꾸고 싶은 문장을 복사 → VS Code `Ctrl+Shift+F` 로 검색.
- 끝낼 때는 터미널에서 `Ctrl+C`.

## 3. 올리기

```bash
npm run build          # (권장) 올리기 전에 오류 확인. "Complete!" 가 나오면 OK
git add -A
git commit -m "무엇을 고쳤는지"
git push
```
간단한 글자 수정은 GitHub 웹에서 파일을 열고 ✏️ → **Commit changes** 로 해도 됩니다(미리보기는 안 됨).

---

## 4. 무엇을 어디서 고치나

| 고칠 것 | 파일 |
|---|---|
| 이름·직함·한 줄 소개, GitHub·이메일·기술 문서 링크 | `src/data/site.ts` → `profile` |
| 기술 스택 칩 | `src/data/site.ts` → `stack` |
| 학습 프로젝트(기간·팀·역할·설명·태그·썸네일·유튜브·GitHub) | `src/data/site.ts` → `projects` |
| 플레이 로그 / 처음에 보일 개수 | `src/data/site.ts` → `games`, `GAMES_TOP` |
| 소개 문단, 경력(휴트리온) 내용, 맨 아래 문구 | `src/pages/index.astro` (HTML 부분) |
| 메인 레이아웃·색·글자 크기 | `src/pages/index.astro` 아래쪽 `<style>` |
| 코드 리뷰 본문 | `src/content/reviews/<프로젝트>/<번호>-<이름>.mdx` |
| 리뷰 페이지 틀(상단 바, 오른쪽 목차, 코드 창 모양, 글자 크기) | `src/pages/reviews/[...id].astro` |
| 공통 색·폰트·칩 모양 | `src/layouts/Base.astro` |
| 이미지 / PDF | `public/img/…`, `public/docs/…` (사이트 주소는 `/img/…`, `/docs/…`) |

프로젝트 키: `katana`(카타나 제로), `mullet`(뮬렛 매드잭), `naruto`(나루토), `duet`(듀엣 나이트 어비스)

### 메인 페이지 예시
- 프로젝트 설명 바꾸기: `site.ts`의 해당 프로젝트 `desc: '…'` 문장만 수정.
- 팀장 표시: `lead: true` 이면 "**팀장**"이 붙고 뒤에 `roleText`가 이어집니다.
- 썸네일 바꾸기: 이미지를 `public/img/projects/`에 넣고 `thumb: '/img/projects/파일명.jpg'`.
- 소개 문단의 흰색 굵은 강조: `<span class="em">강조할 말</span>`.

---

## 5. 코드 리뷰(MDX) 고치기

### 파일 머리(프론트매터)
```yaml
---
project: katana            # 프로젝트 키
order: 2                   # 프로젝트 안 순서 → 이전/다음 글, 목차 드롭다운 순서
title: 오브젝트 관리 · 오브젝트 풀
topic: 오브젝트 풀           # 목차 드롭다운의 작은 글씨
chips: [Object Pool, Event Queue]   # 개요 아래 칩
lineage:                   # (선택) 맨 아래 "개선 과정 · 이전 단계"
  - label: 아무거나          # 사이트 안 리뷰면 제목은 자동으로 채워짐
    href: /reviews/katana/02-object-pool/
---
```
새 리뷰는 기존 파일 하나를 복사해서 위 값과 본문만 바꾸면 목차·이전/다음 글이 자동으로 이어집니다.
파일 이름(`02-object-pool`)이 곧 주소(`/reviews/katana/02-object-pool/`)가 됩니다.

### 본문 구성 (모든 리뷰 공통)
`## 1. 개요` → `## 2. 문제` → `## 3. 구조 요약` → `## 4. 코드 리뷰` → (`## 5. 측정`) → `## N. 피드백`
- `##` 제목이 오른쪽 목차에 자동으로 들어갑니다.
- 피드백 틀: **굵은 한 문장**으로 시작 → 이유 설명 → `남은 개선점입니다.` + 목록 → (있으면) `### 다음 단계`.

### 자주 쓰는 부품
| 하고 싶은 것 | 쓰는 법 |
|---|---|
| 그림 | `<Fig n={2} src="/img/reviews/katana/02-object-pool/spawn.png" caption="설명" />` — 흰 배경 도식은 `white`, 최대 폭은 `max={560}` |
| 본문에서 그림 가리키기(누르면 팝업) | `(<FigRef n={2} />)` |
| 코드 창 | 아래 예시 |
| 탭 | `<Tabs labels={['실제 사용', '풀']}>` 안에 `<Tab>…</Tab>`을 라벨 수만큼, 순서대로 |
| 표 | 마크다운 표를 `<div class="tbl">` … `</div>` 로 감싸기(앞뒤 빈 줄 필수) |
| 개요 수치 카드 | `<Summary head="…" items={[{ k: '항목', v: '값', s: '설명' }]}>각주</Summary>` (옥트리 리뷰 참고) |

코드 창 예시:
````mdx
<Editor file="CEffect.cpp" fn="CEffect::PlayRotaionAnim(...)">

```cpp
void CEffect::PlayRotaionAnim(const wstring &key_in, bool _bLoop, bool _bOffeset)
{
	float fAngleRad = atan2f(GetDir().y, GetDir().x);
	// ... 코드 중략
	AnimComp->PlayAnimation(key_in, _bLoop, true);
}
```

</Editor>
````

### 코드 박스 규칙 (지금까지 맞춘 기준)
- 함수 일부만 보여도 **함수 시그니처와 `{ }`는 항상 표시**, 클래스 멤버면 `class X : public Y { … };`와 `public:`/`private:`까지.
- 생략한 부분은 그 깊이에 맞춰 `// ... 코드 중략`. 함수와 함수 사이 생략이면 맨 앞 칸 + 다음 줄은 빈 줄.
- `// TODO` 주석은 넣지 않습니다.
- 코드는 원본 그대로(오타·변수명도 그대로). 들여쓰기는 탭.

### 그림 번호 바꿀 때
그림 번호는 **읽는 순서대로 1부터**. 번호를 바꾸면 그 그림의 `<Fig n={…}>`와 본문의 `<FigRef n={…} />`를 같이 바꿉니다.
없는 번호를 가리키면 눌러도 아무 일도 안 일어납니다.

---

## 6. 자주 나는 실수 (빌드 실패 원인)

| 증상 | 원인 / 해결 |
|---|---|
| MDX에서 `Could not parse expression` | 본문 글에 `{` `}` `<` 를 그냥 씀 → 인라인 코드 `` `{...}` `` 로 감싸기 |
| 컴포넌트 안 마크다운이 그대로 보임 | `<Tab>`, `<Editor>`, `<div class="tbl">` 바로 다음/앞에 **빈 줄** 필요 |
| `site.ts` 에러 | 문장 안 `'` → `\'` 로, 항목 끝 쉼표 빠짐 확인 |
| 이미지가 안 보임 | 경로는 `public/` 을 빼고 `/img/…` 로 시작, 파일 이름 대소문자까지 일치 |
| 컴포넌트 속성 에러 | `items={[...]}` 같은 긴 값은 **한 줄**로 |
| 프론트매터 에러 | `project`는 4개 키 중 하나, `order`는 숫자 |

빌드 에러 메시지에는 파일 이름과 줄 번호가 나옵니다. 막히면 그 메시지를 그대로 복사해서 물어보면 됩니다.
