import * as React from 'react';

import { Button, Modal, Box, TextField } from '@mui/material';

const addButtonStyle = {
    borderRadius:100, 
    fontSize:22,
    position: "fixed",
    bottom: "7%",
    right: "5%",
    padding: 2
    
  }

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    borderRadius: "15px",
    p: 4,
  };
  
  

function AddButton() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <div>
        <Button sx={addButtonStyle} onClick={handleOpen}  variant="contained">+ Add Course</Button>
        <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <h1 className='centerAlign'>Course Details</h1>
                <TextField
                  sx={{margin:2}}
                  required
                  fullWidth
                  id="outlined-required"
                  label="Course Name"
                  
                  
                />
                <TextField
                sx={{margin:2}}
                  required
                  id="outlined-required"
                  label="Course Code"
                  
                />
                <TextField
                  sx={{margin:2}}
                  required
                  id="outlined-required"
                  label="Credits"
                  
                />
                <TextField
                  sx={{margin:2}}
                  required
                  fullWidth
                  id="outlined-required"
                  label="Image URL"
                  
                />
                <TextField
                  sx={{margin:2}}
                  id="outlined-multiline-static"
                  label="Description"
                  rows={4}
                  multiline
                  fullWidth
                  
                  variant='standard'
                  
                />
                <br />
                <Button sx={{margin:1}}  size='medium' variant="contained">Submit</Button>
                <Button size='medium' variant='contained' color='error'>Delete</Button>
        
              </Box>
            </Modal>
            </div>
    )
}

export default AddButton;
