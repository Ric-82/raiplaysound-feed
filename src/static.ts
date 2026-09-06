import fs from "fs/promises"
import path from "path"
import { buildFeed } from "./feed.js"
import { initCache } from "./cache.js"

const BASE_URL = "https://ric-82.github.io/raiplaysound-feed"

type FeedItem = {
  title: string
  path: string
}

const podcasts: FeedItem[] = [
  { title: "GR Sicilia", path: "grsicilia" },
  { title: "GR3", path: "gr3" },
  { title: "Prima Pagina", path: "primapagina" },
  { title: "Radio3 Mondo", path: "radio3mondo" }
]

const allFeeds: FeedItem[] = [...podcasts]

const sortedPodcasts = [...podcasts].sort((a, b) =>
  a.title.localeCompare(b.title, "it", { sensitivity: "base" })
)

await initCache()
await fs.mkdir("out/rss", { recursive: true })

for (const feed of allFeeds) {
  try {
    console.log(`Generating ${feed.title}: ${feed.path}`)

    const xml = await buildFeed(feed.path)
    const file = path.join("out/rss", `${feed.path}.xml`)

    await fs.mkdir(path.dirname(file), { recursive: true })
    await fs.writeFile(file, xml)

    console.log(`Generated ${file}`)
  } catch (err) {
    console.error(`Skipped ${feed.title} (${feed.path})`)
    console.error(err)
  }
}

function markdownRows(feeds: FeedItem[]) {
  return feeds
    .map(feed => {
      const feedUrl = `${BASE_URL}/rss/${feed.path}.xml`
      return `| ${feed.title} | ${feedUrl} |`
    })
    .join("\n")
}

function htmlRows(feeds: FeedItem[]) {
  return feeds
    .map(feed => {
      const feedUrl = `${BASE_URL}/rss/${feed.path}.xml`
      return `<tr>
  <td>${feed.title}</td>
  <td><a href="${feedUrl}">${feedUrl}</a></td>
</tr>`
    })
    .join("\n")
}

const podcastRows = markdownRows(sortedPodcasts)

const readme = `# RaiPlay Sound Feed

Questo repository genera dei feed RSS per i programmi di RaiPlay Sound, e sono generati automaticamente tramite GitHub Actions e GitHub Pages.

## Podcast

| Programma | Feed RSS |
|----------|----------|
${podcastRows}

## Audiolibri

(Nessun audiolibro configurato)

## Abbonarsi o aggiungere un feed

Per abbonarsi basta copiare l'URL del feed dalla tabella nel lettore podcast.

Per aggiungere programmi o audiolibri puoi modificare il file static.ts.

## Aggiornamento automatico

I feed vengono aggiornati automaticamente tramite GitHub Actions ogni 5 minuti.

## INFO

Questo progetto è un'evoluzione del repository originale, adattato per funzionare interamente tramite GitHub Actions e GitHub Pages, senza dipendere da un server esterno.
`

await fs.writeFile("README.md", readme)

await fs.writeFile(
  "out/index.html",
  `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>RaiPlay Sound Feed</title>
</head>
<body>
<h1>RaiPlay Sound Feed</h1>

<p>Feed RSS statici per RaiPlay Sound con URL CDN Rai già risolti.</p>

<h2>Podcast</h2>
<table border="1">
<tr>
<th>Podcast</th>
<th>Feed RSS</th>
</tr>
${htmlRows(sortedPodcasts)}
</table>

<h2>Audiolibri</h2>
<p>Nessun audiolibro configurato.</p>

</body>
</html>
`
)
