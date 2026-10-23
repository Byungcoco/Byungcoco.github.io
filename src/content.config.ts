import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// 코드 리뷰 한 편 = src/content/reviews/<프로젝트>/<번호>-<이름>.mdx
const reviews = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/reviews' }),
  schema: z.object({
    project: z.enum(['duet', 'naruto', 'mullet', 'katana']),
    order: z.number(), // 프로젝트 안에서의 순서 (이전/다음 글, 목차 드롭다운)
    title: z.string(),
    topic: z.string(), // 드롭다운에 보이는 짧은 분류
    chips: z.array(z.string()).default([]),
    // 개선 과정: 이 주제의 이전 단계 리뷰
    lineage: z.object({ label: z.string(), href: z.string().optional() }).optional(),
  }),
});

export const collections = { reviews };
