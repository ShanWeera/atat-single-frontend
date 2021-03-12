import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Grid, Card, CardContent, CardActions } from "@material-ui/core"
import ATAT from "../../../api";

export default function VariantAnalysis(props) {
    const [variants, setVariants] = useState({})
    const [selectedVariant, setSelectedVariant] = useState({})
    const [context, setContext] = useState(null)
    const jobid = useSelector(state => state.resultId)
    const selected_position = useSelector(state => state.position)

    useEffect(() => {
        let client
        setContext(props.context)

        if (context === 'source') {
            client = ATAT.sourcePosition
        } else {
            client = ATAT.reservoirPosition
        }

        client(jobid, selected_position).then((response) => {
            setVariants(response.data.variants)
        }).catch((error) => {
            console.log(error)
        })
    }, [context, jobid, props.context, selected_position])

    return [
        <Grid container spacing={2} direction={'column'}>
            <Grid item lg={6} sm={12} xs={12}>
                
            </Grid>
        </Grid>
    ]
}