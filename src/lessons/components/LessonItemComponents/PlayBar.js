import React from 'react';
import { useAudioPosition } from 'react-use-audio-player';

import classes from './PlayBar.module.css';

const PlayBar = () => {
	const { position, duration } = useAudioPosition({ highRefreshRate: true });
	const [ percent, setPercent ] = React.useState(0);

	React.useEffect(
		() => {
			setPercent(position / duration * 100 || 0);
		},
		[ position, duration ]
	);
	return (
		<div className={classes.Bar} id="bar">
			<div className={classes.LoadedBar} id="barLoaded" style={{ width: `${percent}%` }} />
		</div>
	);
};

export default PlayBar;
