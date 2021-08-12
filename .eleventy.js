const config = {
};

module.exports = function(eleventyConfig) {
  // Customized Markdown Export.
  let markdownIt = require("markdown-it");
  let md = markdownIt({html: true})
  md.use(require("markdown-it-deflist"));
  md.use(require("markdown-it-anchor"));
  eleventyConfig.setLibrary("md", md);

  eleventyConfig.addPairedShortcode("markdown", (content) => {
    return md.render(content);
  });

  // Files to copy
  eleventyConfig.addPassthroughCopy("favicon.ico");
  eleventyConfig.addPassthroughCopy("gt.css");
  eleventyConfig.addPassthroughCopy("w3.css");
  // eleventyConfig.addPassthroughCopy("img/logo.png");
  // eleventyConfig.addPassthroughCopy("img/GT-hexes.jpg");
  // eleventyConfig.addPassthroughCopy("w3.css");

  // Extensions to copy
  // eleventyConfig.setTemplateFormats(["css", "js", "json", "png", "jpg"]);
  eleventyConfig.addPassthroughCopy("img");

  eleventyConfig.addLiquidFilter("fixDate", function(value){
    value.setTime(value.getTime() + (5*60*60*1000));
    return value; })

  return config;
};
