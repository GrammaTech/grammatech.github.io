const config = {
};

module.exports = function(eleventyConfig) {
  // Customized Markdown Export.
  let markdownIt = require("markdown-it");
  let md = markdownIt({html: true})
  md.use(require("markdown-it-deflist"));
  md.use(require("markdown-it-anchor"));
  md.use(require("markdown-it-mermaid-plugin"));
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
  eleventyConfig.addPassthroughCopy("videos");

  eleventyConfig.addLiquidFilter("fixDate", function(value){
    value.setTime(value.getTime() + (5*60*60*1000));
    return value; })

  eleventyConfig.addFilter("andList", function(list){
    if (list.length > 1){
      return list.slice(0,-1).join(", ")+" and "+list.slice(-1)[0];
    } else {
      return list.join("");
    }
  })

  eleventyConfig.addFilter("orList", function(list){
    if (list.length > 1){
      return list.slice(0,-1).join(", ")+" or "+list.slice(-1)[0];
    } else {
      return list.join("");
    }
  })

  // Bibtex export.
  let bibtexParse = require("bibtex-parse");
  eleventyConfig.addDataExtension("bib",
                                  contents => Object.assign({ layout: 'bib', tags: 'bib' },
                                                            bibtexParse.entries(contents)[0]))

  eleventyConfig.addCollection("bibSort", function(collectionApi) {
    return collectionApi.getFilteredByTag("bib").sort(function(a,b) {
      if (a.data.YEAR == b.data.YEAR) {
        if (a.data.AUTHOR < b.data.AUTHOR) {
          return 1
        } else {
          return -1
        }
      } else {
        return parseInt(a.data.YEAR) - parseInt(b.data.YEAR)
      }
    }).reverse()
  })

  // Strip newlines
  eleventyConfig.addFilter("clean", function(value) {
    if(value) {
      return value
        .replace(/\s+/g, " ")          // Drop newlines.
        .replace(/n'([^\ss])/g, "ń$1") // Accent characters
        .replace(/r'([^\ss])/g, "ŕ$1")
        .replace(/\\cc/g, "ç")
    } else {
      return ""
    }
  });

  eleventyConfig.addFilter("xspace", function(value) {
    if(value) {
      return value + " ";
    } else {
      return ""
    }
  });

  return config;
};
