import {Container,Navbar, Nav} from "react-bootstrap";
import {Link} from "react-router-dom";

interface Props {
    children : JSX.Element
}

export const Layout:React.FC<Props> = ({children}) => {
    return (
        <Container>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">Project</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link>
                        <Link to="/login">Login</Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link to="/register">Register</Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link to="/dashboard">Dashboard</Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link to="/profile">Profile</Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link to="/students">Student List</Link>
                    </Nav.Link>
                    <Nav.Link>
                        <a onClick={(e) => {
                            e.preventDefault();
                            localStorage.clear();
                        }}>Logout</a>
                    </Nav.Link>
                </Nav>
            </Navbar>
            <br/>
            {children}
        </Container>
    )
}