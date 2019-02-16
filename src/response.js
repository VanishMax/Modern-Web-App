import fetch from 'node-fetch'

export default async function(url) {
  const data = await fetch(url)
  return data.json()
}
