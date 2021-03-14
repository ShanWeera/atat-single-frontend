import React from "react";
import { Checkbox, Radio } from "@material-ui/core";

const VariantsConfigCheckbox = (props) => {
    let newProps = Object.assign({}, props);
    newProps.color = props['data-description'] === 'row-select' ? 'secondary' : 'primary';

    if (props['data-description'] === 'row-select') {
        return (<Radio {...newProps} />);
    } else {
        return (<Checkbox {...newProps} />);
    }
};

export default VariantsConfigCheckbox
