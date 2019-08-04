const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/biancagonzalez/Desktop/side-projects/portfolio/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/biancagonzalez/Desktop/side-projects/portfolio/src/pages/404.js"))),
  "component---src-pages-blog-js": hot(preferDefault(require("/Users/biancagonzalez/Desktop/side-projects/portfolio/src/pages/blog.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/biancagonzalez/Desktop/side-projects/portfolio/src/pages/index.js")))
}

