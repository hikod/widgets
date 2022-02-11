import React, { useState } from "react";
import Accordion from "./Accordion";
import Search from "./Search";
import Dropdown from "./Dropdown";
import Translate from "./Translate";
import Route from "./Route";

const App = () => {
  const options = [
    { label: "The Color Red", value: "red" },
    { label: "The Color Blue", value: "blue" },
    { label: "The Color Green", value: "green" },
  ];
  const [selected, setSelected] = useState(options[0]);
  const [showDropdown, setShowDropdown] = useState(true);
  const items = [
    {
      title: "What is React?",
      content: "React is a front end javascript framework",
    },
    {
      title: "Why use React?",
      content: "React is a favorite JS library among engineers",
    },
    {
      title: "How do you use React?",
      content: "You use React by creating components",
    },
  ];

  const showAccordion = () => {
    if (window.location.pathname === "/") {
      return <Accordion items={items} />;
    }
  };
  const showList = () => {
    if (window.location.pathname === "/list") {
      return <Search />;
    }
  };
  const showDropDown = () => {
    if (window.location.pathname === "/dropdown") {
      return (
        <Dropdown
          selected={selected}
          onSelectedChange={setSelected}
          options={options}
        />
      );
    }
  };
  const showTranslate = () => {
    if (window.location.pathname === "/translate") {
      return <Translate />;
    }
  };

  return (
    <div className="ui container">
      {/* <Accordion items={items} /> */}
      {/* <Search /> */}
      {/* <button onClick={() => setShowDropdown(!showDropdown)}>
        Toogle dropdown
      </button>
      {showDropdown ? (
        <Dropdown
          selected={selected}
          onSelectedChange={setSelected}
          options={options}
        />
      ) : null} */}
      {/* <Translate /> */}
      {showAccordion()}
      {showDropDown()}
      {showTranslate()}
      {showList()}
    </div>
  );
};
export default App;
