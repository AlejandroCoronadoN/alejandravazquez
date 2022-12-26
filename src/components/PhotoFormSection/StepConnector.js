import { withStyles, StepConnector } from "@material-ui/core";

// STYLE THE STEPPER CONNECTOR
const Connector = withStyles(theme => ({
    alternativeLabel: {
        top: 22,
    },

active: {
    '& $line': {
        background: "#9278F9"
    },
},
completed: {
    '& $line': {
        background: "#ffab9e"
    },
},

    line: {
        height: 3,
        border: 0,
        backgroundColor: '#eaeaf0',
        borderRadius: 1,
    },
    
}))(StepConnector);

export default Connector;

