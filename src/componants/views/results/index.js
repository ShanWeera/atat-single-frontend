import React, { useEffect } from "react";
import {is_results} from "../../../actions/isResults"
import {useDispatch} from "react-redux"
import Compare from "./compare";

export default function Results(props) {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(is_results());
    })

    let querystring = props.location.search
    querystring = querystring ? (querystring[0] === '?' ? querystring.substr(1, querystring.length): querystring) : null

    let node_querystring = require('querystring')
    let parsed_querystring = querystring ? node_querystring.decode(querystring) : null


    if (!parsed_querystring) {
        return <Compare />
    } else if (parsed_querystring.view === 'compare') {
        return <Compare />
    } else if (parsed_querystring.view === 'source') {
        return []
    } else if (parsed_querystring.view === 'reservoir') {
        return []
    } else {
        return []
    }
}