import { LinearProgress } from '@mui/material';

const LinearProgressWithLabel = (props) => {
	const { value } = props;

	return (
		<div className="progress-with-label">
			<LinearProgress variant="determinate" {...props} />
			<div className="value">{value}%</div>
		</div>
	);
};

export default LinearProgressWithLabel;
