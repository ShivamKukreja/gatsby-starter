const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-blog-post-js": hot(preferDefault(require("/Users/shikukre/Desktop/_BACK_UP_SHIVAM/personal/learn/gatsby-markdown-starter/src/templates/blog-post.js"))),
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/shikukre/Desktop/_BACK_UP_SHIVAM/personal/learn/gatsby-markdown-starter/.cache/dev-404-page.js"))),
  "component---src-pages-about-js": hot(preferDefault(require("/Users/shikukre/Desktop/_BACK_UP_SHIVAM/personal/learn/gatsby-markdown-starter/src/pages/about.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/shikukre/Desktop/_BACK_UP_SHIVAM/personal/learn/gatsby-markdown-starter/src/pages/index.js"))),
  "component---src-pages-my-files-js": hot(preferDefault(require("/Users/shikukre/Desktop/_BACK_UP_SHIVAM/personal/learn/gatsby-markdown-starter/src/pages/my-files.js")))
}

