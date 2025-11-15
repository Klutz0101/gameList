import { useState } from "react";
import Filters from "./filters/Filters";
import GameList from "./gamelist/GameList";

function Body() {
  const [parentFilter, setParentFilter] = useState<string>("");
  const [childFilter, setChildFilter] = useState<string>("");
  return (
    <div className="d-flex flex-column flex-md-row align-items-center align-items-md-start">
      <div className="mt-4 ms-2 me-2">
        <Filters
          onParentFilterChange={setParentFilter}
          onChildFilterChange={setChildFilter}
          parentFilter={parentFilter}
          childFilter={childFilter}
        />
      </div>
      <div className="mt-4 ms-2 me-2 flex-xl-grow-1">
        <GameList parentFilter={parentFilter} childFilter={childFilter} />
      </div>
    </div>
  );
}

export default Body;
