import './MyButton.css';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

const MyButton = styled(Button)(({theme})=>({
  color: theme.palette.primary.dark,
  backgroundColor: theme.palette.secondary.light,
  borderColor: theme.palette.secondary.dark,
  borderRadius: '10px',
  height: '45px',
  marginBottom: 10,
  boxShadow: 'none',
  fontSize: 20,
  fontWeight: '600',
 
  '&:hover': {
    backgroundColor: theme.palette.secondary.light,
    borderColor: theme.palette.secondary.dark,
    boxShadow: 'none',
  },

}))
export default MyButton; 
