import React from "react";
import Latest from "./Latest";
import Recomended from "./Recomended";
import WatchLater from "./Watch_Later";
function MoviesShows() {
  return (
    <div style={{backgroundColor:"#141b29"}}>
      <WatchLater/>
      <Latest />
      <Recomended/>
    </div>
  );
}

export default MoviesShows;
