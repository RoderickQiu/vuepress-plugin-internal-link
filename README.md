# vuepress-plugin-internal-link

When setting up wikis or taking notes, internal links are useful. However, vuepress itself doens't have a convient way of having internal links. And that's what this plugin is for.

## Install and Use

### 1. Install

Simply use yarn to fetch this package for you. NPM is also OK.

```shell
yarn add vuepress-plugin-internal-link
```

### 2. Use

It's extremely easy to use this plugin.

Find your `.vuepress/config.js`, and write down:

```js
plugins: {
    'internal-link': {}
}
```

The whole world is your oyster.

## Acknowledgements

- Based on [ig3/markdown-it-wikilinks](https://github.com/ig3/markdown-it-wikilinks) by [jsepia](https://github.com/jsepia) and [ig3](https://github.com/ig3).
