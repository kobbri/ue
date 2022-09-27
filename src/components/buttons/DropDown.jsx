import React from "react";
import { styled, alpha } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import PostAddIcon from "@mui/icons-material/PostAdd";
import MyInput from "../../components/buttons/MyInput";
import { useState, useEffect } from "react";
import axios from "axios";
import { baseUrl } from "../../utils/Constants";
import { Setter } from "../../utils/Setter";
import { Box } from "@mui/system";

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === "light"
        ? "rgb(55, 65, 81)"
        : theme.palette.grey[300],
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
    },
  },
}));

function DropDown() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const [title, setTitle] = useState(window.localStorage.getItem("title"));
  const [subTitle, setSubTitle] = useState(
    window.localStorage.getItem("subTitle")
  );
  const [photo, setPhoto] = useState(window.localStorage.getItem("photo"));
  const [description, setDescription] = useState(
    window.localStorage.getItem("description")
  );
  const [accessToken, setAccessToken] = useState("");

  const onAddPosts = () => {
    axios
      .post(
        `${baseUrl}/admins/add-member`,
        {
          title: title,
          subTitle: subTitle,
          description: description,
          photo: photo,
        },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      )
      .then((response) => {
        console.log("response ", response.data);
        window.localStorage.setItem("token", response.data.accessToken);
        // window.location.pathname = "/home";
      })
      .catch((error) => {
        console.log("error: ", error);
      })
      .finally(() => {
        setAnchorEl(null);
      });
  };
  useEffect(() => {
    setAccessToken(window.localStorage.getItem("token"));
    // eslint-disable-next-line
  }, [accessToken]);
  return (
    <div sx={{ maxWidth: "100px" }}>
      <Button
        id="dropdown-button"
        aria-controls={open ? "demo-customized-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        variant="contained"
        // disableElevation
        onClick={handleClick}
        endIcon={<KeyboardArrowDownIcon />}
      >
        Add a post
      </Button>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          flexWrap: "wrap",
          gap: "10px",
          my: 5,
        }}
      >
        <StyledMenu
          id="demo-customized-menu"
          MenuListProps={{
            "aria-labelledby": "demo-customized-button",
          }}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
        >
          <label htmlFor="Title">Title</label>
          <br />
          <MyInput
            type="text"
            id="title"
            name="title"
            placeholder="Title"
            onChange={(et) => Setter(et, setTitle, "title")}
            value={title?.length > 0 ? title : ""}
          />
          <br />
          <label htmlFor="Subtitle">Subtitle</label>
          <br />
          <MyInput
            type="text"
            id="subtitle"
            name="subtitle"
            placeholder="Subtitle"
            onChange={(est) => Setter(est, setSubTitle, "subTitle")}
            value={subTitle?.length > 0 ? subTitle : ""}
          />
          <br />
          <label htmlFor="Description">Description</label>
          <br />
          <MyInput
            type="text"
            id="description"
            name="description"
            placeholder="Description"
            onChange={(ed) => Setter(ed, setDescription, "description")}
            value={description?.length > 0 ? description : ""}
          />
          <br />
          <label htmlFor="Photo">Photo</label>
          <br />
          <MyInput
            type="text"
            id="photo"
            name="photo"
            placeholder="Add a photo base64"

            onChange={(ef) => Setter(ef, setPhoto, "photo")}
            value={photo?.length > 0 ? photo : ""}
          />
          <br />
          <Button onClick={onAddPosts} disableRipple>
            <PostAddIcon />
            Post
          </Button>
        </StyledMenu>
      </Box>
    </div>
  );
}

export default DropDown;
