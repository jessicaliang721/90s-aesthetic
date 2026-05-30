export const toHtmlParagraphs = (text: string) =>
  text
    .split('\n\n')
    .map(p => `<p>${p.trim()}</p>`)
    .join('')