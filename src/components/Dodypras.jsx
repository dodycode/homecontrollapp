import React, {useState} from 'react';

const Dodypras = () => {
	const [ devName, setDevName ] = useState(null);
	const [ devFacebook, setDevFacebook ] = useState(null);
	const [ devGithub, setDevGithub ] = useState(null);

	const containerStyle = {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		marginBottom: 20,
		marginTop: 20
	};

	const cardStyle = {
		padding: 20,
		backgroundColor: '#fff',
		border: '1px solid #000'
	};

	const buttonStyle = {
		backgroundColor: '#fff',
		border: '1px solid #000',
		padding: '10px 20px',
		borderRadius: '8px',
		cursor: 'pointer',
		display: devName != null ? 'none' : 'inherit',
		outline: 'none'
	}

	function showDeveloper() {
		setDevName('Username: Dodypras');
		setDevFacebook('Facebook: facebook.com/DodyCoder');
		setDevGithub('Github: https://github.com/dodycode');
	}

	return(
		<div style={containerStyle}>
			<div style={cardStyle}>
				<div style={{ display: devName == null ? 'none' : 'inherit'}}>
					{devName}
					<br />
					{devFacebook}
					<br />
					{devGithub}
				</div>
				<button style={buttonStyle} onClick={showDeveloper}>Hey who's this?! <br /> <b>Click me!</b></button>
			</div>
		</div>
	);
}

export default Dodypras;