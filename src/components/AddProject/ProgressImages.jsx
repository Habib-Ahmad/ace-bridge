import { Close } from '@mui/icons-material';
import uuid from 'react-uuid';
import {
	deletePreviewFromMultiple,
	handleMultiplePreviewUpload,
} from './functions';

const ProgressImages = ({ setPreview, setFile, preview }) => {
	return (
		<>
			<h2>Progress Images</h2>
			<div className="row column">
				<input
					className="upload-btn"
					accept="image/*"
					id="icon-button-file"
					type="file"
					onChange={(e) => handleMultiplePreviewUpload(e, setPreview, setFile)}
				/>
				<br />
				<div className="img-grid">
					{preview?.length ? (
						preview.map((item, idx) => (
							<div key={uuid()}>
								<Close
									onClick={() =>
										deletePreviewFromMultiple(idx, setPreview, setFile)
									}
									sx={{
										display: 'block',
										marginLeft: 'auto',
										cursor: 'pointer',
									}}
								/>
								<img src={item} alt="" />
							</div>
						))
					) : (
						<></>
					)}
				</div>
			</div>
		</>
	);
};

export default ProgressImages;
