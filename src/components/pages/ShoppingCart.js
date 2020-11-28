import React, {useState} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function ShoppingCart(props) {


    // TODO: either use Redux to share the component information between the two components 
    // or change the structure around so you can pass the data between them. 
    // Parent and child.
    console.log("shopping cart", props.products)
    return (
        <Container fluid>
          <h1> Cart </h1> 
            <Row className="justify-content-sm-center">
            
                {/* {props.products.map((product, idx) => (
                    <Col xs={1} md={2} style={{textAlign: 'center', margin: '10px'}} key={idx}>
                        <h3> {product.name} </h3>
                        <h4> {product.cost} </h4> 
                        <img style={{height: '200px', width: '200px'}} src={product.image} alt={product.name}></img>
                    </Col>
                ))} */}
            </Row>
        </Container>
    )
}
