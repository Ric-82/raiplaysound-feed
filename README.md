# RaiPlay Sound Feed

Questo repository genera dei feed RSS per i programmi di RaiPlay Sound, e sono generati automaticamente tramite GitHub Actions e GitHub Pages. In modo da potersi abbonare/ascoltare su qualsiasi client podcast e non esclusivamente tramite l’app RaiPlaySound.

## Podcast

| Programma | Feed RSS |
|----------|----------|
| GR Sicilia | https://ric-82.github.io/raiplaysound-feed/rss/programmi/grsicilia.xml |
| GR3 | https://ric-82.github.io/raiplaysound-feed/rss/programmi/gr3.xml |
| Prima Pagina | https://ric-82.github.io/raiplaysound-feed/rss/programmi/primapagina.xml |
| Radio3 Mondo | https://ric-82.github.io/raiplaysound-feed/rss/programmi/radio3mondo.xml |

## Audiolibri

(Nessun audiolibro configurato)

## Abbonarsi o aggiungere un feed

Per abbonarsi basta copiare l'URL del feed dalla tabella nel lettore podcast.

Per aggiungere programmi o audiolibri puoi forkare il repository e aggiungere manualmente i feed, oppure aprire una Pull Request modificando `static.ts`, esempio:

```ts
{
  title: "Radio3 Scienza",
  path: "programmi/radio3scienza"
}

```

oppure per un audiolibro:

```ts
{
  title: "Arancia meccanica",
  path: "audiolibri/aranciameccanica"
}
```

> [!NOTE]
> La tabella con i feed o audiolibri nuovi si aggiorna automaticamente con il nuovo feed, in ordine alfabetico, quando viene eseguita la Action. Non aggiungere o modificare manualmente la tabella.

## Aggiornamento ogni ora

I feed vengono aggiornati automaticamente tramite GitHub Actions ogni ora e viene controllata la validità degli URL vecchi ogni 14 giorni.

## INFO

Questo progetto è un'evoluzione di un mio [precedente repository](https://github.com/giuliomagnifico/raiplay-feed), il quale aveva il problema di non risolvere correttamente il redirect ed era quindi necessario scaricare il file prima di riprodurre certi podcast. Adesso gli URL vengono risolti fino alla CDN finale Rai, evitando i problemi causati dai redirect `relinkerServlet.htm` con alcuni client podcast, ad esempio [Pocket Casts](https://pocketcasts.com/).


> [!TIP]
> È una versione modificata del repository [frammenti/raiplaysoundrss](https://github.com/frammenti/raiplaysoundrss), costruita per poter funzionare usando solo GitHub, in modo da essere indipendente da un server esterno.

