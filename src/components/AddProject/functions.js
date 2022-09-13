import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { storage } from '../../firebase';

export const previewFile = (file, setPreviewState) => {
	const reader = new FileReader();
	reader.readAsDataURL(file);
	reader.onloadend = () => setPreviewState(reader.result);
};

export const handlePreviewUpload = (e, setPreviewState, setFileState) => {
	const file = e.target.files[0];
	previewFile(file, setPreviewState);
	setFileState(file);
};

export const deletePreview = (setPreviewState, setFileState) => {
	setPreviewState();
	setFileState();
};

export const uploadImage = async (file, folder) => {
	const imageRef = ref(storage, `/${folder}/${file.name}`);
	const uploadTask = uploadBytesResumable(imageRef, file);
	return await uploadTask
		.then((snapshot) => getDownloadURL(snapshot.ref))
		.catch((error) => console.log(error));
};

export const deletePreviewFromMultiple = (
	index,
	setPreviewState,
	setFileState
) => {
	setPreviewState((prev) => {
		const current = [...prev];
		current.splice(index, 1);
		return current;
	});
	setFileState((prev) => {
		const current = [...prev];
		current.splice(index, 1);
		return current;
	});
};

export const handleMultiplePreviewUpload = (
	e,
	setPreviewState,
	setFileState
) => {
	const files = [...e.target.files];
	files.forEach((file) => {
		const reader = new FileReader();
		reader.readAsDataURL(file);
		reader.onloadend = () =>
			setPreviewState((prev) => [...prev, reader.result]);
		setFileState((prev) => [...prev, file]);
	});
};
