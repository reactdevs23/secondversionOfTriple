import React, { useState } from "react";
import Modal from "../../components/common/Modal/Modal";
import Text from "../../components/common/Text/Text";
import Button from "../../components/common/Button/Button";
import classes from "./JoinModal.module.css";
import { placeHolder, qrCode } from "../../images";

const JoinModal = ({ isActive, onClose }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  return (
    <Modal
      isActive={isActive}
      onClose={onClose}
      styled
      className={classes.mainWrapper}
    >
      <div className={classes.wrapper}>
        <Text base950 xl3 semiBold className={classes.heading}>
          Join Waiting List
        </Text>

        <div className={classes.container}>
          <div className={classes.formContainer}>
            <Text base800 lg className={classes.info}>
              Currently our app is under development. Join our waiting list,
              we’ll notify you when it is available.
            </Text>
            <form action="" className={classes.form}>
              <input
                type="text"
                className={classes.input}
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />{" "}
              <input
                type="email"
                placeholder="Email"
                className={classes.input}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Button
                btnPrimary
                size="md"
                className={classes.button}
                onClick={() => {}}
              >
                Join Now
              </Button>
            </form>{" "}
            <div className={classes.qrCodeContainer}>
              <Text md base900 className={classes.qrCodeInfo}>
                Pre-register to get the app when it is available
              </Text>
              <img src={qrCode} alt="#" className={classes.qrCode} />
            </div>
          </div>
          <img src={placeHolder} alt="#" className={classes.img} />
        </div>
      </div>
    </Modal>
  );
};

export default JoinModal;
