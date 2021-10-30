import React from "react";
import LoopMachine from '../../components/LoopMachine';
import Title from '../../components/Title/Title'
import "./Home.css";
const Home = () => {
  return (
    <div className="container-home">
      <Title/>
      <LoopMachine/>
    </div>
  );
};

export default Home;
