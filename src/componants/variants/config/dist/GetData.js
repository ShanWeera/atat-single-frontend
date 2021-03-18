const VariantsConfigDistGetData = (data: Array) => {
    if (data === undefined) {
        return []
    }

    let allItemsCount = data.length
    let chartData = []

    const uniqueItems = [...new Set(data)]

    uniqueItems.forEach(currItem => {
        const numItems = data.filter(item => item === currItem)

        chartData.push(
            {
                name: currItem,
                y: numItems.length * 100 / allItemsCount
            }
        )
    })

    return chartData
}

export default VariantsConfigDistGetData
