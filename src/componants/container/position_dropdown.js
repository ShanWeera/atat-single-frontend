import React, {useEffect, useState} from "react"
import ATAT from "../../api";
import {useSelector} from "react-redux";
import AutoComplete from "@material-ui/lab/Autocomplete"
import {TextField} from "@material-ui/core"

export default function PositionDropdown() {
    const [positionCount, setPositionCount] = useState(0)
    const [selectedPosition, setSelectedPosition] = useState('1')
    const jobid = useSelector(state => state.resultId)

    useEffect(() => {
        ATAT.positionCount(jobid).then((response) => {
            setPositionCount(response.data)
        }).catch((error) => {
            console.log(error)
        })
    }, [jobid])


    return [
        <>
            <AutoComplete
                id={"positions"}
                options={Array(positionCount).fill().map((_, i) => (i + 1).toString())}
                value={selectedPosition}
                blurOnSelect={true}
                autoHighlight={true}
                onChange={(event, newValue) => {
                    setSelectedPosition(newValue);
                }}
                renderInput={(params) => <TextField {...params} variant="outlined" margin={"normal"}/>}
                />
        </>
    ]
}
