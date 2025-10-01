import * as cheerio from 'cheerio'

export const fetchDoc = async (url: string) => {
  const res = await fetch(url)

  if (!res.ok) throw new Error(`Error fetching ${url}: ${res.statusText}`)

  const html = await res.text()
  const $ = cheerio.load(html)

  return $('#maincontent').text().trim()
}
