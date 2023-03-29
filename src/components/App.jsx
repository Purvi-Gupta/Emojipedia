import React from "react";
import Rename from "./Rename";
import emojipedia from "../emojipedia";

function App() {
  function createCard(emojiTerm) {
    return (
      <Rename
        key={emojiTerm.id}
        emoji={emojiTerm.emoji}
        name={emojiTerm.name}
        meaning={emojiTerm.meaning}
      />
    );
  }

  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">{emojipedia.map(createCard)}</dl>
    </div>
  );
}

export default App;
