import CollapsibleContainer from "../../presentational/collapsible_container";
import PositionDropdown from "../../container/position_dropdown";

export default function Compare() {
    return [
        <>
            <div className={"container-fluid pt-2"}>
                <div className={"row"}>
                    <div className={"col-lg-4 col-sm-12"}>
                        <CollapsibleContainer title={"Positions"}>
                            <PositionDropdown />
                        </CollapsibleContainer>
                    </div>
                </div>
            </div>
        </>
    ]
}
