import React, { useEffect, useState } from "react";
import { Container, Row, Col, Pagination } from "react-bootstrap";
import Layout from "../Layout";
import RSS from "../../services/publications";
import PubCard from "../../components/PubCard";

const Home = ({}) => {
  const [publications, setPublications] = useState([]);
  const [flagPub, setFlagPub] = useState([]);
  const [sorted, setSorted] = useState(false);

  const PublicationType = Object.freeze({
    MEDIUM: { name: "Medium", icon: "" },
    INSTA: { name: "Instagram", icon: "" },
  });

  const hashCode = function (word) {
    var hash = 0,
      i,
      chr;
    if (word.length === 0) return hash;
    for (i = 0; i < word.length; i++) {
      chr = word.charCodeAt(i);
      hash = (hash << 5) - hash + chr;
      hash |= 0; // Convert to 32bit integer
    }
    return hash;
  };

  useEffect(() => {
    async function fetchMediumData() {
      // You can await here
      console.log("4. Fetching medium data ");
      let mediumPublications = await RSS.getMediumPublications();
      let pubArray = [];

      for (let mdidx in mediumPublications) {
        let tmp = {
          title: mediumPublications[mdidx].title,
          image: mediumPublications[mdidx].thumbnail,
          type: PublicationType.MEDIUM,
          link: mediumPublications[mdidx].link,
          date: mediumPublications[mdidx].pubDate,
        };

        if (!(await publications.find((x) => x.link === tmp.link)))
          pubArray.push(tmp);
      }
      let instaPub = await RSS.getInstagramPublications();

      for (let mdidx in instaPub) {
        let tmp = {
          title: instaPub[mdidx].title.split("\n.\n.")[0],
          image: instaPub[mdidx].image,
          type: PublicationType.INSTA,
          link: instaPub[mdidx].url,
          date: instaPub[mdidx].date_published,
        };

        if (!publications.find((x) => x.link === tmp.link)) pubArray.push(tmp);
      }

      if (pubArray.length > 0) setPublications([...publications, ...pubArray]);
      setFlagPub([...flagPub, "insta"]);
      pubArray.sort((a, b) => new Date(b.date) - new Date(a.date));
      setPublications(pubArray);
    }

    fetchMediumData();
  }, []);

  return (
    <Layout title="Home">
      <Container
        style={{
          height: "600px",
          maxWidth: "100%",
          background: "rgba(0, 0, 0, 0.3)",
          padding: "22px",
          marginTop: "50px",
          paddingTop: "50px",
          marginBottom: "50px",
        }}>
        {/* <Row xs={2} md={3} lg={6}>
          {publications &&
            publications.map((item) => {
              return (
                <Col className="mt-4">
                  <PubCard
                    key={hashCode(item.title)}
                    title={item.title}
                    thumbnail={item.image}
                    link={item.link}
                  />
                </Col>
              );
            })}
        </Row> */}
        <iframe
          title="rss_Feed"
          style={{ width: "100%", height: "100%" }}
          src="https://rss.app/embed/v1/wall/_6HMi8tUjLnL16WW1"
          frameborder="0"></iframe>
      </Container>
    </Layout>
  );
};

export default Home;
