import React from "react"

import MUIDataTable from "mui-datatables";

import VariantsConfigDetailsGetData from "./config/details/GetData";
import VariantsConfigTableOptions from "./config/table/Options";
import VariantsConfigDetailsColumns from "./config/details/Columns";
import VariantsConfigCheckbox from "./config/Checkbox";

export default function VariantsDetails(props) {
    return [
        <>
            <MUIDataTable
                columns={VariantsConfigDetailsColumns}
                options={VariantsConfigTableOptions}
                data={VariantsConfigDetailsGetData(props.selectedVariant)}
                components={{
                    Checkbox: VariantsConfigCheckbox
                }}
            />
        </>
    ]
}
