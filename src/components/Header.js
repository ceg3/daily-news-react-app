import { Nav, Navbar } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const Header = () => {
    return (
        <div className="container">
            <Navbar className="yellotail">
            <LinkContainer to="/">
                <h1 className="head-title">The Daily News</h1>
            </LinkContainer>
            </Navbar>
            <Nav>
            <Nav.Item>
                <LinkContainer to="/">
                <Nav.Link>Home</Nav.Link>
                </LinkContainer>
            </Nav.Item>
            <Nav.Item>
                <LinkContainer to="/contact">
                <Nav.Link>Contact</Nav.Link>
                </LinkContainer>
            </Nav.Item>
            </Nav>
        </div>
    );
};

export default Header;
