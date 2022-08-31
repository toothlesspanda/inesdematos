import React, { useEffect, useState } from "react";
import { Card, Button, Badge } from "react-bootstrap";
import "./card.css";

const PubCard = ({ title, thumbnail, description, date }) => {
  const [image, setImage] = useState();

  useEffect(() => {
    async function getImage() {
      let imageBlob;
      try {
        imageBlob = await fetch(thumbnail, {
          method: "GET",
          cors: "no-cors",
          headers: {
            "Cross-Origin-Resource-Policy": "cross-origin",
          },
        });
        console.log(imageBlob);
        setImage(imageBlob);
      } catch (err) {
        return null;
      }
    }

    getImage();
  });

  return (
    // <div className="card">
    //   <div className="card__image">
    //     <img alt={"*"} src={thumbnail} />
    //   </div>
    //   <div className="card__title">
    //     <span>{title}</span>
    //   </div>
    // </div>
    <div>
      <Card
        // border="warning"
        style={{ height: "130px", position: "relative" }}
        bg={"dark"}
        text={"white"}>
        <Card.Img
          crossOrigin="anonymous"
          style={{ height: "100%" }}
          variant="top"
          src={""}
        />
        {/* <Card.Body>
        <div>
          <span>{title}</span>
        </div>
      </Card.Body> */}
        <div className="overlay">
          <div>
            <Badge className={"overlay__badge "} bg="light" text="dark">
              Medium
            </Badge>
          </div>
          <div className={"overlay__text"}>{title}</div>
        </div>
      </Card>
    </div>
  );
};

export default PubCard;
