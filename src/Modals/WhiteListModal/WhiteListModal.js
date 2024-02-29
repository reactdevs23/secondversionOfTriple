import React from "react";
import Modal from "../../components/common/Modal/Modal";
import Text from "../../components/common/Text/Text";
import Button from "../../components/common/Button/Button";
import classes from "./WhiteListModal.module.css";
import CopyToClipboard from "react-copy-to-clipboard";
import clsx from "clsx";

const WhiteListModal = ({ isActive, onClose }) => {
  const referList = [
    { userName: "User Name", joined: true },
    { userName: "User Name", joined: true },
    { userName: "User Name", joined: true },
    { userName: "User Name", joined: true },
    { userName: "User Name", joined: true },
    { userName: "User Name", joined: true },
    { userName: "User Name", joined: true },
    { userName: "User Name", joined: true },
    { userName: "User Name", joined: true },
    { userName: "User Name", joined: true },
    { userName: "User Name", joined: true },
    { userName: "User Name", joined: true },
    { userName: "User Name", joined: true },
    { userName: "User Name", joined: true },
    { userName: "User Name", joined: true },
    { userName: "User Name", joined: true },
    { userName: "User Name", joined: true },
    { userName: "User Name", joined: true },
    { userName: "User Name", joined: true },
    { userName: "User Name", joined: true },
    { userName: "User Name", joined: true },
  ];
  return (
    <Modal
      isActive={isActive}
      onClose={onClose}
      styled
      className={classes.mainWrapper}
    >
      <div className={classes.wrapper}>
        <Text base950 xl3 semiBold className={classes.heading}>
          White List
        </Text>

        <div className={classes.container}>
          <div className={classes.formContainer}>
            <Text base800 lg className={classes.info}>
              Invite your friends to earn rewards. Your reward points will be
              added to your account and can be used once our app is available.
            </Text>
            <div className={classes.form}>
              <a
                href="https://brandname/ref/123456789"
                target="_blank"
                rel="noreferrer"
                className={classes.link}
              >
                https://brandname/ref/123456789
              </a>
              <CopyToClipboard text="https://brandname/ref/123456789">
                <Button
                  btnPrimary
                  size="md"
                  className={classes.button}
                  onClick={() => {}}
                >
                  Copy Link
                </Button>
              </CopyToClipboard>
            </div>{" "}
          </div>

          <div className={classes.referContainer}>
            <div className={classes.referHeader}>
              <Text md semiBold base900 className={classes.referTitle}>
                Your Refer (147)
              </Text>
              <Text sm semiBold base700 className={classes.earnedPoint}>
                Earned Point: <span>1345</span>
              </Text>
            </div>
            <div className={clsx(classes.referList, "overflow")}>
              {referList.map((el, i) => (
                <React.Fragment key={i}>
                  <Text sm base600 className={classes.id}>
                    {i + 1}
                  </Text>{" "}
                  <Text sm base600>
                    {el.userName}
                  </Text>
                  {el.joined && (
                    <div className={classes.status}>
                      <p
                        className={clsx(
                          classes.btn,
                          el.joined && classes.joined
                        )}
                      >
                        Join
                      </p>
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default WhiteListModal;
