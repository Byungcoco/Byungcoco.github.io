import { getCollection } from 'astro:content';
import { noteSeries } from '../data/notes';
import { thumbOf, summaryOf } from './preview';

export async function noteCards(series?: string) {
  let list = await getCollection('notes', (n) => !series || n.data.series === series);
  list = series ? list.sort((a, b) => a.data.order - b.data.order) : list.sort((a, b) => b.data.date.localeCompare(a.data.date) || b.data.order - a.data.order);
  return list.map((n) => ({
    href: `/notes/${n.id}/`,
    title: n.data.title,
    meta: n.data.topic ?? '',
    badge: series ? `#${n.data.order}` : noteSeries.find((s) => s.key === n.data.series)!.name,
    summary: summaryOf(n.body),
    thumb: thumbOf(n.body, n.data.thumb),
  }));
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
