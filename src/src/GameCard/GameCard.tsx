import { Card } from "react-bootstrap";
import { gameTypes, gameGenre, coverTitlePosition } from "../enums";
import type { game } from "../models";
import styles from "./GameCard.module.css";
import "react-loading-skeleton/dist/skeleton.css";

function GameCard({
  imageURL = "",
  imagePos = coverTitlePosition.Center,
  title = "",
  description = "",
  type = gameTypes.SinglePlayer,
  genre = gameGenre.FPS,
  id = "",
}: game) {
  return (
    <>
      <Card
        className={`p-1 mt-3 mx-2 ${styles.cardHover}`}
        border="secondary"
        style={{ width: "12rem", height: "400px" }}
        id={id}
        onClick={() => console.log(`Game id: ${id}`)}
      >
        <Card.Body
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            overflow: "visible",
          }}
        >
          <Card.Img
            src={imageURL}
            className="d-block mx-auto"
            style={{
              height: "150px",
              objectFit: "cover",
              objectPosition: imagePos,
            }}
          />

          <Card.Title
            className="my-2 text-center"
            style={{ flexGrow: "1", alignContent: "center" }}
          >
            {title}
          </Card.Title>
          <Card.Text
            style={{
              fontSize: "12px",
              textAlign: "center",
              display: "-webkit-box",
              WebkitLineClamp: 4,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            }}
          >
            {description}
          </Card.Text>
          <Card.Footer style={{ fontSize: "8px" }}>
            Type: {type} <br /> Genre: {genre}
          </Card.Footer>
        </Card.Body>
      </Card>
    </>
  );
}

export default GameCard;
