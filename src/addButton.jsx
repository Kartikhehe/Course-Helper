import * as React from 'react';
import { Button, Modal, Box, TextField, Grid } from '@mui/material';

const addButtonStyle = {
  borderRadius: '12px',
  fontSize: 18,
  position: 'fixed',
  bottom: '2rem',
  right: '2rem',
  padding: '0.75rem 1.5rem',
  background: 'linear-gradient(135deg, #28a745, #218838)',
  color: 'white',
  fontWeight: 'bold',
  boxShadow: '0 6px 12px rgba(0,0,0,0.2)',
  transition: 'transform 0.2s, box-shadow 0.2s',
  '&:hover': {
    transform: 'scale(1.05)',
    boxShadow: '0 8px 16px rgba(0,0,0,0.3)',
    background: 'linear-gradient(135deg, #218838, #1e7e34)',
  }
};

const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: '#fff',
  borderRadius: '16px',
  boxShadow: 24,
  width: '90%',
  maxWidth: 600,
  p: 4,
};

function AddButton({ onAdd }) {
  const [open, setOpen] = React.useState(false);
  const [courseName, setCourseName] = React.useState('');
  const [courseCode, setCourseCode] = React.useState('');
  const [credits, setCredits] = React.useState('');
  const [imageFile, setImageFile] = React.useState(null);
  const [description, setDescription] = React.useState('');

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setCourseName('');
    setCourseCode('');
    setCredits('');
    setImageFile(null);
    setDescription('');
  };

  const handleSubmit = async () => {
    if (!courseName || !courseCode || !credits || !imageFile || !description) {
      alert("Please fill in all fields before submitting.");
      return;
    }
  
    // Upload image
    let imageUrl = "";
    try {
      const formData = new FormData();
      formData.append("image", imageFile);
  
      const uploadRes = await fetch("https://course-helper-updated-backend.vercel.app/upload-image", {
        method: "POST",
        body: formData,
      });
  
      const uploadData = await uploadRes.json();
  
      if (!uploadRes.ok || !uploadData.imageUrl) {
        console.error("Image upload failed:", uploadData);
        alert(uploadData?.error || "Image upload failed.");
        return;
      }
  
      imageUrl = uploadData.imageUrl;
    } catch (err) {
      console.error("Image upload error:", err);
      alert("Image upload failed. Please try again.");
      return;
    }
  
    // Add course
    try {
      const newCourse = {
        name: courseName,
        code: courseCode.toUpperCase(),
        credit: credits,
        image: imageUrl,
        description,
      };
  
      console.log("Sending course data:", newCourse);
  
      const res = await fetch("https://course-helper-updated-backend.vercel.app/courses", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify(newCourse),
      });
  
      const text = await res.text();
      console.log("Raw backend response:", text);
  
      let data;
      try {
        data = JSON.parse(text);
      } catch (jsonErr) {
        console.error("Failed to parse JSON:", jsonErr);
        alert("Server returned invalid JSON.");
        return;
      }
  
      if (!res.ok) {
        console.log("Backend returned error status:", data);
        alert(data?.error || "Something went wrong while adding the course.");
        return;
      }
  
      console.log("✅ Course added successfully:", data);
      if (onAdd) onAdd(data);
      handleClose();
      window.location.reload();
  
    } catch (err) {
      console.error("🔥 UNEXPECTED error while adding course:", err);
      // Removed: alert("Failed to add the course. Please try again.");
    }
  };
  

  return (
    <>
      <Button sx={addButtonStyle} onClick={handleOpen}>
        ➕ Add Course
      </Button>

      <Modal open={open} onClose={handleClose}>
        <Box sx={modalStyle}>
          <h2 style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
            Course Details
          </h2>

          <TextField
            fullWidth
            required
            label="Course Name"
            variant="outlined"
            margin="normal"
            value={courseName}
            onChange={(e) => setCourseName(e.target.value)}
          />
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
                <TextField
                required
                fullWidth
                label="Course Code"
                variant="outlined"
                margin="normal"
                value={courseCode}
                onChange={(e) => setCourseCode(e.target.value)}
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                required
                fullWidth
                label="Credits"
                variant="outlined"
                margin="normal"
                value={credits}
                onChange={(e) => setCredits(e.target.value)}
                />
            </Grid>
        </Grid>
        <TextField
          fullWidth
          required
          type="file"
          InputLabelProps={{ shrink: true }}
          onChange={(e) => setImageFile(e.target.files[0])}
        />

          <TextField
            fullWidth
            multiline
            rows={4}
            label="Description"
            variant="outlined"
            margin="normal"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <Box sx={{ mt: 3, display: 'flex', justifyContent: 'center' }}>
            <Button
              variant="contained"
              size="medium"
              onClick={handleSubmit}
              sx={{
                px: 4,
                fontWeight: 'bold',
                background: 'linear-gradient(135deg, #28a745, #218838)',
                '&:hover': {
                  background: 'linear-gradient(135deg, #218838, #1e7e34)',
                },
              }}
            >
              Submit
            </Button>
          </Box>
        </Box>
      </Modal>
    </>
  );
}

export default AddButton;
