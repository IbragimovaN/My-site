import { useState } from "react";
import styles from "./Tabs.module.css";
import type { TabType } from "../../layout";

interface TabsProp {
  types: TabType[];
}

export const Tabs = ({ types }: TabsProp) => {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <div>
      {" "}
      <ul className={styles.tabs}>
        {types.map(({ label }, index) => (
          <li
            key={index}
            className={`${styles.tab} ${
              activeTab === index ? styles.active : ""
            }`}
            onClick={() => setActiveTab(index)}
          >
            <div> {label}</div>
          </li>
        ))}
      </ul>
      <div className={styles.content}>{types[activeTab].content}</div>
    </div>
  );
};
