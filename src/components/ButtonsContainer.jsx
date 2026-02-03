import styles from "./ButtonsContainer.module.css";
const ButtonsContainer = (props) => {
  const { buttons } = props;
  return (
    <div className={styles.buttonContainer}>
      {buttons.map((buttonName) => {
        return (
          <button key={buttonName} className={styles.button}>
            {buttonName}
          </button>
        );
      })}
    </div>
  );
};
export default ButtonsContainer;
