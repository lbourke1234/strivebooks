import { Component } from "react";
import {Card} from 'react-bootstrap'
import { Row, Col } from "react-bootstrap";
import books from '../Books/books.json'


class LatestRelease extends Component {
    render() {
        return (

            books.map(({asin, title, img, price, category}) => (
                <Card className="col-3 my-2" id={asin}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    {/* <Card.Title>{asin}</Card.Title> */}
                    <Card.Text>
                    {title}
                    </Card.Text>
                    <Row>
                        <Col className="font-weight-bold" md={6}>{category.toUpperCase()}</Col>
                        <Col className="font-weight-bold" md={6}>€{price}</Col>
                    </Row>
                </Card.Body>
                </Card>
            )
            )
        )
    }
}

export default LatestRelease