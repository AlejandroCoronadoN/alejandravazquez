import React from "react";
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import {
    ContactMail,
    Info,
    Assignment,
    School,
    LocalLibrary,
    AccountCircle,
    Favorite
} from '@material-ui/icons';

const style = makeStyles(theme => ({
    root: {
        backgroundColor: '#ccc',
        zIndex: 1,
        color: '#fff',
        width: 50,
        height: 50,
        display: 'flex',
        borderRadius: '50%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    active: {
        background:  "#9278F9",
        boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
    },
    completed: {
        background: "#ffab9e"
    },
}));

const StepperPhotoIcons = props => {
    const classes = style();
    const { active, completed } = props;

    const icons = {
        1: <Info />,
        2: <ContactMail />,
        3: <AccountCircle />,
        4: <Assignment />,
        5: <Assignment />,
        6: <Assignment />,
        7: <Info />,
    };

    return (
        <div
            className={clsx(classes.root, {
                [classes.active]: active,
                [classes.completed]: completed,
            })}
        >
            {icons[String(props.icon)]}
        </div>
    );
}

StepperPhotoIcons.propTypes = {
    active: PropTypes.bool,
    completed: PropTypes.bool,
};

export default StepperPhotoIcons;