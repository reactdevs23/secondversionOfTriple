import React from "react";
import classes from "./HeroSection.module.css";
import clsx from "clsx";
import { heroBottomIcon, heroMobile, heroTopIcon, qrCode } from "../../images";
import Text from "../common/Text/Text";
import Button from "../common/Button/Button";
import { useMyContext } from "../../Context/Context";

const HeroSection = () => {
  const { setIsJoinWaitingListModalActive } = useMyContext();

  return (
    <section className={classes.wrapper}>
      <div className={clsx(classes.container, "container", "paddingTop")}>
        <h1 className={classes.heading}>
          Make It Easier To Manage Your Money{" "}
        </h1>{" "}
        <div className={classes.infoContainer}>
          <div className={classes.infoAndButton}>
            <Text base0 lg className={classes.info}>
              In the world where innovation is the heartbeat of success
              Brandname emerges as a transformative
            </Text>{" "}
            <Button
              btnPrimary
              size="md"
              onClick={() => setIsJoinWaitingListModalActive(true)}
            >
              Join Waiting List
            </Button>
          </div>
          <div className={classes.line}></div>
          <div className={classes.qrCodeContainer}>
            <Text md base900 className={classes.qrCodeInfo}>
              Pre-register to get the app when it is available
            </Text>
            <img src={qrCode} alt="#" className={classes.qrCode} />
          </div>
        </div>
      </div>
      <div className={classes.imgContainer}>
        <img src={heroMobile} alt="#" className={classes.heroMobile} />
      </div>
      <img src={heroTopIcon} alt="#" className={classes.topIcon} />
      <img src={heroBottomIcon} alt="#" className={classes.bottomIcon} />
    </section>
  );
};

export default HeroSection;
