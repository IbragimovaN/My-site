import { useState } from "react";
import styles from "./Tabs.module.css";
import type { TabSkills } from "../../../constants";

interface TabsProp {
  types: TabSkills[];
}

export const Tabs = ({ types }: TabsProp) => {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <>
      <ul className={styles.tabs}>
        {types.map(({ label }, index) => (
          <li
            key={index}
            className={`${styles.tab} ${
              activeTab === index ? styles.active : ""
            }`}
            onClick={() => setActiveTab(index)}
          >
            {label}
          </li>
        ))}
      </ul>
      <div className={styles.content}>{types[activeTab].content}</div>
    </>
  );
};
