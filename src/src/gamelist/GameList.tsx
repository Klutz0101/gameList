import { Button } from "react-bootstrap";
import GameCard from "../GameCard/GameCard";
import { useContext, useEffect, useState, type JSX } from "react";
import styles from "./GameList.module.css";
import { useNavigate, type NavigateFunction } from "react-router-dom";
import type { game } from "../models";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { GamesContext } from "../../App";

interface GameListProps {
  parentFilter: string;
  childFilter: string;
}

function GameList({ parentFilter = "", childFilter = "" }: GameListProps) {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [gamesList, setGamesList] = useState<game[]>([]);

  const games = useContext(GamesContext);

  useEffect(() => {
    setTimeout(() => {
      setGamesList(games);

      setIsLoading(false);
    }, 2000);
  }, []);

  const nav: NavigateFunction = useNavigate();
  function printGames(): JSX.Element {
    let filteredList: game[];

    if (parentFilter === "") {
      filteredList = gamesList.filter((game) =>
        searchQuery === ""
          ? true
          : game.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    } else if (childFilter === "") {
      filteredList = gamesList.filter(
        (game) =>
          game.type === parentFilter &&
          (searchQuery === ""
            ? true
            : game.title.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    } else {
      filteredList = gamesList.filter(
        (game) =>
          game.type === parentFilter &&
          game.genre === childFilter &&
          (searchQuery === ""
            ? true
            : game.title.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }

    console.log(`Filtered list size: ${filteredList.length} at ${new Date()}`);

    return (
      <>
        {isLoading
          ? Array(games.length)
              .fill(null)
              .map((_, i) => (
                <div className={styles.fadeIn} key={i}>
                  <SkeletonTheme baseColor="#e0e0e0" highlightColor="#f5f5f5">
                    <div
                      className="p-2 mt-3 mx-2"
                      style={{
                        width: "12rem",
                        height: "400px",
                        backgroundColor: "#fff",
                        border: "1px solid #dee2e6",
                        borderRadius: "0.5rem",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      {/* Image placeholder */}
                      <div
                        style={{
                          width: "174px",
                          height: "174px",
                          padding: "13px",
                        }}
                      >
                        <Skeleton
                          height={150}
                          width="100%"
                          style={{ display: "block" }}
                        />
                      </div>

                      {/* Title placeholder */}
                      <div
                        style={{
                          width: "100%",
                          marginTop: "1rem",
                          marginBottom: "0.5rem",
                          padding: "0 0.5rem",
                        }}
                      >
                        <Skeleton
                          height={20}
                          width="100%"
                          style={{ display: "block" }}
                        />
                      </div>

                      {/* Description placeholder */}
                      <div style={{ width: "100%", padding: "0 0.5rem" }}>
                        <Skeleton
                          height={70}
                          style={{ marginBottom: "0", display: "block" }}
                        />
                      </div>

                      {/* Footer placeholder */}
                      <div style={{ width: "60%", marginTop: "auto" }}>
                        <Skeleton
                          height={30}
                          width="100%"
                          style={{ marginBottom: "0", display: "block" }}
                        />
                      </div>
                    </div>
                  </SkeletonTheme>
                </div>
              ))
          : filteredList.map((game) => (
              <div key={game.id} onClick={() => nav(`/game/${game.id}`)}>
                <GameCard {...game} />
              </div>
            ))}
      </>
    );

    // {filteredList.map((game) => (
    //       <div
    //         className={styles.fadeIn}
    //         key={game.id}
    //         onClick={() => nav(`/game/${game.id}`)}
    //       >
    //         <GameCard
    //           {...game}
    //           loading={isLoading}
    //         />
    //       </div>
    //     ))}
  }
  return (
    <div className="p-4 bg-dark rounded">
      <div className="m-auto d-flex">
        <input
          className="d-inline-flex me-2 w-25 form-control"
          placeholder="Search"
          onChange={(e) => setSearchQuery((sq) => (sq = e.target.value))}
        />
        <Button variant="primary">Search</Button>
      </div>

      <div className="m-auto d-flex flex-wrap justify-content-center justify-content-lg-start">
        {printGames()}
      </div>
    </div>
  );
}

export default GameList;
