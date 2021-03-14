import React, { useEffect, useState } from "react"

import Highcharts from "highcharts/highcharts"
import HighchartsReact from "highcharts-react-official";

import VariantsConfigDistOptions from "./config/dist/Options";
import VariantsConfigDistGetData from "./config/dist/GetData";

export default function VariantsDistribution(props) {

    let series = {
                name: props.name.toString(),
                colorByPoint: true,
                data: VariantsConfigDistGetData(props.data)
            }

    let options = {...VariantsConfigDistOptions, series}
    console.log(options, "loollllllllllllllll")
    return [
        <HighchartsReact highcharts={Highcharts} options={options} />
    ]
}
