import React from "react"

import MUIDataTable from "mui-datatables";

import VariantsConfigDetailsGetData from "./config/details/GetData";
import VariantsConfigTableOptions from "./config/table/Options";
import VariantsConfigDetailsColumns from "./config/details/Columns";
import VariantsConfigCheckbox from "./config/Checkbox";

const options = Object.assign({}, VariantsConfigTableOptions)
options.selectableRows = 'none'

export default function VariantsDetails(props) {
    return [
        <>
            <MUIDataTable
                columns={VariantsConfigDetailsColumns}
                options={options}
                data={VariantsConfigDetailsGetData(props.selectedVariant)}
                components={{
                    Checkbox: VariantsConfigCheckbox
                }}
            />
        </>
    ]
}
