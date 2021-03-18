import React, { useEffect, useState } from 'react';

import Highcharts from 'highcharts/highcharts';
import HighchartsReact from 'highcharts-react-official';

import VariantsConfigDistOptions from './config/dist/Options';
import VariantsConfigDistGetData from './config/dist/GetData';

export default function VariantsDistribution(props) {
  const [name, setName] = useState('Series');
  const [data, setData] = useState([]);

  useEffect(() => {
    setName(props.name);
    setData(props.data);
  }, [data, name, props.data, props.name]);

  const series = {
    name,
    colorByPoint: true,
    data: VariantsConfigDistGetData(data),
  };

  const options = { ...VariantsConfigDistOptions, series };

  return [
    <HighchartsReact highcharts={Highcharts} options={options} />,
  ];
}
