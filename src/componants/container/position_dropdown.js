import React, {useEffect, useState} from "react"
import ATAT from "../../api";
import {useSelector} from "react-redux";
import AutoComplete from "@material-ui/lab/Autocomplete"
import {TextField} from "@material-ui/core"
import { useDispatch } from "react-redux";

export default function PositionDropdown() {
    const [positionCount, setPositionCount] = useState(0)
    const jobid = useSelector(state => state.resultId)
    const selected_position = useSelector(state => state.position)
    const dispatch = useDispatch()

    useEffect(() => {
        ATAT.positionCount(jobid).then((response) => {
            setPositionCount(response.data)
        }).catch((error) => {
            console.log(error)
        })
    }, [jobid, selected_position])


    return [
        <>
            <AutoComplete
                id={"positions"}
                options={Array(positionCount).fill().map((_, i) => (i + 1).toString())}
                value={selected_position}
                blurOnSelect={true}
                autoHighlight={true}
                onChange={(event, newPosition) => {
                    dispatch({type: 'POSITION_CHANGE', position: newPosition}, []);
                }}
                renderInput={(params) => <TextField {...params} variant="outlined" margin={"normal"}/>}
                getOptionLabel={(label) => label.toString()}
                />
        </>
    ]
}
