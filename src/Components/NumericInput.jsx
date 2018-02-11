import React, {Fragment} from 'react';

const NumericInput = ({onChange}) => {
        return (
            <Fragment>
                <input type="number" onChange={(event) => onChange(event)} placeholder="Type in a number" className="u-margin-bottom-2x"/>
            </Fragment>
        );
    }

export default NumericInput;