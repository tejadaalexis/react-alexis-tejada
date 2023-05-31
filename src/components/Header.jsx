import crip from "../components/images/crip-favicon.png"
import Navbar from "./NavBar"
import CartWidget from "./CartWidget"
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <div className="conteiner-fluid">
            <div className="row bg-info-subtle p-3">
                <div className="col-md-6">
                    <Link to={"/"}><img src={crip} alt={"crip1"} width={150} /></Link>
                </div>
                <div className="col-md-6 text-end">
                    <a href="#" className="text-decoration-none text-dark">Buscar</a>
                </div>
                <div className="row bg-info-subtle p-4">
                    <div className="col text-center text-dark">
                        <Navbar />
                    </div>
                    <div className="col text-end text-dark">
                        <CartWidget />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Header;