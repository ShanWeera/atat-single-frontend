const VariantsConfigDetailsGetData = (variant: Object) => {
    if (variant === undefined || Object.keys(variant).length === 0) {
        return []
    }

    let accession = variant.accession
    let country = variant.country
    let source = variant.source
    let strain = variant.strain

    let elementCount = Math.max(accession.length, country.length, source.length, strain.length);

    return Array(elementCount).fill().map((_, i) => (
        {accession: accession[i], country: country[i], source: source[i], strain: strain[i]}
    ))
};

export default VariantsConfigDetailsGetData
