import React from "react";
import HeroSection from "../../components/HeroSection/HeroSection";
import MaximizeYourSavings from "../../components/MaximizeYourSavings/MaximizeYourSavings";
import IntegrationPlugins from "../../components/IntegrationPlugins/IntegrationPlugins";
import Benefits from "../../components/Benefits/Benefits";
import JoinToWaitingList from "../../components/JoinToWaitingList/JoinToWaitingList";
import JoinModal from "../../Modals/JoinModal/JoinModal";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <MaximizeYourSavings />
      <Benefits />
      <IntegrationPlugins />
      <JoinToWaitingList />
    </div>
  );
};

export default Home;
