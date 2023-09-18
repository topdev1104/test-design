import { useEffect, useState } from "react";
import {
  Button,
  Col,
  Container,
  Form,
  Image,
  ListGroup,
  ListGroupItem,
  Row,
} from "react-bootstrap";
import { AiFillDelete } from "react-icons/ai";
import { CartState } from "../context/Context";
import Rating from "./Rating";

const Cart = () => {
  const {
    state: { cart },
    dispatch,
  } = CartState();

  const [total, setTotal] = useState();

  useEffect(() => {
    setTotal(
      cart.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0)
    );
  }, [cart]);

  const steps = [
    {url: 'Group 1484578147.png', name: "Step 1 : Cart Review"},
    {url: 'Group 1484578147.png', name: "Step 2 : Checkout"},
    {url: 'Group 1484578146.png', name: "Step 3 : Special Offer"},
    {url: 'Group 1484578146 (1).png', name: "Step 4 : Confirmation"}
  ]

  return (
    <div>
      <h1 className="main-title">Wait ! Your Order In Progress.</h1>
      <br />
      <p className="sub-title">Lorem ipsum dolor sit amet, consectetur adipiscing </p>
      <Row className="mt-35">
        {steps.map((step, index) => (
            <div style={{display: 'flex', margin: 'auto'}}>
              <Image src={'./assets/images/' + step.url} width={40} height={40} />
              <p className="step-font">{step.name}</p>
            </div>
          ))}
      </Row>
      <Container>
        <Row className="mt-35">
          <Col sm={6} xs={12} xl={6}>
            <Image src={'./assets/images/image 4.png'} width={'100%'} height={'auto'} />
            <div className="mt-35">
              <div className="comment-header">
                <Image src={'./assets/images/Rectangle 1127.png'} width={48} height={48} />
                <div style={{paddingLeft:'10px'}}>
                  <Rating rating={5} style={{color: '#FFC000'}} />
                  <div style={{display : 'flex', marginTop: '7px'}}>
                    <h6 style={{
                      fontFamily: 'Manrope',
                      fontWeight: 700,
                      fontSize: '14px',
                      lineHeight: '14px',
                      color: '#333333'
                    }}>
                      Ken T.
                    </h6>
                    <Image src={'./assets/images/verify 1.png'} width={16} height={16} />
                    <p style={{
                      fontFamily: 'Manrope',
                      fontWeight: 400,
                      fontSize: '12px',
                      lineHeight: '12px',
                      color: '#5BB59A',
                      marginTop: '2px'
                    }}>
                      &nbsp;Verified Customer
                    </p>
                  </div>  
                </div>
              </div>
              <h6 style={{
                fontFamily: 'Manrope', 
                fontWeight: 400, 
                fontSize: '16px', 
                lineHeight: '24px'
              }}>
              “As soon as the Clarifions arrived I put one in my bedroom. 
              This was late in the afternoon. When I went to the bedroom in the evening
              it smelled clean. When I went to bed I felt I could breathe better. Wonderful.”
              </h6>
            </div>
          </Col>
          <Col sm={6} xs={12} xl={6}>
            <h3 className="content-body-title">
              <span className="span-letter">ONE TIME ONLY</span>
              &nbsp;&nbsp;special price for 6 extra Clarifion for only 
              <span className="span-letter">$14 each</span> ($84.00 total!) 
            </h3>
            <Row className="mt-10">
              <Col sm={4}>
                <Image src={'./assets/images/Group 1484578135.png'} width={'100%'} height={'auto'} />
              </Col>
              <Col sm={8}>
                <div className="des-title">
                  <h6 className="clarifion">Clarifion Air Ionizer</h6>
                  <h6 className="clarifion-right">
                    <span className="line-through">$180</span>
                    <span className="fixed-cost">&nbsp;$85</span></h6>
                </div>
                <div className="des-star">
                  <Rating rating={5} style={{color: '#FFC000'}} />
                </div>
                <div className="clarifion des-star mt-10" style={{display: 'flex'}}>
                  <Image 
                    src={'./assets/images/Ellipse 95.png'} 
                    width={8.53} 
                    height={8.53} 
                    style={{ padding: '7px 7px'}} />
                  <h6>12 left in Stock</h6>
                </div>
                <h6 className="clarifion des-star mt-10">
                  <h6>
                    Simply plug a Clarifion into any standard outlet and replace bulky, 
                    expensive air purifiers with a simple.
                  </h6>
                </h6>
              </Col>
            </Row>
            <ListGroup>
              <ListGroup.Item className="list-item">
                <Image 
                  src={'./assets/images/tick-circle (1).png'} 
                  width={22} 
                  height={22} />
                &nbsp;Negative Ion Technology may 
                <span className="list-item-emphasiz">help with allergens</span>
              </ListGroup.Item>
              <ListGroup.Item className="list-item">
                <Image src={'./assets/images/tick-circle (1).png'} width={22} height={22} />
                &nbsp;Designed for <span className="list-item-emphasiz">air rejuvenation</span>       
              </ListGroup.Item>
              <ListGroup.Item className="list-item">
                <Image src={'./assets/images/tick-circle (1).png'} 
                  width={22} 
                  height={22} 
                />
                &nbsp;
                <span className="list-item-emphasiz">Perfect for every room</span>
                in all types of places.
              </ListGroup.Item>
            </ListGroup>
            <h6 className="percent-letter">
              <Image src={'./assets/images/Group 1000004656.png'} width={32} height={32} />
              &nbsp;&nbsp;Save 
              <span style={{color: '#2C7EF8'}}>53%</span> 
              and get 
              <span style={{color: '#2C7EF8'}}>64 extra Clarifision</span> 
              for only 
              <span style={{color: '#2C7EF8'}}>$14 Each</span>.
            </h6>
            <Button 
              className="mt-30" 
              variant="primary" 
              size="lg" 
              style={{
                backgroundColor: '#59AE43', 
                borderRadius: '50px', 
                borderStyle: 'none', 
                padding: '16px, 64px, 16px, 64px', 
                width: '100%', 
                height: '59px', 
                fontFamily: 'Manrope',
                fontWeight: '700',
                fontSize: '20px'
              }}>
              YES&nbsp;-&nbsp;CLAIM MY DISACCOUNT
            </Button>
          <ListGroup className="shipping mt-30" horizontal>
            <ListGroup.Item className="shipping-letter">
              Free shipping
            </ListGroup.Item>
            <ListGroup.Item className="shipping-letter">
              <Image src={'./assets/images/lock (7) 1.png'} width={12} height={12} />
              &nbsp;Secure 256-bit SSL encryption.
            </ListGroup.Item>
            <ListGroup.Item className="shipping-letter">
              <Image src={'./assets/images/visa.png'} width={24} height={12} />
              <Image src={'./assets/images/shop pay.png'} width={24} height={12} />
              <Image src={'./assets/images/paypal.png'} width={24} height={12} />
              <Image src={'./assets/images/Group 6.png'} width={24} height={12} />
              <Image src={'./assets/images/gpay.png'} width={24} height={12} />
              <Image src={'./assets/images/apple pay.png'} width={24} height={12} />
              <Image src={'./assets/images/amex.png'} width={24} height={12} />
            </ListGroup.Item>
          </ListGroup>
          <h4 className="warning-letter">no thanks, i don't know want this.</h4>
          <Row style={{marginBottom: '100px'}}>
            <Col sm={3} >
              <Image className="mt-30" src={'./assets/images/image 6.png'} width={88} height={88} />
            </Col>
            <Col sm={9}>
              <h6 
                className="certification-letter mt-30">
                  If you are not completely thrilled with your Clarifion - We have a 
                  <span style={{fontWeight: '700'}}>30 day satisfaction guarantee</span>. 
                  Please refer to our return policy at the bottom of the page for more details. Happy Shopping!
              </h6>
            </Col>
          </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Cart;
