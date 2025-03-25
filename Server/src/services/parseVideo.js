const axios = require("axios");
const cheerio = require("cheerio");

async function parseVideo(url) {
  const { data } = await axios.get(url);
  const $ = cheerio.load(data);

  const title = $('meta[property="og:title"]').attr("content") || $("title").text();
  const thumbnail = $('meta[property="og:image"]').attr("content");

  return { title, thumbnail };
}

module.exports = { parseVideo };
