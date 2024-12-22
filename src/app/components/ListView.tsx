"use client";
import React, { useState } from "react";
import { RiGeminiFill } from "react-icons/ri";
import { data } from "../data/tableData";
import styles from "./styles/listViewYDB.module.css";
import { setUserTransport } from "../redux/features/userTransport/userSlice";
import { useAppDispatch } from "../redux/hooks";
import { ModalContent } from "./Modals";

interface DataProps {
  scopeRow: string;
  data1: string;
  data2: string;
  data3: string;
  img: React.ReactNode;
  title: string;
  subtitle: string;
  action: string;
  icon: React.ReactNode;
  extra?: string;
  type?: "person" | "business";
  name?: string;
  position?: string;
  topic?: string;
  keyword: string;
}

export const ListView = () => {
  const [filterValue, setFilterValue] = useState("");
  const [filteredContent, setFilteredContent] = useState<DataProps[]>(data);
  const dispatch = useAppDispatch();
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);

  /**
   * Renders table rows for the given data items.
   *
   * @param {DataProps[]} items - Array of data objects to be rendered as table rows.
   * @returns {JSX.Element[]} Array of JSX elements representing the table rows.
   */

  const handleClick = (item: DataProps) => {
    console.log("clicked");
    // Dispatch to the Redux store
    dispatch(
      setUserTransport({
        name: item.name || item.title,
        position: item.position || "business person",
        title: item.title,
        subtitle: item.subtitle,
        type: item.type,
        topic: item.topic,
        keyword: item.keyword,
      })
    );

    console.log("dispatched");
  };
  const handleOpen = (item: DataProps) => {
    handleClick(item);
    setOpen(true);
  };

  const renderTableRows = (items: DataProps[]) => {
    return items.map((item, index) => (
      <tr key={index}>
        <th onClick={() => handleOpen(item)} scope="row">
          {item.scopeRow}
        </th>
        <td>{item.data1}</td>
        <td>{item.data2}</td>
        <td>{item.data3}</td>
      </tr>
    ));
  };

  /**
   * Handles changes to the search input by filtering the data based on the input value.
   *
   * @param {React.ChangeEvent<HTMLInputElement>} e - The event object containing the input value.
   */
  const handleFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchValue = e.target.value;
    setFilterValue(searchValue);

    const filtered = data.filter((item) => {
      const searchFields = [
        item.scopeRow,
        item.data1,
        item.data2,
        item.data3,
      ].map((field) => field.toLowerCase());

      return searchFields.some((field) =>
        field.includes(searchValue.toLowerCase())
      );
    });

    setFilteredContent(filtered);
  };

  return (
    <section className={styles.wrapperYDB}>
      <div className={styles.inputWrapper}>
        <input
          type="search"
          placeholder="Sort, filter and search with Copilot"
          value={filterValue}
          onChange={handleFilter}
        />
        <RiGeminiFill color="blue" />
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Topic</th>
            <th scope="col">Status reason</th>
            <th scope="col">Created on</th>
          </tr>
        </thead>
        <tbody>{renderTableRows(filteredContent)}</tbody>
      </table>
      <ModalContent
        open={open}
        handleClose={handleClose}
        name={""}
        // Add the two other required props here
      />
    </section>
  );
};
