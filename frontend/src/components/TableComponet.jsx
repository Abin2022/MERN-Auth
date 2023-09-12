import React,{useState}  from 'react';
import Table from "react-bootstrap/Table";
import Form from 'react-bootstrap/Form';
import { Button, Modal,  Form as BootstrapForm } from "react-bootstrap";
import { useDeleteUserMutation,useUpdateUserByAdminMutation } from "../slices/adminAdminApiSlice"
import { toast } from "react-toastify"

function TableComponent({ users }) {
       //to handle search
      const [searchQuery, setSearchQuery] = useState('');

      //delete things
      const [deleteConfirmation,setDeleteConfirmation ]=useState(false)
      const [userIdToDelete, setUserIdToDelete] = useState(null); // Track the user ID to delete

    

      //to handle search
      const handleSearch = (event) => {
        setSearchQuery(event.target.value);
      };
      
      //to handle search
      const filteredUsers = users.filter((user) =>
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase()) 
    );
   

    //delete things
    const [deleteUser, { isLoading }] = useDeleteUserMutation();  
    

    const handleDelete = async () =>{
        try{
            const responseFromApiCall = await deleteUser( {userId : userIdToDelete});
            toast.success("User Deleted Successfully");
            setUserIdToDelete(null)
            setDeleteConfirmation(false)
            window.location.reload();
        }catch(err){
          toast.error(err?.data?.message || err?.error)
        }
    }
   //update
   const [updateUserByAdmin, { isLoading: isUpdating }] = useUpdateUserByAdminMutation();

   const [userIdToUpdate, setUserIdToUpdate] = useState("");
    const [updateUserName, setUpdateUserName]=useState("");
    const [updateUserEmail, setUpdateUserEmail] = useState("");
   const [ showUpdateModal, setShowUpdateModal ] = useState(false);

   const handleOpenUpdateModal = (user) => {
    setUserIdToUpdate(user._id)
    setUpdateUserName(user.name);
    setUpdateUserEmail(user.email);
    setShowUpdateModal(true);
  };

  const handleUpdate = async () => {
    try {
      const responseFromApiCall = await updateUserByAdmin({
        userId: userIdToUpdate,
        name: updateUserName,
        email: updateUserEmail
      });
      toast.success("User Updated Successfully.");
      setUserIdToUpdate(null); // Clear the user ID to update
      setShowUpdateModal(false); // Close the update modal

      // Reload the page to reflect the updated data
      window.location.reload();
      
    } catch (err) {
      toast.error(err?.data?.message || err?.error);
    }
  };


  return (
    <>
    <Form>
    <Form.Group className="mt-3" controlId="exampleForm.ControlInput1">
   
      <Form.Control style={{width:"500px"}} value={searchQuery} type="text" placeholder="Search" onChange={handleSearch} />
    </Form.Group>
  </Form>
  <br/>
  <Table striped bordered hover responsive>
    <thead>
      <tr>
        <th>SL NO</th>
        <th>NAME</th>
        <th>EMAIL</th>
        <th>ACTION</th>
        <th>ACTION</th>
      </tr>
    </thead>
    <tbody>
      {filteredUsers.map((user, index) => (
        <tr key={index}>
          <td>{index + 1}</td>
          <td>{user.name}</td>
          <td>{user.email}</td>
          <td>  <Button
                type="button"
                variant="primary"
                className="mt-3"
                onClick={() => handleOpenUpdateModal(user)}

              >
                Update
              </Button></td>
          <td><Button
                type="button"
                variant="danger"
                className="mt-3"
                onClick={() => {
                    setUserIdToDelete(user._id); // Set the user ID to delete
                    setDeleteConfirmation(true); // Open the confirmation dialog
                  }}
               
              >
                Delete
              </Button></td>
        </tr>
      ))}
    </tbody>
  </Table>
 

   {/* update user model */}
   <Modal show={showUpdateModal} onHide={()=>setShowUpdateModal(false)}>
   <Modal.Header closeButton>
          <Modal.Title>Update User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <BootstrapForm>
            <BootstrapForm.Group controlId="name">
              <BootstrapForm.Label>Name</BootstrapForm.Label>
              <BootstrapForm.Control
                type="text"
                value={updateUserName}
                onChange={(e) =>
                    setUpdateUserName(e.target.value)
                }
              />
            </BootstrapForm.Group>
            <BootstrapForm.Group controlId="email">
              <BootstrapForm.Label>Email</BootstrapForm.Label>
              <BootstrapForm.Control
                type="email"
                value={updateUserEmail}
                onChange={(e) =>
                    setUpdateUserEmail(e.target.value)
                }
              />
            </BootstrapForm.Group>
          </BootstrapForm>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowUpdateModal(false)}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleUpdate} disabled={isUpdating}>
            {isUpdating ? "Updating..." : "Update"}
          </Button>
        </Modal.Footer>

   </Modal>
      
   

    {/* Confirmation Dialog */}
    <Modal show={deleteConfirmation} onHide={() => setDeleteConfirmation(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Deletion</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this user?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setDeleteConfirmation(false)}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handleDelete} disabled={isLoading}>
            {isLoading ? "Deleting..." : "Delete"}
          </Button>
        </Modal.Footer>
      </Modal>


  </>
  );
}

export default TableComponent;
