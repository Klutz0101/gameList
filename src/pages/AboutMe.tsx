import { pageType } from "../src/enums";
import Header from "../src/Header";

function AboutMe() {
  return (
    <>
      <Header page={pageType.About} />

      <div className="container py-5">
        <div className="bg-dark text-light p-5 rounded shadow-lg">
          <div className="text-center mb-4">
            <img
              src="/gameList/logo.png" // replace with your image path
              alt="Klutz's avatar"
              className="rounded-circle border border-info"
              style={{ width: "120px", height: "120px", objectFit: "cover" }}
            />
            <h1 className="mt-3 fw-bold text-info">Hi, I'm Klutz 👾</h1>
            <p className="lead text-secondary">
              Debugger, designer, dialect explorer.
            </p>
          </div>

          <div className="row">
            <div className="col-md-6 mb-4">
              <h4 className="text-warning">💻 Developer Vibes</h4>
              <p>
                I architect scalable React apps with clean context patterns,
                type-safe enums, and animated transitions. I love catching
                subtle bugs, validating fixes with timestamps, and polishing UI
                until it sparkles.
              </p>
            </div>

            <div className="col-md-6 mb-4">
              <h4 className="text-warning">🎮 Game Explorer</h4>
              <p>
                This site showcases my favorite games — from nostalgic classics
                to modern masterpieces. I built it to experiment with filtering
                logic, responsive layouts, and smooth UX powered.
              </p>
            </div>

            <div className="col-md-6 mb-4">
              <h4 className="text-warning">🧠 Language Nerd</h4>
              <p>I’m a Japanese nut that tries to speak it everday.</p>
            </div>

            <div className="col-md-6 mb-4">
              <h4 className="text-warning">🔌 Hardware Curious</h4>
              <p>
                I love building PCs; especialy gaming PC. I built one for my
                own.
              </p>
            </div>
          </div>

          <div className="text-center mt-5">
            <p className="text-muted fst-italic">
              Thanks for visiting — I hope this site sparks your curiosity too.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutMe;
