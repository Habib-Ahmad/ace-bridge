import { Close } from '@mui/icons-material';

const FloorPlan = ({
	handleMultiplePreviewUpload,
	setpreview,
	setFile,
	preview,
	deleteFloorPlan,
}) => {
	return (
		<>
			<h2>Floor Plan</h2>
			<div className="row column">
				<input
					className="upload-btn"
					accept="image/*"
					id="icon-button-file"
					type="file"
					onChange={(e) => handleMultiplePreviewUpload(e, setpreview, setFile)}
				/>
				<br />
				<div className="img-grid">
					{preview &&
						preview.map((item, idx) => (
							<div key={item.slice(-10)}>
								<Close
									onClick={() => deleteFloorPlan(idx)}
									sx={{
										display: 'block',
										marginLeft: 'auto',
										cursor: 'pointer',
									}}
								/>
								<img src={item} alt="" />
							</div>
						))}
				</div>
			</div>
		</>
	);
};

export default FloorPlan;
