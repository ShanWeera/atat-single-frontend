import React from "react"
import Highcharts from "highcharts/highcharts"
import HighchartsReact from "highcharts-react-official";

const options = {
    chart: {
        type: "pie",
        cursor: "pointer"
    },
    title: {
        text: ''
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    accessibility: {
        point: {
            valueSuffix: '%'
        }
    },
    credits: {
        enabled: false
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: true,
                format: '<b>{point.name}</b>: {point.percentage:.1f} %'
            }
        }
    },
    series: [
        {
            name: "Countries",
            data:  [{
            name: 'Chrome',
            y: 100,
            sliced: true,
            selected: true
}]
        }
    ]
}
export default function VariantDistribution(props) {
    return [
        <HighchartsReact highcharts={Highcharts} options={options} />
    ]
}