import "./App.css";
import myImage from "./hi.png";
import { useState } from "react";

export default function App() {
  const [familyTextVisibility, setFamilyTextVisibility] = useState("false");
  const [InfoTextVisibility, setInfoTextVisibility] = useState("false");
  const [ContactTextVisibility, setContactTextVisibility] = useState("false");

  const handleFamilyClick = () => {
    if (familyTextVisibility === "false") {
      setFamilyTextVisibility("true");
    } else {
      setFamilyTextVisibility("false");
    }
  };

  const handleInfoClick = () => {
    if (InfoTextVisibility === "false") {
      setInfoTextVisibility("true");
    } else {
      setInfoTextVisibility("false");
    }
  };
  const handleContactClick = () => {
    if (ContactTextVisibility === "false") {
      setContactTextVisibility("true");
    } else {
      setContactTextVisibility("false");
    }
  };

  const conditionalFamilyClassList = () => {
    if (familyTextVisibility === "false") {
      return "family-text invisible";
    } else {
      return "family-text";
    }
  };

  const conditionalInfoClassList = () => {
    if (InfoTextVisibility === "false") {
      return "Info-text invisible";
    } else {
      return "Info-text";
    }
  };

  const conditionalContactClassList = () => {
    if (ContactTextVisibility === "false") {
      return "Contact-text invisible";
    } else {
      return "Contact-text";
    }
  };

  return (
    <main>
      <h1>Eldad Yonas</h1>
      <img className="my-image" alt="Eldad Yonas" src={myImage} />
      <div className="buttons-wrapper">
        <section className="button-container">
          <button
            onClick={handleInfoClick}
            className="button button1"
          >
            Info
          </button>
          <p className={conditionalInfoClassList()}>
            My name is Eldad Yonas. I am 13 Years old (2023). I go to Fox Ridge
            Middle School and I am in the 7th grade. I live in Denver, CO. My
            favorite hobby is playing my guitar.
          </p>
        </section>

        <section className="button-container">
          <button
            onClick={handleFamilyClick}
            className="button button2"
          >
            Family
          </button>
          <p className={conditionalFamilyClassList()}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </section>

        <section className="button-container">
          <button
            onClick={handleContactClick}
            className="button button3"
          >
            Contact
          </button>
          <p className={conditionalContactClassList()}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industr
          </p>
        </section>
      </div>
    </main>
  );
}
