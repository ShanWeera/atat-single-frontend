import Navbar from "react-bootstrap/Navbar"
import Image from "react-bootstrap/Image"
import ResultControls from "./result_controls";
import logo from "../../../assets/images/logo.png"
import {useSelector} from "react-redux"


function Navigation() {
    const isResults = useSelector(state => state)

    return [
        <>
            <Navbar bg="light" expand="lg" className={"justify-content-center"}>
                <Navbar.Brand href="#home" className={isResults ? 'mr-0': 'mr-auto'}>
                    <Image src={logo} width={38} height={25} className={"d-inline-block"}/>
                    {" Perdana University"}
                </Navbar.Brand>
                {isResults ? ResultControls() : null}
                <Navbar.Text>Antigenic Transmissibility Analysis Tool</Navbar.Text>
            </Navbar>
        </>
    ]
}

export default Navigation
