import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import styles from '../styles/image.module.css';

const MainContainer = styled.div`
	width: 100vw;
	min-height: 75vh;
	display: flex;
	flex-wrap: wrap;
	background-color: #2d2f43;
`;

const images = [
	'https://images.unsplash.com/photo-1537498425277-c283d32ef9db?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=878&q=80',
	'https://images.unsplash.com/photo-1548092372-0d1bd40894a3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
	'https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
]

const Home = () => {
	const [currentIndex, setCurrentIndex] = useState(0);

	useEffect(() => {
		const intervalId = setInterval(() => {
			if (currentIndex === images.length - 1) {
				setCurrentIndex(0);
			} else {
				setCurrentIndex(currentIndex + 1);
			}
		}, 9000)

		return () => clearInterval(intervalId);
	}, [currentIndex])

	return (
		<MainContainer>
			<img src={images[currentIndex]} alt='computer' className={styles.homeImg} />
		</MainContainer>
	)
}

export default Home;