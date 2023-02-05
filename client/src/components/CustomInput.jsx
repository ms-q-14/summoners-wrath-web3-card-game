import React from "react";
import styles from "../styles";
const regex = /^[a-zA-Z0-9]+$/;

const CustomInput = ({ label, placeHolder, value, handleValueChange }) => {
  return (
    <>
      <label htmlFor="name" className={styles.label}>
        {label}
      </label>
      <input
        className={styles.input}
        type="text"
        placeholder={placeHolder}
        value={value}
        onChange={(e) => {
          if (e.target.value === "" || regex.test(e.target.value)) {
            handleValueChange(e.target.value);
          }
        }}
      />
    </>
  );
};

export default CustomInput;
