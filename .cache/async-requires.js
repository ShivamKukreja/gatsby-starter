// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-templates-blog-post-js": () => import("/Users/shikukre/Desktop/_BACK_UP_SHIVAM/personal/learn/gatsby-markdown-starter/src/templates/blog-post.js" /* webpackChunkName: "component---src-templates-blog-post-js" */),
  "component---cache-dev-404-page-js": () => import("/Users/shikukre/Desktop/_BACK_UP_SHIVAM/personal/learn/gatsby-markdown-starter/.cache/dev-404-page.js" /* webpackChunkName: "component---cache-dev-404-page-js" */),
  "component---src-pages-about-js": () => import("/Users/shikukre/Desktop/_BACK_UP_SHIVAM/personal/learn/gatsby-markdown-starter/src/pages/about.js" /* webpackChunkName: "component---src-pages-about-js" */),
  "component---src-pages-index-js": () => import("/Users/shikukre/Desktop/_BACK_UP_SHIVAM/personal/learn/gatsby-markdown-starter/src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */),
  "component---src-pages-my-files-js": () => import("/Users/shikukre/Desktop/_BACK_UP_SHIVAM/personal/learn/gatsby-markdown-starter/src/pages/my-files.js" /* webpackChunkName: "component---src-pages-my-files-js" */)
}

exports.data = () => import(/* webpackChunkName: "pages-manifest" */ "/Users/shikukre/Desktop/_BACK_UP_SHIVAM/personal/learn/gatsby-markdown-starter/.cache/data.json")

