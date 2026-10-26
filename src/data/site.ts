export const profile = {
  name: '강병준',
  title: '게임 클라이언트 프로그래머',
  tagline: '가져다 쓰는 개발자가 아니라, 만들어 이해하는 개발자가 되겠습니다.',
  github: 'https://github.com/Byungcoco',
  email: 'dzzzing@naver.com',
  techDoc: '/docs/kang-byungjun-techdoc.pdf',
};

export const stack = [
  { group: '언어', items: ['C', 'C++', 'C#', 'HLSL', 'Lua'] },
  { group: '엔진 · API', items: ['DirectX 11', 'DirectX 9', 'Win32 API', 'Unity', 'Roblox Studio'] },
  { group: '라이브러리', items: ['PhysX', 'FMOD', 'ImGui', 'Assimp', 'nlohmann/json'] },
  { group: '도구', items: ['Visual Studio', 'Nsight Systems', 'Git', 'MySQL', 'Notion'] },
];

export type ProjectKey = 'duet' | 'naruto' | 'mullet' | 'katana';

export const projects: {
  key: ProjectKey; name: string; genre: string; start: string; end: string; dur: string; team: string;
  lead: boolean; roleText: string; thumb: string; desc: string; tags: string[]; yt: string; gh: string;
}[] = [
  {
    key: 'duet', name: '듀엣 나이트 어비스 모작', genre: '3D 액션', start: '2026.02', end: '2026.04', dur: '2개월', team: '팀 6명',
    lead: true, roleText: '(프레임워크 · 셰이더 · 보스)', thumb: '/img/projects/duet.jpg',
    desc: '빠른 3D 전투를 팀 엔진으로 다시 만들었습니다. 히트스톱·슬로모션으로 타격감을 만들고, 보스 패턴을 데이터로 짜고, 맞았다는 판정이 전투 규칙이 되기까지를 맡았습니다. 컬링은 Nsight Systems로 측정해 분할 기준을 다시 잡았습니다.',
    tags: ['DirectX 11', 'C++', 'HLSL'],
    yt: 'https://youtu.be/OPflYHV9Pq8?si=Q0-iP06WpE980jZi', gh: 'https://github.com/Byungcoco/FinalProject',
  },
  {
    key: 'naruto', name: '나루토 모작', genre: '3D 액션', start: '2025.12', end: '2026.01', dur: '1개월', team: '개인',
    lead: false, roleText: '엔진 · 클라이언트 · 콘텐츠', thumb: '/img/projects/naruto.jpg',
    desc: '스킬과 콤보, 캐릭터 커스텀이 있는 3D 액션을 개인 엔진으로 만들었습니다. 상태 머신, 스킬 이벤트, 네비게이션 메시, 이펙트 셰이더를 직접 구현했습니다.',
    tags: ['DirectX 11', 'C++', 'HLSL'],
    yt: 'https://youtu.be/Z5cCLy7Tuso?si=HPK7sUBl2uMS1ngA', gh: 'https://github.com/Byungcoco/D3D11_Practice',
  },
  {
    key: 'mullet', name: '뮬렛 매드잭 모작', genre: 'FPS', start: '2025.08', end: '2025.09', dur: '1개월', team: '팀 3명',
    lead: true, roleText: '(맵 툴 · 이펙트 · 보스)', thumb: '/img/projects/mullet.jpg',
    desc: '쉴 틈 없이 몰아치는 FPS를 DirectX 9 팀 프레임워크로 만들었습니다. 맵 툴로 스테이지를 짜고, 보스 패턴과 파티클 연출을 맡았습니다.',
    tags: ['DirectX 9', 'C++'],
    yt: 'https://youtu.be/7JCpLUCb3-A?si=gvB_hubwqvF9USKm', gh: 'https://github.com/Jusin1/MadMulletJack',
  },
  {
    key: 'katana', name: '카타나 제로 모작', genre: '2D 액션', start: '2025.06', end: '2025.07', dur: '1개월', team: '개인',
    lead: false, roleText: '클라이언트 · 콘텐츠', thumb: '/img/projects/katana.jpg',
    desc: '한 번에 끝나는 2D 액션을 Win32 · GDI 엔진으로 만들었습니다. 시간을 늦추는 슬로모션과 잔상, 충돌과 카메라를 직접 구현했습니다.',
    tags: ['Win32', 'GDI+', 'C++'],
    yt: 'https://youtu.be/IY5oGaIb_kI?si=H4RgzuLevsUUnN-G', gh: 'https://github.com/Byungcoco/KatanaZero_Copy',
  },
];

export const games = [
  { title: '오버워치', badge: '그랜드마스터', meta: 'FPS · 한국 서버 그랜드마스터', note: '' },
  { title: '발로란트', badge: '40위권', meta: 'FPS · 한국 서버 40위권', note: '' },
  { title: '배틀그라운드', badge: '300위권', meta: '배틀로얄 · 첫 시즌 한국 서버 300위권', note: '' },
  { title: '붉은사막', badge: '40시간', meta: '오픈월드', note: '끊김 없는 월드 스트리밍과 다수 상호작용 객체의 동시 관리 구조를 자체 엔진의 리소스 로딩·객체 상태 설계 관점에서 분석' },
  { title: '사이버펑크 2077', badge: '30시간', meta: '오픈월드', note: '게임 프로그래밍에 관심을 갖게 된 계기' },
  { title: '메이플스토리', badge: 'Lv.280', meta: '2D 횡스크롤 MMORPG · 유니온 8680 · Lv.280', note: '' },
  { title: '에이펙스 레전드', badge: '150시간', meta: '배틀로얄', note: '' },
  { title: '데드록', badge: '120시간', meta: 'TPS · MOBA', note: '' },
  { title: '카타나 제로', badge: '엔딩 2회차', meta: '핵 앤 슬래시', note: '학습 프로젝트로 모작한 원작' },
  { title: '나루토 시노비 스트라이커', badge: '40시간', meta: 'ARPG', note: '학습 프로젝트로 모작한 원작' },
  { title: '뮬렛 매드잭', badge: '10시간', meta: 'FPS · 로그라이크', note: '학습 프로젝트로 모작한 원작' },
  { title: '문명 6', badge: '70시간', meta: '4X 턴제 전략 시뮬레이션', note: '' },
];
export const GAMES_TOP = 6;
