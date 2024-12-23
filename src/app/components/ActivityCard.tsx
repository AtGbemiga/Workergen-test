"use client";

import React, { useState } from "react";
import { GiArtificialHive } from "react-icons/gi";
import styles from "./styles/activityCardOSH.module.css";
import { OtherKeyActivitiesCard } from "./OtherKeyActivitiesCard";
import { data } from "../data/otherActivityCardData";
import { Carousel } from "./Swipeable";
import ProgressBar from "./ProgressBar";

export const ActivityCard = () => {
  // State for toggle visibility for content for mobile
  const [showMore, setShowMore] = useState(false);

  /**
   * Toggles the visibility of the content section for mobile.
   * @function
   */
  function handleToggle() {
    setShowMore(!showMore);
  }

  // Mapping other key activities
  const otherKeyActivityContent = data.map((item, index) => (
    <OtherKeyActivitiesCard
      img={item.img}
      key={index}
      title={item.title}
      subtitle={item.subtitle}
      action={item.action}
      icon={item.icon}
      type="business"
      topic={item.topic}
      keyword={item.keyword}
    />
  ));

  return (
    <div className={styles.wrapperOSH}>
      <div className={styles.rowOne}>
        <div>
          <span>
            <GiArtificialHive />
          </span>
          <h3>
            Hi Mona, <span className={styles.percent}>68%</span> of goals
            achieved and rest can be rest can be achieved by focusing on 20 top
            leads
          </h3>
        </div>
        <button className={styles.toggleButton} onClick={handleToggle}>
          {showMore ? "Hide" : "Show"}
        </button>
        {!showMore && (
          <div>
            <div className={styles.targetAchieved}>
              <label htmlFor="">One month until Q4 ends</label>
              <div className={styles.divider}></div>
              <label htmlFor="">
                Target <strong className={styles.bold}>$45 million</strong> 68%
                of target achieved
              </label>
            </div>
            <ProgressBar />
          </div>
        )}
      </div>
      <section className={styles.rowTwo}>
        <div className={styles.firstDiv}>
          <p>
            Copilot has pinpointed 20 key leads that show strong purchase intent
            and are actively engaged. These leads need your focus.
          </p>
          <div className={styles.carousel}>
            <Carousel />
          </div>
        </div>
        <div>
          <p>Other key activities</p>
          <div>{otherKeyActivityContent}</div>

          <button>Show all key activities</button>
        </div>
      </section>
    </div>
  );
};
