import React from "react";
import { ActivityCard } from "./ActivityCard";
import { ListView } from "./ListView";
import styles from "./styles/dashBoardJDE.module.css";
import { UpperContent } from "./UpperContent";

export const Dashboard = () => {
  return (
    <article className={styles.wrapperJDE}>
      <section>
        <UpperContent />
      </section>
      <section className={styles.activityCard}>
        <ActivityCard />
      </section>
      <>
        <ListView />
      </>
    </article>
  );
};
