import "./MyInput.css";
import Input from "@mui/material/Input";
import { styled } from "@mui/material/styles";

const MyInput = styled((props) => <Input disableUnderline={true} {...props}/>)(({ theme }) => (
  {
    backgroundColor: theme.palette.secondary.light,
    color: theme.palette.primary.dark,
    borderColor: theme.palette.secondary.light,
    borderRadius: "10px",
    height: "45px",
    marginBottom: 10,
    padding: 10,
  }
));

export default MyInput;
