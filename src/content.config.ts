import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// 코드 리뷰 한 편 = src/content/reviews/<프로젝트>/<번호>-<이름>.mdx
const lin = z.object({ label: z.string(), href: z.string().optional() });

const reviews = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/reviews' }),
  schema: z.object({
    project: z.enum(['duet', 'naruto', 'mullet', 'katana']),
    order: z.number(), // 프로젝트 안에서의 순서 (이전/다음 글, 목차 드롭다운)
    title: z.string(),
    topic: z.string(), // 드롭다운에 보이는 짧은 분류
    chips: z.array(z.string()).default([]),
    // 개선 과정: 이 주제의 이전 단계 리뷰
    // 하나 또는 여러 개. href가 사이트 안 리뷰면 제목은 그 리뷰에서 자동으로 가져온다.
    lineage: z.union([lin, z.array(lin)]).optional(),
    thumb: z.string().optional(), // 목록 썸네일(없으면 본문 첫 그림)
  }),
});

// 학습 노트 한 편 = src/content/notes/<시리즈>/<번호>-<이름>.mdx
const notes = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/notes' }),
  schema: z.object({
    series: z.enum(['lyra', 'unreal-cpp', 'ds']),
    order: z.number(),
    title: z.string(),
    date: z.string(), // 처음 작성한 날짜 YYYY-MM-DD
    topic: z.string().optional(),
    source: z.string().optional(), // 원문 링크(티스토리 등)
    thumb: z.string().optional(), // 목록 썸네일(없으면 본문 첫 그림)
  }),
});

export const collections = { reviews, notes };
