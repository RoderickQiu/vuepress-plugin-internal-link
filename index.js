const wikiLinkPlugin = require('@ig3/markdown-it-wikilinks')({ linkPattern: /\[\[(([\w\s/]|[\u4e00-\u9fa5])+)(\|((([\w\s/]|[\u4e00-\u9fa5]))+))?\]\]/ })

module.exports = (options, context) => ({
    extendMarkdown(md) {
        md.use(wikiLinkPlugin);
    }
})
