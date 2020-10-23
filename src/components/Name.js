import React, { useState } from "react";

const Name = ({ name, setName }) => {
  const [inputText, setInputText] = useState("");

  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };
  const submitNameHandler = (e) => {
    e.preventDefault();
    setName(inputText);
    setInputText("");
  };

  return (
    <form className="js-form" onSubmit={submitNameHandler}>
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
