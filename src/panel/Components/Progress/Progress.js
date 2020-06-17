import React from 'react';
import './Progress.css';

const Progress = (props) => {
	const [style, setStyle] = React.useState({});

	setTimeout(() => {
		const newStyle = {
			opacity: 1,
			width: `${props.done}%`,
			background:`${props.color}`
		}
		
		setStyle(newStyle);
    },100);
    return (
		<div className="progress">
			<div className="progress-done" style={style}>
			</div>
		</div>
	)
}
export default Progress;