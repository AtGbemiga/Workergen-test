"use client";
import Button from "@mui/material/Button";
import React, { useState } from "react";
import { RiGeminiFill } from "react-icons/ri";
import "reactjs-popup/dist/index.css";
import { setUserTransport } from "../redux/features/userTransport/userSlice";
import { useAppDispatch } from "../redux/hooks";
import { ModalContent } from "./Modals";
import styles from "./styles/otherActivitiesCardWIO.module.css";

interface Props {
  img: React.ReactNode;
  title: string;
  subtitle: string;
  action: string;
  icon: React.ReactNode;
  extra?: string;
  type: "person" | "business";
  name?: string;
  position?: string;
  topic?: string;
  keyword: string;
}

/**
 * OtherKeyActivitiesCard is a React component that displays a card
 * with key activity information. The card features an image, title,
 * subtitle, action, and icon, and allows users to interact with it
 * to trigger further actions. When the card is clicked, it dispatches
 * information to the Redux store and opens a modal for more details.
 *
 * Props:
 * - img (React.ReactNode): The image to display on the card.
 * - title (string): The title of the activity.
 * - subtitle (string): The subtitle providing additional context.
 * - action (string): The action description related to the activity.
 * - icon (React.ReactNode): An icon representing the activity.
 * - extra (string, optional): Additional information to display.
 * - type ("person" | "business"): The classification of the activity.
 * - name (string, optional): The name of the person associated with the activity.
 * - position (string, optional): The position of the person in a business context.
 * - topic (string, optional): The topic associated with the activity.
 * - keyword (string): A keyword representing the activity's essence.
 *
 * The component uses the `useAppDispatch` hook from Redux to dispatch
 * data to the store and handles the modal's open/close state.
 */

export const OtherKeyActivitiesCard = ({
  img,
  title,
  subtitle,
  action,
  icon,
  type,
  name,
  position,
  topic,
  keyword,
}: Props) => {
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);

  const dispatch = useAppDispatch();

  const handleClick = () => {
    console.log("clicked");
    // Dispatch to the Redux store
    dispatch(
      setUserTransport({
        name: name || title,
        position: position || "business person",
        title,
        subtitle,
        type,
        topic,
        keyword,
      })
    );

    console.log("dispatched");
  };
  const handleOpen = () => {
    handleClick();
    setOpen(true);
  };

  return (
    <>
      <Button
        onClick={handleOpen}
        style={{ color: "black", padding: 0, margin: 0, height: "fit-content" }}
      >
        {" "}
        <div className={`${styles.wrapperWIO} wrapperWIO`}>
          <div className={styles.row}>
            {type === "business" ? (
              <>
                <span className={styles.img}>{img}</span>
                <section>
                  <h3>{title}</h3>
                  <p>{subtitle}</p>
                </section>
              </>
            ) : (
              <>
                <span className={styles.img}>{img}</span>
                <section>
                  <h3>{name}</h3>
                  <p>{position || "business person "}</p>
                </section>
              </>
            )}
          </div>
          <div className={`${styles.row} ${styles.lastRow}`}>
            <span>{icon}</span>
            <p className={styles.action}>{action}</p>
            <span className={styles.aiIcon}>
              <RiGeminiFill />
            </span>
          </div>
          <div>{subtitle && <p>{subtitle}</p>}</div>
        </div>
      </Button>

      <ModalContent
        open={open}
        handleClose={handleClose}
        name={name ?? ""}
        // Add the two other required props here
      />
    </>
  );
};
