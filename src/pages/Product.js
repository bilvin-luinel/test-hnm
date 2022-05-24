import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom'

const Product = () => {

    let {id} = useParams();
    const [product, setProduct] = useState(null);

    const getProductDetail = async () => {
        let url = `https://my-json-server.typicode.com/bilvin-luinel/test-hnm/products/${id}`;
        let response = await fetch(url);
        let data = await response.json();
        setProduct(data);
    }

    useEffect(()=>{
        getProductDetail();
    },[])

  return (
    <Container className="product-container">
        <Row>
            <Col className="product-img">
                <img src={product?.img} />
            </Col>
            <Col>
                <div className="product-title">{product?.title}</div>
                <div className="product-price">\{product?.price}</div>
                <Button className="product-buy" variant="danger">구매</Button>
            </Col>
        </Row>
    </Container>
  )
}

export default Product