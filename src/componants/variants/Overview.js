import React from "react"
import MUIDataTable from "mui-datatables";

import VariantsConfigOverviewColumns from "./config/overview/Columns";
import VariantsConfigTableOptions from "./config/table/Options";
import VariantsConfigCheckbox from "./config/Checkbox";

let options = Object.assign({}, VariantsConfigTableOptions)
options.selectableRows = 'single'

export default function VariantsOverview(props) {
    options.onRowSelectionChange = (currentRowsSelected, allRowsSelected, rowsSelected) => {
        let selectedIndex = allRowsSelected[0] ? allRowsSelected[0].dataIndex : null
        props.setSelectedVariant(props.variants[selectedIndex])
    }

    return [
        <>
            <MUIDataTable
                columns={VariantsConfigOverviewColumns}
                options={options}
                data={props.variants}
                components={{
                    Checkbox: VariantsConfigCheckbox
                }}
            />
        </>
    ]
}
