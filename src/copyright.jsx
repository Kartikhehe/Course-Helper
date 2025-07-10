import React from "react";
import { Typography, Box } from "@mui/material";
import { styled } from "@mui/system";

const CopyrightWrapper = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
  backgroundColor: "#f8f9fa",
  marginTop: "auto",
  width: "100%",


  backgroundImage: "radial-gradient(#d3d3d3 2px, transparent 0)",
  backgroundSize: "18px 18px",

  bottom: 0,
  left: 0,
}));

const Copyright = () => {
  const currentYear = new Date().getFullYear();

  return (
    <CopyrightWrapper>
      <Typography
        variant="body2"
        color="text.secondary"
        align="center"
        component="div"
        sx={{
          fontSize: { xs: "0.875rem", sm: "1rem" },
          fontWeight: 400,
          lineHeight: 1.5,
          letterSpacing: "0.00938em",
        }}
      >
        © {currentYear} Kartik Raj. All rights reserved.
      </Typography>
    </CopyrightWrapper>
  );
};

export default Copyright;
