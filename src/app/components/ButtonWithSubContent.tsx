"use client";

import React, { Fragment, useState } from "react";
import {
  buttonsWithHeaders,
  buttonWithSubContentData,
} from "../data/asideData";
import styles from "./styles/buttonWithSubContentMTN.module.css";
import Link from "next/link";

/**
 * ButtonWithSubContent displays a list of buttons with icons,
 * each button can toggle the visibility of its associated sub-content.
 * It also renders headers with associated content links.
 *
 * The component maintains the state of which button's sub-content
 * is currently visible. It uses data from 'buttonWithSubContentData'
 * and 'buttonsWithHeaders' to dynamically generate the content.
 *
 * @component
 * @returns {JSX.Element} A rendered component with expandable buttons and headers.
 */

export const ButtonWithSubContent = () => {
  const [contentIndex, setContentIndex] = useState<number | null>();

  /**
   * Toggles the visibility of the content section for mobile.
   * @param {number} index - The index of the button to toggle.
   * @returns {void}
   */
  function handleToggle(index: number) {
    setContentIndex((prevIndex) => (prevIndex === index ? null : index));
  }

  const content = buttonWithSubContentData.map((item, index) => (
    <Fragment key={index}>
      <button onClick={() => handleToggle(item.id)}>
        <span className="icon">{item.icon}</span>
        <span>{item.title}</span>
        {contentIndex === index ? (
          <span className="icon">{item.backIconUp}</span>
        ) : (
          <span className="icon">{item.backIconDown}</span>
        )}
      </button>

      {contentIndex === index &&
        item.subContent.map((subItem, subIndex) => (
          <Fragment key={subIndex}>
            <Link style={{ color: "black" }} href={subItem.link}>
              {subItem.subTitle}
            </Link>
          </Fragment>
        ))}
    </Fragment>
  ));

  const content1 = buttonsWithHeaders.map((item, index) => (
    <Fragment key={index}>
      <h4>{item.header}</h4>
      {item.content.map((subContent, subIndex) => (
        <Fragment key={subIndex}>
          <a className={styles.anchor} href={subContent.link}>
            <span className="icon">{subContent.icon}</span>
            <span>{subContent.buttonText}</span>
          </a>
        </Fragment>
      ))}
    </Fragment>
  ));
  return (
    <div className={styles.wrapperMTN}>
      {content}
      {content1}
    </div>
  );
};
