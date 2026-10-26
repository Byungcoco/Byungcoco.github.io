import { getCollection } from 'astro:content';
import { noteSeries } from '../data/notes';
import { projects } from '../data/site';
import { thumbOf, summaryOf } from './preview';

const fmt = (d: string) => d.replaceAll('-', '.');

// 학습 노트 왼쪽 카테고리
export async function noteGroups(active?: string) {
  const all = await getCollection('notes');
  const count = (k: string) => all.filter((n) => n.data.series === k).length;
  const groups: { title?: string; items: { label: string; href: string; count: number; active?: boolean; sub?: boolean }[] }[] = [
    { items: [{ label: '전체', href: '/notes/', count: all.length, active: !active }] },
  ];
  for (const g of [...new Set(noteSeries.map((s) => s.group))]) {
    groups.push({ title: g, items: noteSeries.filter((s) => s.group === g).map((s) => ({ label: s.name, href: `/notes/${s.key}/`, count: count(s.key), active: active === s.key, sub: true })) });
  }
  return groups;
}

export async function noteCards(series?: string) {
  let list = await getCollection('notes', (n) => !series || n.data.series === series);
  list = series ? list.sort((a, b) => a.data.order - b.data.order) : list.sort((a, b) => b.data.date.localeCompare(a.data.date) || b.data.order - a.data.order);
  return list.map((n) => ({
    href: `/notes/${n.id}/`,
    title: n.data.title,
    meta: fmt(n.data.date) + (n.data.topic ? ` · ${n.data.topic}` : ''),
    badge: series ? `#${n.data.order}` : noteSeries.find((s) => s.key === n.data.series)!.name,
    summary: summaryOf(n.body),
    thumb: thumbOf(n.body, n.data.thumb),
  }));
}

// 코드 리뷰 왼쪽 카테고리 = 프로젝트 4개
export async function reviewGroups(active: string) {
  const all = await getCollection('reviews');
  return [{ title: '프로젝트', items: projects.map((p) => ({ label: p.name, href: `/reviews/${p.key}/`, count: all.filter((r) => r.data.project === p.key).length, active: active === p.key })) }];
}

export async function reviewCards(project: string) {
  const list = (await getCollection('reviews', (r) => r.data.project === project)).sort((a, b) => a.data.order - b.data.order);
  return list.map((r) => ({
    href: `/reviews/${r.id}/`,
    title: r.data.title,
    meta: r.data.topic,
    badge: String(r.data.order).padStart(2, '0'),
    summary: summaryOf(r.body),
    thumb: thumbOf(r.body, r.data.thumb),
  }));
}
