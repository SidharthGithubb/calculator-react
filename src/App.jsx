import styles from "./App.module.css";
import ButtonsContainer from "./components/ButtonsContainer";
import Display from "./components/Display";
import { useState } from "react";
function App() {
  const [displayValue, setDisplayValue] = useState("");

  const handleButtonClick = (button, event) => {
    if (button === "C") {
      setDisplayValue("");
    } else if (button === "=") {
      const result = eval(displayValue);
      setDisplayValue(result);
    } else {
      setDisplayValue((prevValue) => prevValue + button);
    }
  };
  return (
    <div className={styles.calculator}>
      <Display value={displayValue} />
      <ButtonsContainer onButtonClick={handleButtonClick} />
    </div>
  );
}

export default App;
