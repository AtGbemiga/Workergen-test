import React from "react";
import { CiBoxList, CiClock1 } from "react-icons/ci";
import { FaChevronDown, FaRegChartBar } from "react-icons/fa";
import { IoIosAdd, IoIosRefresh } from "react-icons/io";
import styles from "./styles/upperContent.XBD.module.css";
import { FcCollaboration } from "react-icons/fc";
import { MdDeleteOutline } from "react-icons/md";
import { HiDotsVertical } from "react-icons/hi";
import { IoChevronDown, IoFilterOutline } from "react-icons/io5";
import { LuClock12 } from "react-icons/lu";

export const UpperContent = () => (
  <section className={styles.wrapperXBD}>
    <div>
      My open leads <FaChevronDown />
    </div>
    <div className={styles.rightBox}>
      <div>
        Show chart <FaRegChartBar />
      </div>
      <div>
        Focused view <CiBoxList />
      </div>
      <div>
        New <IoIosAdd />
      </div>
      <div>
        Refresh <IoIosRefresh />
      </div>
      <div>
        <FcCollaboration />
        Collaborate
      </div>
      <div>
        <MdDeleteOutline />
        Delete
      </div>

      <div>
        <HiDotsVertical />
      </div>
      <div>
        <CiClock1 />
        Smart data
      </div>
      <div>
        <IoFilterOutline />
        Edit filters
      </div>
      <div>
        <IoFilterOutline />
        Edit columns
      </div>
      <div>
        <LuClock12 />
      </div>
      <div>
        <IoChevronDown />
      </div>
    </div>
  </section>
);
