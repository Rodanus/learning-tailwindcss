const tailwind = require("tailwindcss"),
  autoprefixer = require("autoprefixer"),
  purgecss = require("@fullhuman/postcss-purgecss");

module.exports = {
  plugins: [
    tailwind(),
    autoprefixer(),
    purgecss({ content: ["public/index.html"] })
  ]
};
