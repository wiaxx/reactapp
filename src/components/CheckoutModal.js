import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const CheckoutModal = ({ showModal, setShowModal }) => {
	return (
		<>
			{showModal ? (
				<Container>
					container{" "}
					<CheckoutModalContent>
						<CheckoutModalHeader>
							<CheckoutModalTitle>
								<h4>Modal Title</h4>
							</CheckoutModalTitle>
						</CheckoutModalHeader>
						<CheckoutModalBody>
							<p>Thank you for your order</p>

							<h3>Your ordernumber is:</h3>

							<p>Closing this window will redirect you to the homepage</p>
						</CheckoutModalBody>

						<CheckoutModalFooter>
							<Link to={`/`}>
								<button> Close</button>
							</Link>
						</CheckoutModalFooter>
					</CheckoutModalContent>
				</Container>
			) : null}
		</>
	);
};

const Container = styled.div`
	position: fixed;
	left: 0;
	top: 0;
	right: 0;
	bottom: 0;
	background-color: rgba(0, 0, 0, 0.5);
	display: flex;
	align-items: center;
	justify-content: center;
`;

const CheckoutModalContent = styled.div`
	width: 500px;
	background-color: #fff;
`;

const CheckoutModalFooter = styled.div`
	padding: 10px;
`;

const CheckoutModalHeader = styled.div`
	padding: 10px;
`;

const CheckoutModalTitle = styled.div`
	margin: 0;
`;

const CheckoutModalBody = styled.div`
	padding: 10px;
	border-top: 1px solid #eee;
	border-bottom: 1px solid #eee;
`;

export default CheckoutModal;
