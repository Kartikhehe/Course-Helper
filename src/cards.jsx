import * as React from 'react';
import { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActionArea from '@mui/material/CardActionArea';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid2';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
// import Rating from '@mui/material/Rating';
// import Typography from '@mui/material/Typography';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  border: '2px solid #ccc',
  boxShadow: 24,
  borderRadius: '15px',
  p: 4,
  width: '90%',
  maxWidth: 600,
};

export default function ActionAreaCard({ id, CourseName, CourseCode, Credits, Description, ImageURL, handleDelete, handleUpdate, fetchCourses }) {
  const [open, setOpen] = useState(false);
  const [updatedCourse, setUpdatedCourse] = useState({
    name: CourseName,
    code: CourseCode.toUpperCase(),
    credit: Credits,
    image: ImageURL,
    description: Description,
  });
  // const [averageRating, setAverageRating] = useState(0);
  // const [userRating, setUserRating] = useState(null);
  const [newImageFile, setNewImageFile] = useState(null);

  const token = localStorage.getItem("token");

  // const fetchRatings = async () => {
  //   try {
  //     const res = await fetch(`https://course-helper-updated-backend.vercel.app/ratings/${id}`, {
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //       },
  //     });
  //     const data = await res.json();
  //     console.log("Rating response:", data);
  //     setAverageRating(data.avg_rating || 0);
  //     setUserRating(data.user_rating || null);
  //   } catch (err) {
  //     console.error("Failed to fetch ratings", err);
  //   }
  // };

  // useEffect(() => {
  //   if (open) fetchRatings();
  // }, [open]);

  // const handleRatingChange = async (value) => {
  //   try {
  //     const res = await fetch(`https://course-helper-updated-backend.vercel.app/ratings`, {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //         Authorization: `Bearer ${token}`,
  //       },
  //       body: JSON.stringify({ course_id: id, rating: value }),
  //     });
  //     const data = await res.json();
  //     setUserRating(value);
  //     fetchRatings(); // Refresh average
  //   } catch (err) {
  //     console.error("Rating failed", err);
  //   }
  // };

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSubmit = async () => {
    try {
      let imageUrl = updatedCourse.image;
  
      if (newImageFile) {
        const formData = new FormData();
        formData.append("image", newImageFile);
  
        const uploadRes = await fetch("https://course-helper-updated-backend.vercel.app/upload-image", {
          method: "POST",
          body: formData,
        });
  
        if (!uploadRes.ok) {
          throw new Error("Image upload failed");
        }
  
        const uploadData = await uploadRes.json();
        imageUrl = uploadData.imageUrl;
      }
  
      const courseToSend = {
        ...updatedCourse,
        image: imageUrl,
      };
  
      const courseRes = await fetch(`https://course-helper-updated-backend.vercel.app/courses/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(courseToSend),
      });
  
      const text = await courseRes.text();
      let data;
      try {
        data = JSON.parse(text);
      } catch (jsonErr) {
        console.error("Invalid JSON from server:", jsonErr);
        alert("Invalid response from server.");
        return;
      }
  
      // ✅ Place this block here — immediately after parsing JSON
      if (!courseRes.ok) {
        console.error("Response not ok:", courseRes.status, text);
        alert(data?.error || "Failed to update course.");
        return;
      }
  
      // ✅ Proceed if everything is good
      handleUpdate(id, data);
      fetchCourses();
      handleClose();
  
    } catch (err) {
      console.error("Error in handleSubmit:", err);
      alert("An unexpected error occurred while updating. Please try again.");
    }
  };
  
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card
        sx={{
          m: 2,
          borderRadius: '1rem',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
          transition: 'transform 0.2s, box-shadow 0.2s',
          '&:hover': {
            transform: 'scale(1.02)',
            boxShadow: '0 6px 16px rgba(0, 0, 0, 0.2)',
          },
        }}
      >
        <CardActionArea onClick={handleOpen}>
          <CardMedia component="img" height="140" image={ImageURL} alt={CourseName} />
          <CardContent sx={{ p: 2 }}>
            <p><strong>Course : </strong>{CourseName}</p>
            <p><strong>Course Code : </strong>{CourseCode}</p>
            <p><strong>Credits : </strong>{Credits}</p>
            <p><strong>Description : </strong>{Description}</p>

            {/* <Box display="flex" alignItems="center">
              <Rating value={averageRating} readOnly precision={0.5} />
              <Typography variant="body2" sx={{ ml: 1 }}>
                ({averageRating.toFixed(1)})
              </Typography>
            </Box> */}

          </CardContent>
        </CardActionArea>
        <Button sx={{ margin: 1 }} size='small' variant='contained' color='error' onClick={() => handleDelete(id)}>Delete</Button>
      </Card>

      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <h2 style={{ textAlign: 'center', marginBottom: '1.5rem' }}>Edit Course Details</h2>

          <Box component="form" noValidate autoComplete="off">
            <TextField fullWidth required label="Course Name" variant="outlined" margin="normal" value={updatedCourse.name} onChange={(e) => setUpdatedCourse({ ...updatedCourse, name: e.target.value })} />
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField required fullWidth label="Course Code" variant="outlined" margin="normal" value={updatedCourse.code} onChange={(e) => setUpdatedCourse({ ...updatedCourse, code: e.target.value })} />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField required fullWidth label="Credits" variant="outlined" margin="normal" value={updatedCourse.credit} onChange={(e) => setUpdatedCourse({ ...updatedCourse, credit: e.target.value })} />
              </Grid>
            </Grid>
            <Button
              variant="outlined"
              component="label"
              fullWidth
              sx={{ mt: 2, mb: 2 }}
            >
              Upload New Image
              <input
                type="file"
                accept="image/*"
                hidden
                onChange={(e) => setNewImageFile(e.target.files[0])}
              />
            </Button>

            {newImageFile ? (
              <p>Selected: {newImageFile.name}</p>
            ) : (
              <TextField
                fullWidth
                label="Image URL (unchanged)"
                variant="outlined"
                margin="normal"
                value={updatedCourse.image}
                disabled
              />
            )}

            <TextField fullWidth multiline rows={4} label="Description" variant="outlined" margin="normal" value={updatedCourse.description} onChange={(e) => setUpdatedCourse({ ...updatedCourse, description: e.target.value })} />

            {/* <Box sx={{ mt: 3 }}>
              <Typography variant="subtitle1">Your Rating:</Typography>
              <Rating
                name="user-rating"
                value={userRating || 0}
                onChange={(e, newValue) => setUserRating(newValue)}
              />
              {userRating && <Typography variant="caption">You rated this course {userRating} stars</Typography>}
            </Box> */}
          </Box>

          <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 3, gap: 2 }}>
            <Button variant="contained" color="success" fullWidth onClick={handleSubmit} sx={{ background: 'linear-gradient(135deg, #28a745, #218838)', fontWeight: 'bold', '&:hover': { background: 'linear-gradient(135deg, #218838, #1e7e34)' } }}>Submit</Button>
            <Button variant="contained" color="error" fullWidth onClick={() => handleDelete(id)} sx={{ fontWeight: 'bold', backgroundColor: '#dc3545', '&:hover': { backgroundColor: '#c82333' } }}>Delete</Button>
          </Box>
        </Box>
      </Modal>
    </Grid>
  );
}
