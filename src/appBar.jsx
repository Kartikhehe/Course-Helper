import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";

export default function ButtonAppBar() {
  const token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="sticky"
        sx={{
          backgroundColor: "#212529", // dark like Bootstrap
          boxShadow: 2, // subtle shadow
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {/* Logo and Title */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <img
              src="https://ik.imagekit.io/zsoj3wjy2b/logo.png?updatedAt=1752110461602" // Replace with your actual logo path
              alt="Logo"
              width={60}
              height={60}
              style={{ borderRadius: "4px" }}
            />
            <Typography variant="h6" sx={{ fontWeight: 600 }}>
              Course Helper
            </Typography>
          </Box>

          {/* Auth Button */}
          <Box>
            {token ? (
              <Button
                color="inherit"
                onClick={handleLogout}
                sx={{ fontWeight: 500 }}
              >
                Logout
              </Button>
            ) : (
              <Button
                color="inherit"
                component={Link}
                to="/login"
                sx={{ fontWeight: 500 }}
              >
                Login
              </Button>
            )}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
