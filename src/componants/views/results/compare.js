import CollapsibleContainer from "../../presentational/collapsible_container";

export default function Compare() {
    return [
        <>
            <div className={"container-fluid pt-2"}>
                <div className={"row"}>
                    <div className={"col-4"}>
                        <CollapsibleContainer title={"Positions"}>
                            <input type="text" name="product" list="productName"/>
                            <datalist id="productName">
                                <option value="Pen">Pen</option>
                                <option value="Pencil">Pencil</option>
                                <option value="Paper">Paper</option>
                            </datalist>
                        </CollapsibleContainer>
                    </div>
                </div>
            </div>
        </>
    ]
}
