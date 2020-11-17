import React, { useState } from "react";
import "../style/Name.css";

const Name = ({ name, setName }) => {
  const [inputText, setInputText] = useState("");

  // handle input text
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };
  // handle name submit
  const submitNameHandler = (e) => {
    e.preventDefault();
    setName(inputText);
    setInputText("");
  };

  return (
    <form className="nameForm" onSubmit={submitNameHandler}>
      <input
        value={inputText}
        onChange={inputTextHandler}
        type="text"
        spellCheck="false"
        placeholder="What is your name?"
      />
    </form>
  );
};

export default Name;
