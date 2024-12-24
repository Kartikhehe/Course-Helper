import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import Bar from "./appBar.jsx";
import Card from "./cards.jsx";
import Courses from "./courses";
import Grid from "@mui/material/Grid2";
import Box from "@mui/material/Box";
import LoginPage from "./LoginPage/login.jsx";
import AddButton from "./addButton.jsx";

// Function to render cards for courses
function createCard(course) {
  return (
    <Card
      key={course.id}
      CourseName={course.CourseName}
      CourseCode={course.CourseCode}
      Credits={course.Credits}
      Description={course.Description}
      ImageURL={course.ImageURL}
    />
  );
}

// Homepage component
function Homepage() {
  return (
    <>
      <Bar />
      <Box sx={{ flexGrow: 1, padding: "16px" }}>
        <Grid container spacing={2}>
          {Courses.map(createCard)}
        </Grid>
      </Box>
      <AddButton /> {/* AddButton is rendered only on the Homepage */}
    </>
  );
}

// Render the application
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<Homepage />} />
      </Routes>
    </Router>
  </StrictMode>
);
