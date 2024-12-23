import React from "react";
import styles from "./styles/progressBarIWD.module.css";

const ProgressBar = () => {
  const milestones = [
    { max: 40, color: "green" },
    { max: 45, color: "blue" },
    { max: 55, color: "pink" },
    { max: 65, color: "orange" },
    { max: 100, color: "#dddddd" },
  ];

  const getBackground = () => {
    let gradient = "";
    let prevMax = 0;

    milestones.forEach((milestone, index) => {
      const endPercentage = (milestone.max / 100) * 100;
      gradient += `${milestone.color} ${prevMax}%, ${milestone.color} ${endPercentage}%`;
      if (index < milestones.length - 1) gradient += ", ";
      prevMax = endPercentage;
    });

    return `linear-gradient(to right, ${gradient})`;
  };

  return (
    <div className={styles.progressWrapper}>
      <div
        className={styles.progressBar}
        style={{
          width: `100%`,
          background: getBackground(),
        }}
      ></div>
    </div>
  );
};

export default ProgressBar;
