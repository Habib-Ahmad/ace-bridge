import { Close } from '@mui/icons-material';
import { deletePreview, handlePreviewUpload } from './functions';

const Thumbnail = ({ setPreview, setFile, preview, value }) => {
	return (
		<>
			<h2>Project Thumbnail</h2>
			<div className="row column">
				<input
					className="upload-btn"
					accept="image/*"
					id="icon-button-file"
					type="file"
					onChange={(e) => handlePreviewUpload(e, setPreview, setFile)}
				/>
				<br />
				{(preview || value) && (
					<div className="thumbnail-wrapper">
						<p>Preview</p>
						<Close
							onClick={() => deletePreview(setPreview, setFile)}
							sx={{
								display: 'block',
								marginLeft: 'auto',
								cursor: 'pointer',
							}}
						/>
						<div className="thumbnail">
							<img src={preview || value} alt="thumbnail" />
						</div>
					</div>
				)}
			</div>
		</>
	);
};

export default Thumbnail;
