import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Modal, CircularProgress} from '@material-ui/core/';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import pink from '@material-ui/core/colors/pink';
import purple from '@material-ui/core/colors/purple';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';


const theme = createTheme({
  palette: {
    primary: pink,
    secondary: purple,
  },
});

const useStyles = makeStyles((theme) => ({

  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(4, 12, 6),
    borderRadius: 16,
    textAlign: 'center',


  },

  btn: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: theme.spacing(4, 0,0),
  },

  circular: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: theme.spacing(4, 0,0),
  },


}));
const LoadingSection = ({ 
  loadState,
  handleloadOpen,
  handleClose,
  loadMessage,
  loadHeader,
  loadButtonText,
  loadButtonLink,
 })=>{
  const classes = useStyles();
  const redirectLink = () =>{
    console.log('loadButtonLink',loadButtonLink)
    window.location.href =loadButtonLink ;
  }

  return (
    <div>
      <ThemeProvider theme={theme}>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={loadState}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
        
      >
        <Fade in={loadState}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title">{loadHeader}</h2>
            <p id="transition-modal-description" >{loadMessage}</p>
            <div className={classes.circular}> 
          <CircularProgress color="secondary" size={100} thickness={10}/>

        </div>
        <div  className ={classes.btn}>

        {loadButtonText === '' ?  <div></div> :  <button onClick={redirectLink} className="btn btn-lg btn-block ">{loadButtonText}</button>}  

        </div>

          </div>
        </Fade>



      </Modal>
      
      </ThemeProvider>

    </div>
  );
}

export default LoadingSection;