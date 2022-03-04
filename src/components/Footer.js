import React from "react";
import {
	Box,
	Container,
	Row,
	Column,
	FooterLink,
	Heading,
	FooterHeading,
} from "../styles/footer.module";

const Footer = () => {
	return (
		<Box>
			<FooterHeading>
				Garageförsäljning{" "}
			</FooterHeading>
			<Container>
				<Row>
					<Column>
						<Heading>About Us</Heading>
						<FooterLink href="#">Flyktplaner</FooterLink>
						<FooterLink href="#">Partners</FooterLink>
						<FooterLink href="#">Avbetalda poliser</FooterLink>
						<FooterLink href="#">Hur pålitliga är era hälare?</FooterLink>
					</Column>
					<Column>
						<Heading>Services</Heading>
						<FooterLink href="#">Solarium</FooterLink>
						<FooterLink href="#">Internships</FooterLink>
						<FooterLink href="#">Coding</FooterLink>
						<FooterLink href="#">Teaching</FooterLink>
					</Column>
					<Column>
						<Heading>Contact Us</Heading>
						<FooterLink href="#">Amanda Wikström</FooterLink>
						<FooterLink href="#">Tom Eriksson</FooterLink>
						<FooterLink href="#">Alter Ego 1</FooterLink>
						<FooterLink href="#">Alter Ego 2</FooterLink>
					</Column>
					<Column>
						<Heading>Social Media</Heading>
						<FooterLink href="#">
							<i className="fab fa-facebook-f">
								<span style={{ marginLeft: "10px" }}>Facebook</span>
							</i>
						</FooterLink>
						<FooterLink href="#">
							<i className="fab fa-instagram">
								<span style={{ marginLeft: "10px" }}>Instagram</span>
							</i>
						</FooterLink>
						<FooterLink href="#">
							<i className="fab fa-twitter">
								<span style={{ marginLeft: "10px" }}>Twitter</span>
							</i>
						</FooterLink>
						<FooterLink href="#">
							<i className="fab fa-youtube">
								<span style={{ marginLeft: "10px" }}>Youtube</span>
							</i>
						</FooterLink>
					</Column>
				</Row>
			</Container>
		</Box>
	);
};
export default Footer;
