export const fetchDoc = async (url: string) => {
  const res = await fetch(url)

  if (!res.ok) throw new Error(`Error fetching ${url}: ${res.statusText}`)

  return res.text()
}
