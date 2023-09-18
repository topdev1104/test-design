import {
    Badge,
    Button,
    Container,
    Dropdown,
    FormControl,
    Nav,
    Navbar,
    Image,
  } from "react-bootstrap";
  import { AiFillDelete } from "react-icons/ai";
  import { FaShoppingCart } from "react-icons/fa";
  import { Link } from "react-router-dom";
  import { CartState } from "../context/Context";
  
  const Header = () => {
    const {
      state: { cart },
      dispatch,
      productDispatch,
    } = CartState();
  
    const headerLinks = [
      "30-DAY SATISFACTION GUARANTEE",
      "Free delivery on orders over $40.00",
      "50.000+ HAPPY CUSTOMERS",
      "100% Money Back Guarantee"
    ];
  
    return (
      <>
        <Navbar style={{ height: 88, backgroundColor: '#252F3D' }}>
          <Container>
              <Navbar.Brand>
                <Link to="/"
                    style={{
                    fontSize: '12px',
                    fontFamily: 'Manrope',
                    fontWeight: '500',
                    lineHeight: '12px',
                    color: 'white'
                    }}
                >
                    {"Copyright (c) 2023 | Clarifionsupport@clarifion.com"}
                </Link>
            </Navbar.Brand>
            <Navbar.Brand>
                <Link to="/"
                    style={{
                    fontSize: '12px',
                    fontFamily: 'Manrope',
                    fontWeight: '500',
                    lineHeight: '12px',
                    color: 'white'
                    }}
                >
                    {"Secure 256-bit SSL encryption."}
                </Link>
            </Navbar.Brand>
          </Container>
        </Navbar>
      </>
    );
  };
  
  export default Header;
  