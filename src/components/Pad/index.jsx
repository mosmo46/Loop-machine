/* eslint-disable react-hooks/exhaustive-deps */
import React,{useEffect} from 'react';
import { Button } from "antd";
import './style.css'
import useSound from 'use-sound';

const Pad = ({key,icon ,path, isActive,onPadClick,shouldPlay }) => {

	const [play, { stop, isPlaying }] = useSound(path);

	const activeClass = isActive ? 'active' : 'not-active';

	useEffect(() => {
		if (shouldPlay && !isPlaying) {
          play();
		} else if (!shouldPlay) {
			stop();
		}
	}, [shouldPlay])
	return (
		<div className="pad-container">
			<Button icon={<img src={icon} alt="icon"/>} className={`ant-btn ${activeClass}`} onClick={() => onPadClick(key)}>
	        </Button>
		</div>
	);
}

export default Pad;