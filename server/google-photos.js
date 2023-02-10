const axios = require("axios");

const regex = /\["(https:\/\/lh3\.googleusercontent\.com\/[a-zA-Z0-9\-_]*)"/g;

const extractPhotos = (content) => {
  const links = new Set();
  let match;
  while ((match = regex.exec(content))) {
    links.add(match[1]);
  }
  return Array.from(links);
};

const getAlbum = async (id) => {
  const response = await axios.get(`https://photos.app.goo.gl/${id}`);
  return extractPhotos(response.data);
};

module.exports = {
  getAlbum,
};
