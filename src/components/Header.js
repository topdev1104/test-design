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
    {url: './assets/images/fluent_checkmark-starburst-20-regular.png',title: "30-DAY SATISFACTION GUARANTEE"},
    {url: './assets/images/ph_truck-light.png', title: "Free delivery on orders over $40.00"},
    {url: './assets/images/mdi_cards-heart-outline.png', title: "50.000+ HAPPY CUSTOMERS"},
    {url: './assets/images/fluent_arrow-sync-checkmark-20-regular.png', title: "100% Money Back Guarantee"}
  ];

  return (
    <>
      <Navbar style={{ height: 50, backgroundColor: '#252F3D' }}>
        {/* <Container>
          {headerLinks.map((link, index) => (
            <Navbar.Brand key={index} className="thing-header">
              <Link to="/"
                style={{
                  fontSize: '12px',
                  fontFamily: 'Manrope',
                  fontWeight: '500',
                  lineHeight: '12px',
                  color: 'white'
                }}
              >
                <Image src={link.url} width={22} height={22} />
                &nbsp;&nbsp;
                {(link.title).toUpperCase()}
              </Link>
            </Navbar.Brand>
          ))}
        </Container> */}
      </Navbar>
      <Navbar style={{ height: 96, backgroundColor: '#FFFFFF' }}>
        <Container>
          <Navbar.Brand>
            <Image src="./assets/images/logo.png" width={192} height={36} />
          </Navbar.Brand>
          <Navbar.Brand>
            <Image src="./assets/images/Frame 1484578055.png" width={88} height={32} />
            <Image src="./assets/images/norton-antivirus-logo 1.png" width={82} height={32} style={{marginLeft: '10px'}} />
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
