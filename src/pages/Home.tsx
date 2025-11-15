import { useEffect, type JSX } from "react";
import Header from "../src/Header";
import Body from "../src/Body";
import { pageType } from "../src/enums";

function Home(): JSX.Element {
  useEffect(() => {
    document.title = "GameList: Home";
  }, []);

  return (
    <div>
      <Header page={pageType.Home} />

      <Body />
    </div>
  );
}

export default Home;
