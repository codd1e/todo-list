import React from 'react';
import {BsCheck} from "react-icons/bs";
import classes from './Check.module.css'

const Check = ({isComplited}) => {
    return (
        <div className={classes.check}>
            {isComplited && <BsCheck />}
        </div>
    );
};

export default Check;