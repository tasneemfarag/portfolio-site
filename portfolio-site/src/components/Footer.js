import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const footer = () => {
    return (
        <footer className="mt-5">
            <Container fluid={true}>
                <Row className="border-top justify-content-between p-3">
                    <Col className="p-0" md={3} sm={12}>
                        Tasneem Farag
                    </Col>
                    <Col className="p-0 d-flex justify-content-end" md={3}>
                        This site was made by Tasneem Farag.
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default footer;