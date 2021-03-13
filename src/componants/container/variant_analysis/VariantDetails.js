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
        name: "accession",
        label: "Accession",
        options: {
            filter: true,
            sort: false,
        }
    },
    {
        name: "strain",
        label: "Strain",
        options: {
            filter: true,
            sort: false,
        }
    },
    {
        name: "source",
        label: "Source",
        options: {
            filter: true,
            sort: false,
        },
    },
    {
        name: "country",
        label: "Country",
        options: {
            filter: true,
            sort: false,
        }
    },
];

const getVariantData = (variant: Object) => {

    if (variant === undefined || Object.keys(variant).length === 0) {
        return []
    }

    let accession = variant.accession
    let country = variant.country
    let source = variant.source
    let strain = variant.strain

    let elementCount = Math.max(accession.length, country.length, source.length, strain.length);

    return Array(elementCount).fill().map((_, i) => (
        {accession: accession[i], country: country[i], source: source[i], strain: strain[i]}
    ))
};

export default function VariantDetails(props) {
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
                data={getVariantData(props.selectedVariant)}
                components={{
                    Checkbox: CustomCheckbox
                }}
            />
        </>
    ]
}