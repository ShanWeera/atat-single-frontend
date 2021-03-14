const VariantsConfigDistGetData = (data: Array) => {
    if (data === undefined) {
        return []
    }

    let allItemsCount = data.length
    let chartData = []

    data.forEach((item, index) => {
        let currentItemCount = data.reduce((count, arrItem) => (arrItem === item ? count + 1 : count), 0)
        let percentage = (currentItemCount / allItemsCount) * 100

        chartData.push(
            {
                name: item,
                y: percentage
            }
        )
    }
    )
    return chartData
}

export default VariantsConfigDistGetData
