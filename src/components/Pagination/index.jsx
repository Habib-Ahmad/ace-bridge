import { Button } from '@mui/material';

const Pagination = ({
	page,
	numOfPages,
	pageButtons,
	minPageLimit,
	maxPageLimit,
	PAGE_RANGE,
	setPage,
	setMinPageLimit,
	setMaxPageLimit,
}) => {
	const handleLoadLess = () => {
		setPage(minPageLimit - 1);
		setMinPageLimit((prev) => prev - PAGE_RANGE);
		setMaxPageLimit((prev) => prev - PAGE_RANGE);
	};

	const handleLoadMore = () => {
		setPage(maxPageLimit + 1);
		setMinPageLimit((prev) => prev + PAGE_RANGE);
		setMaxPageLimit((prev) => prev + PAGE_RANGE);
	};

	const handlePrev = () => {
		setPage((prev) => {
			const newPage = prev - 1;
			if (newPage >= minPageLimit) return newPage;
			handleLoadLess();
			return minPageLimit - 1;
		});
	};

	const handleNext = () => {
		setPage((prev) => {
			const newPage = prev + 1;
			if (newPage <= maxPageLimit) return newPage;
			handleLoadMore();
			return maxPageLimit + 1;
		});
	};
	return (
		<div className="pagination">
			<Button disabled={page < 2} variant="text" onClick={handlePrev}>
				Prev
			</Button>
			{minPageLimit > PAGE_RANGE && (
				<Button className="dots" variant="text" onClick={handleLoadLess}>
					&hellip;
				</Button>
			)}

			{pageButtons.slice(minPageLimit - 1, maxPageLimit).map((pg) => (
				<Button
					className={`btn ${pg === page ? 'current' : ''}`}
					key={pg}
					variant="text"
					onClick={() => setPage(pg)}
				>
					{pg}
				</Button>
			))}

			{numOfPages > maxPageLimit && (
				<Button className="dots" variant="text" onClick={handleLoadMore}>
					&hellip;
				</Button>
			)}

			<Button
				disabled={page === pageButtons[pageButtons.length - 1]}
				variant="text"
				onClick={handleNext}
			>
				Next
			</Button>
		</div>
	);
};

export default Pagination;
