const VariantsConfigDistOptions = {
  chart: {
    type: 'pie',
    cursor: 'pointer',
  },
  title: {
    text: '',
  },
  tooltip: {
    pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>',
  },
  accessibility: {
    point: {
      valueSuffix: '%',
    },
  },
  credits: {
    enabled: false,
  },
  plotOptions: {
    pie: {
      allowPointSelect: true,
      cursor: 'pointer',
      showInLegend: true,
      dataLabels: {
        enabled: true,
        format: '<b>{point.name}</b>: {point.percentage:.1f} %',
      },
    },
  },
};

export default VariantsConfigDistOptions;
