// 목록 카드용: 글 본문(MDX)에서 썸네일과 요약을 뽑는다.
// 썸네일은 프론트매터 thumb가 있으면 그것, 없으면 본문의 첫 그림.
export function thumbOf(body: string | undefined, override?: string): string | undefined {
  if (override) return override;
  if (!body) return undefined;
  const m = body.match(/<Fig[^>]*\ssrc="([^"]+)"/) || body.match(/!\[[^\]]*\]\(([^)\s]+)\)/);
  return m ? m[1] : undefined;
}

export function summaryOf(body: string | undefined, max = 120): string {
  if (!body) return '';
  const lines = body.replace(/^---[\s\S]*?---/, '').split('\n');
  for (const raw of lines) {
    const l = raw.trim();
    if (!l || /^(import |#|<|\||```|- |\d+\. |!\[)/.test(l)) continue;
    const t = l
      .replace(/^>\s*/, '')
      .replace(/<[^>]+>/g, '')
      .replace(/\*\*|`/g, '')
      .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')
      .replace(/\\([{}])/g, '$1')
      .replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&amp;/g, '&')
      .trim();
    if (t.length < 15) continue;
    return t.length > max ? t.slice(0, max).trimEnd() + '…' : t;
  }
  return '';
}
