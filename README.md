# MMM-scrape

This is supposed to become a module for Magic Mirror which loads parts of a remote website based on a DOM selector.

Not working. Needs help.



```javascript

    {
        module: 'MMM-scrape',
        position: 'top_left',
        config: {
                url: "http://fm4.orf.at/player/live",
                domselector: "span.playing",
                loadScripts: "false"
                }
    },

```


## Config Options

| **Option** | **Default** | **Description** |
| --- | --- | --- |
| `url` | 'http://duckduckgo.com' |  The URL of the Site from which content should be scraped |
| `domselector` | `h1` | The CSS Selector for the content which should be extracted from the site
| `loadScripts` | `false` | Telling jsdom to load external scripts - Warning - only use with trusted sites! |
