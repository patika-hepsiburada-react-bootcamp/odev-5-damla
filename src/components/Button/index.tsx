import { ReactElement } from "react";
import styles from "./styles.module.scss";
import classnames from "classnames";

interface Props {
  text: string;
  type?: string;
  onClick: any;
}

export default function Button({ text, onClick, type }: Props): ReactElement {
  return (
    <button
      onClick={onClick}
      className={classnames(
        styles.container,
        type === "remove" && styles.remove,
        type === "removeAll" && styles.removeAll,
        type === "update" && styles.update
      )}
    >
      {text}
    </button>
  );
}
