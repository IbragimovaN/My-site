import { CONTACTS_DATA, SECTIONS_DATA } from "../../../../constants";
import { SectionTitle } from "../../../ui";

import type { SectionProp } from "../types";
import styles from "./ContanctsSection.module.css";
import { FeedbackForm } from "./feedbackForm/FeedbackForm";

export const ContactsSection = ({ id }: SectionProp) => {
  return (
    <section id={id} className={`sectionsWrapper ${styles.wrapper}`}>
      <SectionTitle title={SECTIONS_DATA.contacts.sectionTitle} />
      <div className={styles.content}>
        <div className={styles.info}>
          <h3 className={styles.contactsTitle}>Контакты</h3>
          <ul className={styles.contactsList}>
            {CONTACTS_DATA.map((item) => (
              <li key={item.id} className={styles.contactItem}>
                <div className={styles.contactContent}>
                  <div className={styles.svgIcon}>{item.icon}</div>
                  <div>
                    <h3 className={styles.contactTitle}>{item.title}</h3>
                    <a href={item.link} className={styles.contactLink}>
                      {item.value}
                    </a>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <FeedbackForm />
      </div>
    </section>
  );
};
