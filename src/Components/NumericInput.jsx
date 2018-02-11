import React, {Fragment} from 'react';

const NumericInput = ({onChange}) => {
        return (
            <Fragment>
                <input type="number" onChange={(event) => onChange(event)} placeholder="Type in a number"/>
            </Fragment>
        );
    }

export default NumericInput;