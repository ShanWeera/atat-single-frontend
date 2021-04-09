import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import AutoComplete from '@material-ui/lab/Autocomplete';
import { TextField } from '@material-ui/core';

import ApiEndpoints from '../../api/Endpoints';

export default function PositionDropdown() {
  const [positionCount, setPositionCount] = useState(0);
  const jobid = useSelector((state) => state.jobID);
  const selected_position = useSelector((state) => state.position);
  const dispatch = useDispatch();

  useEffect(() => {
    if (jobid == null) {
      return
    }

    ApiEndpoints.positionCount(jobid).then((response) => {
      setPositionCount(response.data);
    }).catch((error) => {
      console.log(error);
    });
  }, [jobid]);

  return [
    <>
      <AutoComplete
        id="positions-dropdown"
        options={Array(positionCount).fill().map((_, i) => (i + 1).toString())}
        value={selected_position}
        blurOnSelect
        autoHighlight
        onChange={(event, newPosition) => {
          dispatch({ type: 'POSITION_CHANGE', position: newPosition }, []);
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            variant="outlined"
            margin="normal"
          />
        )}
        getOptionLabel={(label) => label.toString()}
      />
    </>,
  ];
}
