const getOptions = {
  method: "GET",
  mode: "no-cors",
};

const getMediumPublications = async () => {
  try {
    const publications = await fetch(
      "https://api.rss2json.com/v1/api.json?" +
        new URLSearchParams({
          rss_url: "https://medium.com/feed/@inesdematos",
          api_key: process.env.API_RSS_API_KEY,
        })
    )
      .catch((err) => console.log("ERRO: ", err))
      .then(async (bla) => {
        let pubs = await bla.json();
        return pubs.items;
      });
    return publications;
  } catch (err) {
    console.log(err);
  }
  return;
};

const getInstagramPublications = async () => {
  try {
    const res = await fetch("https://rss.app/feeds/v1.1/WJhKM8fDWIsTJEkE.json");
    const publications = (await res.json()).items;
    return publications;
  } catch (err) {
    console.log(err);
  }
  return;
};

module.exports = {
  getMediumPublications,
  getInstagramPublications,
};
