"use client";

import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { MdEmail } from "react-icons/md";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useAppSelector } from "../redux/hooks";

// Import Swiper styles
import { Typography } from "@mui/material";
import { useState } from "react";
import { BsPersonFillCheck } from "react-icons/bs";
import { CiEdit, CiPaperplane } from "react-icons/ci";
import {
  FaBitcoin,
  FaLinkedin,
  FaMedal,
  FaRegThumbsDown,
  FaRegThumbsUp,
} from "react-icons/fa";
import { FaGlobe } from "react-icons/fa6";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { IoPersonOutline } from "react-icons/io5";
import { RiCalendarScheduleLine, RiGeminiFill } from "react-icons/ri";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { RootState } from "../redux/store";
import styles from "./styles/modalsUFI.module.css";

interface Props {
  open: boolean;
  handleClose: () => void;
  name: string;
}

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  //   bgcolor: "background.paper",
  //   border: "2px solid #000",
  //   boxShadow: 24,
  p: 4,
};
export const ModalContent = ({ open, handleClose }: Props) => {
  const [showEngage, setShowEngage] = useState(false);

  const userData = useAppSelector((state: RootState) => state.user);
  const { name, title, topic, type, position, keyword } = userData;

  return (
    <Modal
      className={styles.wrapperUFI}
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style} className={`${styles.box} ${styles.bgColor}`}>
        <Swiper
          className="swiperDOG"
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          <SwiperSlide>
            <Typography
              id="modal-modal-title"
              variant="h6"
              component="h2"
              style={{
                display: "flex",
                alignItems: "center",
                columnGap: "0.5rem",
              }}
            >
              <MdEmail /> Engage with {name || title}
            </Typography>

            <section style={{ marginTop: "1rem" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  columnGap: "0.5rem",
                }}
              >
                <span>
                  {type !== "business" ? (
                    <BsPersonFillCheck fontSize={"2rem"} />
                  ) : (
                    <IoPersonOutline fontSize={"2rem"} />
                  )}
                </span>
                <div>
                  <p>{name || title}</p>
                  <p
                    style={{
                      display: "flex",
                      alignItems: "center",
                      columnGap: "0.5rem",
                    }}
                  >
                    <FaLinkedin color="blue" /> | {position}
                  </p>
                </div>
              </div>
              <div className={styles.firstRow}>
                <Typography
                  id="modal-modal-description"
                  bgcolor={"#ebf3ff"}
                  color="steelblue"
                  sx={{ mt: 2 }}
                >
                  <RiGeminiFill color="blue" fontSize={"1rem"} />
                  {name?.split(" ")[0] +
                    " may be interested in " +
                    (topic || "business")}{" "}
                </Typography>

                <div className={styles.firstRowBtnBox}>
                  <button className={styles.editBtnBox}>
                    <CiEdit fontSize={"1rem"} /> Edit
                  </button>
                  <button className={styles.sendBtnBox}>
                    <CiPaperplane fontSize={"1rem"} /> Approve and send
                  </button>
                </div>
              </div>
            </section>

            <section>
              <div className={styles.toggleBox}>
                <button
                  className={showEngage ? styles.active : ""}
                  onClick={() => setShowEngage(true)}
                >
                  Engage
                </button>
                <button
                  className={!showEngage ? styles.active : ""}
                  onClick={() => setShowEngage(false)}
                >
                  Activity
                </button>
              </div>

              <div>
                {showEngage ? (
                  <section>A</section>
                ) : (
                  <>
                    <section className={styles.main}>
                      <h4 style={{ color: "steelblue" }}>
                        Why I picked this lead
                      </h4>

                      <div className={styles.subMain}>
                        <section>
                          <div>
                            <ul>
                              <li>
                                {(name || title)?.split(" ")[0]}{" "}
                                <strong>is a key decision maker</strong>
                                {""} and was browsing{" "}
                                <strong>
                                  &apos;{keyword?.toLowerCase()}&apos;
                                </strong>{" "}
                                on{" "}
                                {keyword &&
                                  keyword.slice(0, 1).toUpperCase() +
                                    keyword.slice(1)}{" "}
                                website
                              </li>
                              <li>
                                Multiple people at their company have reported
                                slowness during <strong>service request</strong>
                              </li>
                              <li>
                                {name} currently see{" "}
                                <strong>
                                  $200M in revenue from their in store shop
                                </strong>
                              </li>
                            </ul>
                          </div>
                          <div className={styles.iconBoxWrapper}>
                            <div className={styles.iconBox}>
                              <IoMdCheckmarkCircleOutline
                                color="blue"
                                fontSize={"1.5rem"}
                              />
                              <div>
                                <p>Decision maker</p>
                                <h4>Yes</h4>
                              </div>
                            </div>
                            <div className={styles.iconBox}>
                              <FaMedal color="yellow" fontSize={"1.5rem"} />
                              <div>
                                <p>Potential deal value</p>
                                <h4>$1M</h4>
                              </div>
                            </div>
                            <div className={styles.iconBox}>
                              <RiCalendarScheduleLine
                                color="purple"
                                fontSize={"1.5rem"}
                              />
                              <div>
                                <p>Interest</p>
                                <h4>High</h4>
                              </div>
                            </div>
                          </div>
                        </section>
                        <div className={styles.extraBtnsBox}>
                          <div>
                            <button>
                              <FaBitcoin color="yellow" />
                            </button>
                            <button>1</button>
                            <button>
                              <FaGlobe color="blue" />
                              D365 sales
                            </button>
                            <button>+2</button>
                          </div>
                          <div>
                            <button>
                              AI generated content may be incorrect
                            </button>
                            <FaRegThumbsUp />
                            <FaRegThumbsDown />
                          </div>
                        </div>
                      </div>
                    </section>

                    <article>
                      <h5>
                        About {title?.split(" ")[0] || name?.split(" ")[0]}
                      </h5>

                      <p>
                        {name || title} the {position} at {keyword} is a dynamic
                        leader with a proven track record in optimizing
                        operation and enhancing customer experience. Under their
                        guidance, {keyword} in-store shops have flourished
                        becoming a hallmark of quality and innovation.{" "}
                        {name?.split(" ")[0]}&apos;s commitment to excellence
                        makes them an ideal an ideal partner for {keyword}.
                        Always seeking top-tier equipments.
                      </p>
                    </article>
                  </>
                )}
              </div>
            </section>
          </SwiperSlide>
          <SwiperSlide>2</SwiperSlide>
        </Swiper>
      </Box>
    </Modal>
  );
};
