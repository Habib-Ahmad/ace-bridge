export const GetFilteredData = (
	{ listing, location, type, key },
	page,
	items
) => {
	listing = listing?.toLowerCase();
	location = location?.toLowerCase();
	type = type?.toLowerCase();
	key = key?.toLowerCase();
	let array = [...items];

	if (listing) {
		array = array.filter((item) =>
			item.listing.toLowerCase().includes(listing)
		);
	}

	if (location) {
		array = array.filter((item) =>
			item.location.toLowerCase().includes(location)
		);
	}

	if (type) {
		array = array.filter((item) => item.type.toLowerCase().includes(type));
	}

	if (key) {
		array = array.filter(
			(item) =>
				item.listing?.toLowerCase().includes(key) ||
				item.location?.toLowerCase().includes(key) ||
				item.type?.toLowerCase().includes(key) ||
				item.title?.toLowerCase().includes(key) ||
				item.price?.includes(key) ||
				item.price?.replace(/\B(?=(\d{3})+(?!\d))/g, ',').includes(key)
		);
	}

	return array.slice((page - 1) * 12, page * 12);
};
