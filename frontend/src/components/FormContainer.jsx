import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const FormContainer = ({ children }) => {
  return (
    <Container>
      {" "}
      <Row className="justify-content-md-center mt-5">
        <Col xs={12} md={6} className="card p-5">
          {children}
        </Col>
      </Row>
    </Container>
  );
};

export default FormContainer;


// import React from "react";
// import { Container, Row, Col } from "react-bootstrap";
// import { useUpdateUserMutation } from "../slices/userApiSlice";
// //new
// import { useSelector} from 'react-redux';
// // import { PROFILE_IMAGE_DIR_PATH } from "../utils/constants";

// // export const USER_PROFILE_URL = '/api/users/profile'


// const FormContainer = ({ children }) => {
//   const { userInfo } = useSelector((state) => state.auth);

//   return (
//     <Container>
//       <Row className="justify-content-md-center mt-5">
//         <Col xs={12} md={6} className="card p-5">
//           {/* Add the code here */}
          
//           {userInfo.profileImage && (
//             <img
//               src={useUpdateUserMutation + userInfo.profile}
//               alt={userInfo.name}
//               style={{
//                 width: "150px",
//                 height: "150px",
//                 borderRadius: "50%",
//                 objectFit: "cover",
//                 display: "block",
//                 marginTop: "5px",
//                 marginLeft: "115px",
//                 marginBottom: "10px",
//               }}
//             />
//           )}

//           <h3
//             style={{
//               display: "block",
//               marginTop: "5px",
//               marginLeft: "100px",
//               marginBottom: "5px",
//             }}
//           >
//             Update Profile
//           </h3>

//           {/* End of added code */}
//           {children}
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default FormContainer;
