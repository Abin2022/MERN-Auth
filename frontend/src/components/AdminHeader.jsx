import { Navbar, Nav, Container,NavDropdown,Badge } from 'react-bootstrap';
import { FaSignInAlt, FaSignOutAlt } from 'react-icons/fa';
import { useSelector,useDispatch } from 'react-redux';
import { LinkContainer } from 'react-router-bootstrap';
import { useAdminLogoutMutation } from '../slices/adminAdminApiSlice';
import { adminLogout } from '../slices/adminAuthSlice'
import { useNavigate } from 'react-router-dom';
 
const AdminHeader = () => {

  const { adminInfo } = useSelector((state)=>state.adminAuth)

  const dispath = useDispatch()
  const navigate = useNavigate()

  const [logoutApi]= useAdminLogoutMutation()
    
  const logoutHandler =async()=>{
    try {
       await logoutApi().unwrap()
       dispath(adminLogout())
       navigate('/adminlogin')
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <header>
    <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
        <Container>
            <LinkContainer to='/admin'>
            <Navbar.Brand>Admin Authentication</Navbar.Brand>
            </LinkContainer>
            
            <Navbar.Toggle aria-controls='basic-navbar-nav'/>
            <Navbar.Collapse id='basic-navbar-nav'>
                <Nav className='ms-auto'>
                    {adminInfo ? (
                        <>
                        <NavDropdown title={adminInfo.name} id = 'username'>
                            <LinkContainer to = '/admin/usersList'>
                                <NavDropdown.Item>
                                User List
                                </NavDropdown.Item>
                            </LinkContainer>
                           
                            <LinkContainer to = '/admin/logout'>
                                <NavDropdown.Item onClick={logoutHandler}>
                                    Logout
                                </NavDropdown.Item>
                            </LinkContainer>
                        </NavDropdown>
                        </>
                    )  : (
                <>
                 <LinkContainer to='/adminlogin'>
                            <Nav.Link >
                                <FaSignInAlt/>Sign In
                            </Nav.Link>
                            </LinkContainer>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default AdminHeader;