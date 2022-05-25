export const getQueryByObject = (filter) => {
    const properties = []
    for (const filterKey in filter) {
        const key = filterKey
        const value = filter[key]
        if (value) {
            const keyProperty = encodeURIComponent(key.toString())
            const valueProperty = encodeURIComponent(value.toString())
            properties.push(keyProperty + "=" + valueProperty)
        }
    }
    return properties.join("&")
}