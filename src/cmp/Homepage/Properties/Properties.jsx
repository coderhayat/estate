import { 
    Container,
    Row,
    Col
 } from "react-bootstrap";
import "./Properties.css";

const Properties = ()=>{
    return(
        <>
        <Container className="pro-container">
            <h1 className="pro-title">Latest Properties</h1>
            <Row>
                <Col md className="mb-5">
                <div className="box-one">
                    <div className="overlay"></div>
                    <div className="content-box">
                        <h3>204 RINO</h3>
                        <h3>VENDA ROAD FIVE</h3>
                        <button>RENT | $ 12.000</button>
                        <p>Click here to view <i className="fa fa-solid fa-chevron-right"></i></p>
                    </div>
                </div>
                </Col>
                <Col md className="mb-5">
                <div className="box-two">
                    <div className="overlay"></div>
                    <div className="content-box">
                        <h3>255 ROHA</h3>
                        <h3>CASA LIFE FEET</h3>
                        <button>RENT | $ 18.000</button>
                        <p>Click here to view <i className="fa fa-solid fa-chevron-right"></i></p>
                    </div>
                </div>
                </Col>
                <Col md>
                <div className="box-three">
                    <div className="overlay"></div>
                    <div className="content-box">
                        <h3>245 AZADU</h3>
                        <h3>NSSHI PARK LET</h3>
                        <button>RENT | $ 14.000</button>
                        <p>Click here to view <i className="fa fa-solid fa-chevron-right"></i></p>
                    </div>
                </div>
                </Col>
            </Row>
        </Container>
        </>
    );
}
export default Properties;