import * as React from 'react';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid2';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';

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




   
export default function ActionAreaCard(props) {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  return (

    

        <Grid size={4}>

          <Card sx={{ margin:5}}>
          <CardActionArea onClick={handleOpen}>
            <CardMedia
              component="img"
              height="140"
              image={props.ImageURL}
              alt={props.CourseName}
            />
            <CardContent>
              
              <p><strong>Course : </strong>{props.CourseName}</p>
              <p><strong>Course Code : </strong>{props.CourseCode}</p>
              <p><strong>Credits : </strong>{props.Credits}</p>
              <p><strong>Description : </strong>{props.Description}</p>
              
              
            </CardContent>
          </CardActionArea>
              <Button sx={{margin:1}}  size='small' variant="contained">Submit</Button>
              <Button size='small' variant='contained' color='error'>Delete</Button>
        </Card>

          {/* MODAL component */}

          <div>

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
                  defaultValue={props.CourseName}
                  
                />
                <TextField
                sx={{margin:2}}
                  required
                  id="outlined-required"
                  label="Course Code"
                  defaultValue={props.CourseCode}
                />
                <TextField
                  sx={{margin:2}}
                  required
                  id="outlined-required"
                  label="Credits"
                  defaultValue={props.Credits}
                />
                <TextField
                  sx={{margin:2}}
                  required
                  fullWidth
                  id="outlined-required"
                  label="Image URL"
                  defaultValue={props.ImageURL}
                />
                <TextField
                  sx={{margin:2}}
                  id="outlined-multiline-static"
                  label="Description"
                  rows={4}
                  multiline
                  fullWidth
                  defaultValue={props.Description}
                  variant='standard'
                  
                />
                <br />
                <Button sx={{margin:1}}  size='medium' variant="contained">Submit</Button>
                <Button size='medium' variant='contained' color='error'>Delete</Button>
        
              </Box>
            </Modal>

          </div>


        </Grid>
  



   
  );
}
