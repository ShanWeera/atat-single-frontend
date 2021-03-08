import Card from "react-bootstrap/Card"

function CollapsibleContainer(props) {
    return [
        <Card>
            <Card.Header className={"pt-1 pb-1 pl-1 pr-1 bg-dark text-light font-weight-bold"}>{props.title}</Card.Header>
            <Card.Body>{props.children}</Card.Body>
        </Card>
    ]
}

export default CollapsibleContainer
