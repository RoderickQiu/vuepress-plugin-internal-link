# vuepress-plugin-internal-link

When setting up wikis or taking notes, `[[internal links]]` are useful. However, vuepress itself doens't have a convient way of having internal links. And that's what this plugin is for.

## Install and Use

### 1. Installation

Simply use yarn to fetch this package for you. NPM is also OK.

```shell
yarn add vuepress-plugin-internal-link
```

### 2. Configuration

It's extremely easy to use this plugin.

Find your `.vuepress/config.js`, and just write down:

```js
plugins: {
    'internal-link': {}
}
```

Then the whole world is your oyster.

#### Use with custom parsing pattern

The default pattern can only parse English and Chinese, so in some cases you may need to use another pattern.

Find your `.vuepress/config.js`, and write down:

```js
plugins: {
    'internal-link': {
        linkPattern: /YOUR_PATTERN/
    }
}
```

The pattern should be a valid regex.

### 3. Usage

To use internal link, you need to write stuff like `[[link]]` and `[[another link]]`, which will resulted in an internal link to `./link.md` or `./link.html` after building.

This internal link feature can be used to export articles from platforms like [Obsidian](https://obsidian.md).

Also, for VSCode users, don't hesitate to try [Markdown Notes](https://marketplace.visualstudio.com/items?itemName=kortina.vscode-markdown-notes).

## Acknowledgements

- Based on [ig3/markdown-it-wikilinks](https://github.com/ig3/markdown-it-wikilinks) by [jsepia](https://github.com/jsepia) and [ig3](https://github.com/ig3).
