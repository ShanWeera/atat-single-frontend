import React from 'react';
import MUIDataTable from 'mui-datatables';

import VariantsConfigCheckbox from '../variants/config/Checkbox';
import MotifsConfigTableColumns from './config/table/Columns';
import MotifsConfigTableOptions from './config/table/Options';

const options = { ...MotifsConfigTableOptions };

export default function MotifsSwitchesTable(props) {
  options.onRowSelectionChange = (currentRowsSelected, allRowsSelected, rowsSelected) => {
    const selectedIndex = allRowsSelected[0] ? allRowsSelected[0].dataIndex : null;
    props.setSelectedSwitch(props.switches[selectedIndex]);
  };

  options.filter = true;

  return [
    <MUIDataTable
      columns={MotifsConfigTableColumns}
      options={options}
      data={props.switches}
      components={{
        Checkbox: VariantsConfigCheckbox,
      }}
    />,
  ];
}
