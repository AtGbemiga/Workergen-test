"use client";

import React, { useState } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { ButtonWithSubContent } from "./ButtonWithSubContent";
import styles from "./styles/asideCFT.module.css";
import { IoMdMenu } from "react-icons/io";

// TODO: Change to hidden by default on mobile. Use Hamburger menu
export const Aside = () => {
  const [showAside, setShowAside] = useState(false);

  function handleMobileToggle() {
    setShowAside(!showAside);
  }

  return (
    <div className={styles.wrapperCFT}>
      <button onClick={handleMobileToggle}>
        <IoMdMenu />
      </button>
      {showAside && (
        <section>
          <button>
            <span className="icon">
              <AiOutlineHome />
            </span>
            <span>Home</span>
          </button>
          <>
            <ButtonWithSubContent />
          </>
        </section>
      )}
    </div>
  );
};
