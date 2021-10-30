import React, { useState } from "react";
import Pad from "../Pad";
import { Button } from "antd";
import { PlayCircleOutlined, PauseOutlined } from "@ant-design/icons";
import "./style.css";

//icons
import BassIcon from "../../helpers/icons/bass.png";
import DrumIcon from "../../helpers/icons/drum.png";
import ElectricGuitarIcon from "../../helpers/icons/electric-guitar.png";
import PianoIcon from "../../helpers/icons/grand-piano.png";
import GuitarIcon from "../../helpers/icons/guitar.png";
import DrumInstrumentIcon from "../../helpers/icons/music-instrument.png";
import TablasIcon from "../../helpers/icons/tablas.png";
import TromboneIcon from "../../helpers/icons/trombone.png";
import XylophoneIcon from "../../helpers/icons/xylophone.png";

//sound
import Sound1 from "../../helpers/sounds/1.mp3";
import Sound2 from "../../helpers/sounds/2.mp3";
import Sound3 from "../../helpers/sounds/3.mp3";
import Sound4 from "../../helpers/sounds/4.mp3";
import Sound5 from "../../helpers/sounds/5.mp3";
import Sound6 from "../../helpers/sounds/6.mp3";
import Sound7 from "../../helpers/sounds/7.mp3";
import Sound8 from "../../helpers/sounds/8.mp3";
import Sound9 from "../../helpers/sounds/9.mp3";

const LoopMachine = () => {
  const [pads, setPads] = useState([
    {
      icon: BassIcon,
      path: Sound1,
      isActive: false,
      shouldPlay: false,
      key: 0,
      onPadClick: () => {
        onPadClick(0);
      },
    },
    {
      icon: DrumIcon,
      path: Sound2,
      isActive: false,
      shouldPlay: false,
      key: 1,
      onPadClick: () => {
        onPadClick(1);
      },
    },
    {
      icon: ElectricGuitarIcon,
      path: Sound3,
      isActive: false,
      shouldPlay: false,
      key: 2,
      onPadClick: () => {
        onPadClick(2);
      },
    },
    {
      icon: PianoIcon,
      path: Sound4,
      isActive: false,
      shouldPlay: false,
      key: 3,
      onPadClick: () => {
        onPadClick(3);
      },
    },
    {
      icon: GuitarIcon,
      path: Sound5,
      isActive: false,
      shouldPlay: false,
      key: 4,
      onPadClick: () => {
        onPadClick(4);
      },
    },
    {
      icon: DrumInstrumentIcon,
      path: Sound6,
      isActive: false,
      shouldPlay: false,
      key: 5,
      onPadClick: () => {
        onPadClick(5);
      },
    },
    {
      icon: TablasIcon,
      path: Sound7,
      isActive: false,
      shouldPlay: false,
      key: 6,
      onPadClick: () => {
        onPadClick(6);
      },
    },
    {
      icon: TromboneIcon,
      path: Sound8,
      isActive: false,
      shouldPlay: false,
      key: 7,
      onPadClick: () => {
        onPadClick(7);
      },
    },
    {
      icon: XylophoneIcon,
      path: Sound9,
      isActive: false,
      shouldPlay: false,
      key: 8,
      onPadClick: () => {
        onPadClick(8);
      },
    },
  ]);

  const onPadClick = (index) => {
    // clone the pad
    const temp = [...pads];
    // change the active flag in a temp array
    const isActive = temp[index].isActive;
    temp[index].isActive = !isActive;
    // change the array
    setPads(temp);
  };
  const onPlayClick = () => {
    // clone the pad
    const temp = [...pads];
    // iterate the array and play all the active pads
    for (let i = 0; i < temp.length; i++) {
      if (temp[i].isActive) {
        temp[i].shouldPlay = true;
      }
    }
    // change the array
    setPads(temp);
  };
  const onStopClick = () => {
    // clone the pad
    const temp = [...pads];
    for (let i = 0; i < temp.length; i++) {
      if (temp[i].shouldPlay) {
        temp[i].shouldPlay = false;
      }
    }
    // change the array
    setPads(temp);
  };

  return (
    <>
      <div className="container">
        {pads.map((pad) => (
          <Pad {...pad} />
        ))}
      </div>
      <div className="stop-and-play-btn">
          <div>
            <Button  className="btnPS" onClick={onPlayClick}>
              <PlayCircleOutlined />
            </Button>
          </div>
          <div>
            <Button className="btnPS" onClick={onStopClick}>
              <PauseOutlined />
            </Button>
          </div>
        </div>
    </>
  );
};

export default LoopMachine;
