import { pageType } from "../src/enums";
import Header from "../src/Header";

function AboutMe() {
  return (
    <>
      <Header page={pageType.About} />

      <h1 className="text-white">About me page</h1>
    </>
  );
}

export default AboutMe;
