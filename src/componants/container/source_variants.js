import React, {useEffect, useState} from "react"
import ATAT from "../../api";
import {useSelector} from "react-redux";
import DataTable from "react-data-table-component";
import { Checkbox } from "@material-ui/core";
import { ArrowDownward } from "@material-ui/icons";

import MUIDataTable from "mui-datatables";

const columns = [
    {
        name: "sequence",
        label: "Sequence",
        options: {
            filter: true,
            sort: false,
        }
    },
    {
        name: "count",
        label: "Count",
        options: {
            filter: true,
            sort: false,
        }
    },
    {
        name: "conservation",
        label: "Conservation",
        options: {
            filter: true,
            sort: false,
        },
    },
    {
        name: "motif_long",
        label: "Motif",
        options: {
            filter: true,
            sort: false,
        }
    },
];


export default function SourceVariants() {
    const [variants, setVariants] = useState([])
    const jobid = useSelector(state => state.resultId)
    const selected_position = useSelector(state => state.position)

    useEffect(() => {
        ATAT.sourcePosition(jobid, selected_position).then((response) => {
            setVariants(response.data.variants)
        }).catch((error) => {
            console.log(error)
        })
    }, [jobid, selected_position])

    const options = {
        filterType: 'checkbox',
        elevation: 0,
        filter: false,
        search: false,
        print: false,
        download: false,
        viewColumns: false,
        customToolbar: null,
        responsive: 'vertical',
        selectableRows: 'single',
        selectableRowsHideCheckboxes: false,
        selectToolbarPlacement: 'none',
        selectableRowsOnClick: true,
        customToolbarSelect: (selectedRows, displayData, setSelectedRows) => null
    };
    return [
        <>
            <MUIDataTable
                columns={columns}
                options={options}
                data={variants}
            />
        </>
    ]
}
