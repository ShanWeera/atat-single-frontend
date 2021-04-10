import React, {useEffect, useState} from "react";
import ApiEndpoints from "../../api/Endpoints";
import {useSelector} from "react-redux";
import AutoComplete from "@material-ui/lab/Autocomplete";
import {TextField} from "@material-ui/core";

export default function PositionDropdownDownload(props) {
    const [positionCount, setPositionCount] = useState(0)
    const jobid = useSelector((state) => state.jobID);

    useEffect(() => {
        if (jobid == null) {
            return
        }

        ApiEndpoints.positionCount(jobid).then((response) => {
            setPositionCount(response.data);
        }).catch((error) => {
            console.log(error);
        });
    }, [jobid]);

    return [
        <>
            <AutoComplete
                id="positions-dropdown"
                options={Array(positionCount).fill().map((_, i) => (i + 1).toString())}
                value={props.selectedPosition}
                blurOnSelect
                autoHighlight
                onChange={(event, newPosition) => {
                    props.setSelectedPosition(newPosition)
                }}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        variant="outlined"
                        label="Position"
                        margin="dense"
                    />
                )}
                getOptionLabel={(label) => label.toString()}
            />
        </>,
    ];
}