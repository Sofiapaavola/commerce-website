import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Header from '../layout/Header';
import { connect } from 'react-redux';
import { addToCart } from '../actions/CartActions';


class Shop extends Component{

    handleClick = (id)=>{
        console.log("Here I AM");
        this.props.addToCart(id); 
    }

    render(){
        let itemList = this.props.items.map(item=>{
            return(
                <Card style={{ width: '200px', margin:'10px' }} key={item.id}>
                    <Card.Img variant="top" style={{ width: '200px', height:'200px' }} src={item.img} alt={item.title}/>
                    <Card.Title style={{ fontSize: '15px'}} >{item.title}</Card.Title>
                    {/* <Card.Body> */}
                        <button to="/" onClick={() =>{this.handleClick(item.id)}}>
                            add
                        </button>
                        <p>{item.desc}</p>
                        <p><b>Price: {item.price}$</b></p>
                    {/* </Card.Body> */}
                 </Card>
            )
        })

        return(
            <Container fluid>
                <Header title="Our Items"></Header>
                <Row>
                    {itemList}
                </Row>
            </Container>
        )
    }
}

const mapStateToProps = (state)=>{
    return {
      items: state.items
    }
  }

const mapDispatchToProps= (dispatch)=>{
    
    return{
        addToCart: (id)=>{dispatch(addToCart(id))}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Shop)
