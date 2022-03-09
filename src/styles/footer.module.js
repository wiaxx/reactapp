import styled from "styled-components";

/*footer styling */

export const Box = styled.div`
	padding: 30px 40px 40px 10px;
	background: black;
	position: relative;
	bottom: 0;
	min-height: 40vh;
	width: auto;
	z-indext: 0.1;
`;

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	max-width: 1000px;
	margin: 0 auto;
`;

export const Column = styled.div`
	display: flex;
	flex-direction: column;
	text-align: left;
	margin-left: 60px;
`;

export const Row = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(185px, 1fr));
	grid-gap: 20px;

	@media (max-width: 1000px) {
		grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
	}
`;

export const FooterLink = styled.a`
	color: #fff;
	margin-bottom: 20px;
	font-size: 18px;
	text-decoration: none;

	&:hover {
		color: #d3afe5;
		transition: 200ms ease-in;
	}
`;

export const Heading = styled.p`
	font-size: 24px;
	color: #fff;
	margin-bottom: 40px;
	font-weight: bold;
`;

export const FooterHeading = styled.h1`
	text-align: center;
	background: -webkit-linear-gradient(65deg, #00389e, #00abff, #e10e85);
	background-size: 500%;
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	animation: backgroundAnimation 10s linear infinite;
	animation-direction: alternate;

	@keyframes backgroundAnimation {
		from {
			background-position: 0% 0%;
		}
		to {
			background-position: 100% 100%;
		}
	}
`;
