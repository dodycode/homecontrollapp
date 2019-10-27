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
		border: '1px solid #cbd5e0',
		boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
		borderRadius: 4
	};

	const buttonStyle = {
		backgroundColor: '#4299e1',
		color: '#fff',
		border: 0,
		padding: '8px 16px',
		borderRadius: 4,
		cursor: 'pointer',
		display: devName != null ? 'none' : 'inherit',
		outline: 'none'
	}

	const linkStyle = {
		color: '#4299e1',
		textDecoration: 'none',
		cursor: 'pointer'
	}

	function showDeveloper() {
		setDevName('Dody Prasetyo');
		setDevFacebook('https://facebook.com/DodyCoder');
		setDevGithub('https://github.com/dodycode');
	}

	return(
		<div style={containerStyle}>
			<div style={cardStyle}>
				<div style={{ display: devName == null ? 'none' : 'inherit'}}>
					<p style={{marginTop: 0}} id="dev-name">{devName}</p>
					<a id="facebook-link" href={devFacebook} style={linkStyle} target="_blank">Facebook</a> | <a id="github-link" href={devGithub} style={linkStyle} target="_blank">Github</a>
				</div>
				<button style={buttonStyle} onClick={showDeveloper}>Hey who's this?! <br /> <b>Click me!</b></button>
			</div>
		</div>
	);
}

export default Dodypras;