import styles from "./ButtonsContainer.module.css";
const ButtonsContainer = (props) => {
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
    <div className={styles.buttonContainer}>
      {buttons.map((buttonName) => {
        return (
          <button
            key={buttonName}
            className={styles.button}
            onClick={(event) => props.onButtonClick(buttonName, event)}
          >
            {buttonName}
          </button>
        );
      })}
    </div>
  );
};
export default ButtonsContainer;
