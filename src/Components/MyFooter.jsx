import { Component } from "react";
import {Container, Row, Col} from 'react-bootstrap'


class MyFooter extends Component {
    render() {
        return (
            <Container className="bg-secondary" fluid>
                <Row className="p-5">
                    <Col>
                        <h4>CUSTOMER SERVICE</h4>
                        <p>Contact Us</p>
                        <p>Help $ FAQ</p>
                        <p>Shipping $ Delivery</p>
                        <p>Returns $ Cancellations</p>
                    </Col>
                    <Col>
                        <h4>INFORMATION</h4>
                        <p>About Us</p>
                        <p>Academic</p>
                        <p>Corporate</p>
                        <p>Schools</p>
                        <p>advanced Search</p>
                        <p>Terms $ Conditions</p>
                        <p>Privacy Policy</p>
                    </Col>
                    <Col>
                        <h4>MY ACCOUNT</h4>
                        <p>Sign In</p>
                        <p>View Cart</p>
                        <p>My Wishlist</p>
                        <p>Checkout</p>
                        <p>Track My Order</p>
                        <p>Track My Order (guest)</p>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default MyFooter