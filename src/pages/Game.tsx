import { useParams } from "react-router-dom";
import Header from "../src/Header";
import { pageType } from "../src/enums.ts";

import { useContext, useEffect } from "react";
import { GamesContext } from "../App.tsx";

function Game() {
  const { id } = useParams();
  const games = useContext(GamesContext);
  const gameData = games.find((g) => g.id === id);

  console.log(`Game id: ${gameData}`);

  if (!gameData) return <h1 className="text-white m-2">Cannot find game.</h1>;

  useEffect(() => {
    document.title = `GameList: ${gameData.title}`;
  }, []);

  return (
    <div className="d-flex flex-column min-vh-100">
      <Header page={pageType.Game} />
      <div className="container-fluid p-0 bg-black text-light">
        {/* Hero section */}
        <div
          className="position-relative text-light"
          style={{
            backgroundImage: `url(${gameData.coverURL})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            minHeight: "70vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* Overlay */}
          <div
            className="position-absolute top-0 start-0 w-100 h-100"
            style={{
              background:
                "linear-gradient(to bottom, rgba(0,0,0,0.6), rgba(0,0,0,0.9))",
              backdropFilter: "blur(4px)",
              zIndex: 1,
            }}
          ></div>

          {/* Content */}
          <div
            className="position-relative text-center px-4"
            style={{
              zIndex: 2,
              maxWidth: "900px",
              padding: "2rem",
              borderRadius: "1rem",
              background: "rgba(0, 0, 0, 0.4)",
              boxShadow: "0 0 30px rgba(255, 255, 255, 0.1)",
            }}
          >
            <h1
              className="display-3 fw-bold mb-4"
              style={{
                textShadow: "0 0 10px rgba(255,255,255,0.3)",
                fontFamily: "'Orbitron', sans-serif",
                letterSpacing: "2px",
              }}
            >
              {gameData.title}
            </h1>
            <p
              className="lead mx-auto"
              style={{
                maxWidth: "700px",
                fontSize: "1.25rem",
                lineHeight: "1.6",
                color: "#ccc",
              }}
            >
              {gameData.description}
            </p>
          </div>
        </div>

        {/* Details section */}
        <div className="container py-5">
          <div className="row g-5 align-items-center">
            {/* Game image */}
            <div className="col-lg-5 text-center">
              <img
                src={gameData.imageURL}
                alt={`${gameData.title} cover`}
                className="img-fluid rounded shadow-lg"
                style={{
                  maxHeight: "450px",
                  objectFit: "cover",
                  transition: "transform 0.3s ease",
                }}
                onMouseOver={(e) =>
                  (e.currentTarget.style.transform = "scale(1.05)")
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.transform = "scale(1)")
                }
              />
            </div>

            {/* Metadata and description */}
            <div className="col-lg-7">
              <h2 className="mb-4 border-bottom border-light pb-2">
                Game Details
              </h2>
              <div className="mb-3">
                <span className="badge bg-primary me-2">
                  Type: {gameData.type}
                </span>
                <span className="badge bg-secondary me-2">
                  Genre: {gameData.genre}
                </span>
                <span className="badge bg-dark">ID: {gameData.id}</span>
              </div>

              <div className="mb-4">
                <h5 className="text-light mt-4">Available Platforms</h5>
                <p className="text-light">{gameData.platforms}</p>
              </div>

              <div className="mb-4">
                <h5 className="text-light">About the Game</h5>
                <p className="text-light" style={{ lineHeight: "1.6" }}>
                  {gameData.fullDescription}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Game;
