import React, { useEffect, useState } from "react"

import Highcharts from "highcharts/highcharts"
import HighchartsReact from "highcharts-react-official";

import VariantsConfigDistOptions from "./config/dist/Options";
import VariantsConfigDistGetData from "./config/dist/GetData";

export default function VariantsDistribution(props) {
    const [name, setName] = useState('Series')
    const [data, setData] = useState([])

    useEffect(() => {
        setName(props.name)
        setData(props.data)
        console.log(props.data, 'KOPLA')
    }, [data, name, props.data, props.name])


    let series = {
                name: name,
                colorByPoint: true,
                data: VariantsConfigDistGetData(data)
            }

    let options = {...VariantsConfigDistOptions, series}
    // console.log(options, "loollllllllllllllll")
    return [
        <HighchartsReact highcharts={Highcharts} options={options} />
    ]
}
