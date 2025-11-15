import { type JSX } from "react";
import { Collapse, Form } from "react-bootstrap";
import { gameTypes } from "../enums";

type FilterProps = {
  onParentFilterChange: (value: string) => void;
  parentFilter: string;
  onChildFilterChange: (value: string) => void;
  childFilter: string;
};

function Filters({
  onParentFilterChange,
  onChildFilterChange,
  parentFilter = "",
  childFilter = "",
}: FilterProps) {
  const parentFilters: string[] = ["Single-player", "Multi-player"];
  const spGenre: string[] = [
    "Role-Playing Game (RPG)",
    "Rhythm Game",
    "Action-Adventure",
    "Platformer",
    "Puzzle",
    "Simulation",
    "Strategy",
    "Horror",
    "Visual Novel",
    "Metroidvania",
    "Sandbox",
  ];

  const mpGenre: string[] = [
    "First-Person Shooter (FPS)",
    "Battle Royale",
    "MOBA",
    "MMORPG",
    "Fighting",
    "Sports",
    "Racing",
    "Party Game",
    "Co-op Survival",
    "Real-Time Strategy (RTS)",
  ];

  function setChildFilter(parentFilter: string): JSX.Element {
    //

    if (parentFilter == gameTypes.SinglePlayer) {
      // {
      //   console.log(`SPGenre collapse made at ${new Date()}`);
      // }
      return (
        <>
          {spGenre.map((genre) => (
            <Form.Check
              key={genre}
              className="ms-3 text-white"
              type="radio"
              id={genre}
              label={genre}
              value={genre}
              checked={childFilter === genre}
              onChange={() => onChildFilterChange(genre)}
              name="group1"
            />
          ))}
        </>
      );
    }

    return (
      <>
        {/* {console.log(`MPGenre collapse made at ${new Date()}`)} */}

        {mpGenre.map((genre) => (
          <Form.Check
            key={genre}
            className="ms-3 text-white"
            type="radio"
            id={genre}
            label={genre}
            checked={childFilter === genre}
            onChange={() => onChildFilterChange(genre)}
            name="group1"
          />
        ))}
      </>
    );
  }

  return (
    <div className={`p-4 bg-dark rounded`} style={{ width: "235px" }}>
      <h1 className="p-4 text-bg-dark">Filters</h1>

      {parentFilters.map((pFilter) => (
        <Form.Check
          key={pFilter}
          className="text-white"
          type="radio"
          id={pFilter}
          label={pFilter}
          name="parentGenre"
          value={pFilter}
          checked={parentFilter === pFilter}
          onChange={() => {
            console.log(`Selected parent filter:${pFilter} at ${new Date()}`);
            onChildFilterChange("");
            onParentFilterChange(pFilter);
          }}
        />
      ))}

      {parentFilters.map((pFilter) => (
        <Collapse in={parentFilter === pFilter} key={`collapse-${pFilter}`}>
          <div>{setChildFilter(pFilter)}</div>
        </Collapse>
      ))}
    </div>
  );
}

export default Filters;
