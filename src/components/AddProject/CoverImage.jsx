import { Close } from '@mui/icons-material';
import { deletePreview, handlePreviewUpload } from './functions';

const CoverImage = ({ setPreview, setFile, preview, value }) => {
	return (
		<>
			<h2>Project Cover Image</h2>
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
					<div className="image-wrapper">
						<p>Preview</p>
						<Close
							onClick={() => deletePreview(setPreview, setFile)}
							sx={{
								display: 'block',
								marginLeft: 'auto',
								cursor: 'pointer',
							}}
						/>

						<div className="image">
							<img src={preview || value} alt="" />
						</div>
					</div>
				)}
			</div>
		</>
	);
};

export default CoverImage;
