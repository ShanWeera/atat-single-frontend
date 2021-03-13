import React from "react"
import MUIDataTable from "mui-datatables";
import { Radio, Checkbox } from "@material-ui/core"

const CustomCheckbox = (props) => {
    let newProps = Object.assign({}, props);
    newProps.color = props['data-description'] === 'row-select' ? 'secondary' : 'primary';

    if (props['data-description'] === 'row-select') {
        return (<Radio {...newProps} />);
    } else {
        return (<Checkbox {...newProps} />);
    }
};

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


export default function Variants(props) {
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
        selectableRowsOnClick: false,
        customToolbarSelect: (selectedRows, displayData, setSelectedRows) => null,
        onRowSelectionChange: (currentRowsSelected, allRowsSelected, rowsSelected) => {
            let selectedIndex = allRowsSelected[0] ? allRowsSelected[0].dataIndex : null
            props.setSelectedVariant(props.variants[selectedIndex])
        }
    };

    return [
        <>
            <MUIDataTable
                columns={columns}
                options={options}
                data={props.variants}
                components={{
                    Checkbox: CustomCheckbox
                }}
            />
        </>
    ]
}