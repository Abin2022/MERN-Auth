import { Container, Card, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const AdminHero = () => {
  return (
    <div className=" py-5">
      <Container className="d-flex justify-content-center">
        <Card className="p-5 d-flex flex-column align-items-center hero-card bg-light w-75">
          <h1 className="text-center mb-4">MERN Authentication</h1>
          <p className="text-center mb-4">
            MERN authentication App with JWT authentication and authorization
            and Redux Toolkit on Admin side 
          </p>
          <div className="d-flex">
            <LinkContainer to="/adminlogin">
              <Button variant="dark" className="me-3">
                Sign In
              </Button>
            </LinkContainer>
           
          </div>
        </Card>
      </Container>
    </div>
  );
};

export default AdminHero;
