// 학습 노트 시리즈. 글은 src/content/notes/<key>/<번호>-<이름>.mdx
export const noteSeries = [
  { key: 'lyra', name: 'Lyra 분석', desc: '언리얼 Lyra 샘플을 클론 코딩하며 Experience, GameFeature, Cosmetic, Weapon, Ability System 구조를 따라간 기록', source: '티스토리' },
  { key: 'unreal-cpp', name: '언리얼 C++', desc: '접두어, 리플렉션, CDO, UObject, 스마트 포인터 등 언리얼 C++의 기본 규칙 정리', source: '티스토리' },
  { key: 'ds', name: '자료구조', desc: '「열혈강의 자료구조」를 따라 리스트부터 B-트리, 해싱, 정렬, 그래프까지 직접 구현하며 정리한 노트', source: '학습 메모' },
] as const;
export type NoteSeriesKey = (typeof noteSeries)[number]['key'];
