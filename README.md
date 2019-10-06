# MMM-scrape

This is a Magic Mirror Module which loads parts of a remote website based on a CSS selector.
It uses JSDOM to load an external URL, and then Selectors to scrape the contents of interest.

Mostly written by @sdetweil - many thanks.

## Installation

1. Clone this repo into `~/MagicMirror/modules` directory.
1. Run command `npm install` in `~/MagicMirror/modules/MMM-scrape` directory, to install all dependencies.
1. Configure your `~/MagicMirror/config/config.js`:


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
