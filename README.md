# RaiPlay Sound Feed

Questo repository genera dei feed RSS per i programmi di RaiPlay Sound, e sono generati automaticamente tramite GitHub Actions e GitHub Pages. In modo da potersi abbonare/ascoltare su qualsiasi client podcast e non esclusivamente tramite l’app RaiPlaySound.


## Podcast

| Programma | Feed RSS |
|----------|----------|
| America7 | https://ric-82.github.io/raiplaysound-feed/rss/programmi/america7.xml |
| Battiti | https://ric-82.github.io/raiplaysound-feed/rss/programmi/battiti.xml |
| Body and soul | https://ric-82.github.io/raiplaysound-feed/rss/programmi/bodyandsoul.xml |
| Detectives - Casi risolti e irrisolti | https://ric-82.github.io/raiplaysound-feed/rss/programmi/detectives-casirisoltieirrisolti.xml |
| Eta Beta | https://ric-82.github.io/raiplaysound-feed/rss/programmi/etabeta.xml |
| Giro del Mondo in una Coppa | https://ric-82.github.io/raiplaysound-feed/rss/programmi/girodelmondoinunacoppa.xml |
| GR Puglia | https://ric-82.github.io/raiplaysound-feed/rss/programmi/grpuglia.xml |
| GR Sicilia | https://ric-82.github.io/raiplaysound-feed/rss/programmi/grsicilia.xml |
| GR1 | https://ric-82.github.io/raiplaysound-feed/rss/programmi/gr1.xml |
| GR3 | https://ric-82.github.io/raiplaysound-feed/rss/programmi/gr3.xml |
| L'edicola di Radio1 | https://ric-82.github.io/raiplaysound-feed/rss/programmi/ledicoladiradio1.xml |
| L'idealista | https://ric-82.github.io/raiplaysound-feed/rss/programmi/lidealista.xml |
| La musica tra le righe | https://ric-82.github.io/raiplaysound-feed/rss/programmi/lamusicatralerighe.xml |
| Lezioni di musica | https://ric-82.github.io/raiplaysound-feed/rss/programmi/lezionidimusica.xml |
| Lillo e Greg 610 | https://ric-82.github.io/raiplaysound-feed/rss/programmi/lilloegreg610.xml |
| Number Stations - Le radio delle spie | https://ric-82.github.io/raiplaysound-feed/rss/programmi/numberstations-leradiodellespie.xml |
| Pillole di Eta Beta | https://ric-82.github.io/raiplaysound-feed/rss/programmi/pilloledietabeta.xml |
| Prima Pagina | https://ric-82.github.io/raiplaysound-feed/rss/programmi/primapagina.xml |
| Primo movimento | https://ric-82.github.io/raiplaysound-feed/rss/programmi/primomovimento.xml |
| Radio anch'io | https://ric-82.github.io/raiplaysound-feed/rss/programmi/radioanchio.xml |
| Radio3 Mondo | https://ric-82.github.io/raiplaysound-feed/rss/programmi/radio3mondo.xml |
| Radio3 Scienza | https://ric-82.github.io/raiplaysound-feed/rss/programmi/radio3scienza.xml |
| Revolution | https://ric-82.github.io/raiplaysound-feed/rss/programmi/revolution.xml |
| Riverberi | https://ric-82.github.io/raiplaysound-feed/rss/programmi/riverberi.xml |
| Sei gradi | https://ric-82.github.io/raiplaysound-feed/rss/programmi/seigradi.xml |
| Tra poco in edicola | https://ric-82.github.io/raiplaysound-feed/rss/programmi/trapocoinedicola.xml |
| Trenta minuti | https://ric-82.github.io/raiplaysound-feed/rss/programmi/radio3trentaminuti.xml |
| Tutta la città ne parla | https://ric-82.github.io/raiplaysound-feed/rss/programmi/tuttalacittaneparla.xml |
| Un giorno da pecora | https://ric-82.github.io/raiplaysound-feed/rss/programmi/ungiornodapecora.xml |
| Wikiradio. Le voci della storia | https://ric-82.github.io/raiplaysound-feed/rss/programmi/wikiradiolevocidellastoria.xml |
| Zapping | https://ric-82.github.io/raiplaysound-feed/rss/programmi/zapping.xml |

## Audiolibri

| Audiolibro | Feed RSS |
|------------|----------|
| Arancia meccanica | https://ric-82.github.io/raiplaysound-feed/rss/audiolibri/aranciameccanica.xml |
| Cuore di tenebra | https://ric-82.github.io/raiplaysound-feed/rss/audiolibri/cuoreditenebra.xml |
| Il grande Gatsby | https://ric-82.github.io/raiplaysound-feed/rss/audiolibri/ilgrandegatsby.xml |
| Racconti di Italo Calvino | https://ric-82.github.io/raiplaysound-feed/rss/audiolibri/raccontidiitalocalvino.xml |
| Ventimila leghe sotto i mari | https://ric-82.github.io/raiplaysound-feed/rss/audiolibri/ventimilaleghesottoimari.xml |

## Abbonarsi o aggiungere un feed

Per abbonarsi basta copiare l'URL del feed dalla tabella nel lettore podcast.

Per aggiungere programmi o audiolibri puoi forkare il repository e aggiungere manualmente i feed, oppure aprire una Pull Request modificando [static.ts](https://github.com/giuliomagnifico/raiplaysound-feed/blob/main/src/static.ts), esempio:

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
