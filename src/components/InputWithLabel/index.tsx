import { Form, Input } from "antd";
import styles from "./index.module.scss";

const InputWithLabelAndSvg = (props: any) => {

  const { singleUserInput, disabled } = props;

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
    </div>
  );
};

export default InputWithLabelAndSvg;
