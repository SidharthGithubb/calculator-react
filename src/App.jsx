import styles from "./App.module.css";
import ButtonsContainer from "./components/ButtonsContainer";
import Display from "./components/Display";
function App() {
  const buttons = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "9",
    "0",
    ".",
    "=",
  ];
  return (
    <div className={styles.calculator}>
      <Display />
      <ButtonsContainer buttons={buttons} />
    </div>
  );
}

export default App;
