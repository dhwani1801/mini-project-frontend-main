import { Form, Input } from "antd";
import styles from "./index.module.scss";
import { useEffect, useState } from "react";

const InputWithLabelAndSvg = (props: any) => {

  const { singleUserInput, disabled , setPhoneNumber} = props;

  const [num, setNum] = useState("");

  const phoneChangeHandler = (e: any) => {
    const value = e.target.value;
    setNum((value));

  };
  useEffect(() => {
    // setPhoneNumber(num);
  }, [num]);



  return (
    <div className={styles["input-icon"]}>
      {singleUserInput.id !== "phone" ? (
        <>
          <div className={styles["input-icon__title"]}>
            {singleUserInput.svg && (
              <div className={styles["input-icon__title--svg"]}>
                {singleUserInput.svg}
              </div>
            )}
            <label className={styles["input-icon__title--label"]}>
              {singleUserInput.title}{" "}
              {singleUserInput?.required && (
                <span className="required-color">*</span>
              )}
            </label>
          </div>
          <div className={styles["input-icon__form"]}>
            <Form.Item
              name={singleUserInput.name}
              rules={singleUserInput.rules}
            >
              {singleUserInput.type === "text" && (
                <Input
                  placeholder={singleUserInput.placeHolder}
                  size="large"
                  className={styles["input-icon__form--input"]}
                  type={singleUserInput.type}
                  disabled={disabled ? disabled : false}
                />
              )}

              {singleUserInput.type === "password" && (
                <div>
                  <Input.Password
                    placeholder={singleUserInput.placeHolder}
                    size="large"
                    className={styles["input-icon__form--input"]}
                  />
                </div>
              )}
            </Form.Item>
          </div>
        </>
      ) : (
        ``
      )}
      {singleUserInput.id === "phone" && (
        <>
          <div className={styles["input-icon__title"]}>
            {singleUserInput.svg && (
              <div className={styles["input-icon__title--svg"]}>
                {singleUserInput.svg}
              </div>
            )}
            {
              <label className={styles["input-icon__title--label"]}>
                {singleUserInput.title}{" "}
                {singleUserInput?.required && (
                  <span className="required-color">*</span>
                )}
              </label>
            }
          </div>
          <Form.Item rules={singleUserInput.rules}>
            <Input
              placeholder={singleUserInput.placeHolder}
              size="large"
              className={styles["input-icon__form--input"]}
              onChange={phoneChangeHandler}
              value={num}
              maxLength={14}
            />
            {/* <span className={styles["phoneError"]}>{phoneError}</span> */}
          </Form.Item>
        </>
      )}
    </div>
  );
};

export default InputWithLabelAndSvg;
