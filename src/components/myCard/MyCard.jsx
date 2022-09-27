import React from "react";
import Box from "@mui/material/Box";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Avatar } from "@mui/material";
import { deepPurple } from "@mui/material/colors";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import IconButton from "@mui/material/IconButton";
const MyCard = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <CardContent
        sx={{
          maxWidth: "200px",
          backgroundColor: "#BEBEBE",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Avatar sx={{ bgcolor: deepPurple[300], width: 96, height: 96 }}>
          OP
        </Avatar>
        <Typography variant="h5" component="div" sx={{ mt: 1.5 }}>
          `${window.localStorage.getItem('user')}`
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          CEO
        </Typography>
        <Typography variant="body2">Mango-Jerry developer</Typography>
        <CardActions>
          <IconButton
            href="https://www.facebook.com/"
            target="_blank"
            sx={{ "&:hover": { backgroundColor: "#9575CD" } }}
          >
            <LinkedInIcon />
          </IconButton>
          <IconButton
            href="https://www.facebook.com/"
            target="_blank"
            sx={{ "&:hover": { backgroundColor: "#9575CD" } }}
          >
            <ContactMailIcon />
          </IconButton>
        </CardActions>
      </CardContent>
    </Box>
  );
};
export default MyCard;