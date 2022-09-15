const TabPanel = ({ children, value, index }) => {
	return (
		<div hidden={value !== index} style={{ minHeight: '50vh' }}>
			{value === index && <div style={{ paddingTop: '60px' }}>{children}</div>}
		</div>
	);
};

export default TabPanel;
