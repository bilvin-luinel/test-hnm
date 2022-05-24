import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { useSearchParams } from 'react-router-dom';
import Card from '../component/Card';

const Home = () => {

    const [productList, setProductList] = useState([]);
    const [query, setQuery] = useSearchParams();

    const getProducts = async () => {
        let searchQuery = query.get("q") || "";
        let url = `https://my-json-server.typicode.com/bilvin-luinel/test-hnm/products?q=${searchQuery}`;
        let response = await fetch(url);
        let data = await response.json();
        setProductList(data);
    }

    useEffect(() => {
        getProducts();
    }, [query]);

    return (
        <Container>
            <Row>
                {productList.map((item) => (
                    <Col lg={3}>
                        <Card item={item} />
                    </Col>
                ))}
            </Row>
        </Container>
    )
}

export default Home