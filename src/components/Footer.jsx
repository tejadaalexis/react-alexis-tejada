import whatsapp from "../components/images/whatsapp.svg";
import instagram from "../components/images/instagram.svg";
import { Link } from "react-router-dom";
const Footer = () => {
    return (
        <div className="conteiner-fluid bg-info-subtle">
            <div className="row p-4">
                <div className="col">
                    <h3>Nosotros</h3>
                </div>
                <div className="col text-center">
                    <h3>Ayuda</h3>
                </div>
                <div className="col-md-2 text-end">
                    <Link to={"/"}><img src={whatsapp} alt="Whatsapp" width={30}/></Link>
                    <Link to={"/"}><img src={instagram} alt="Instagram" width={30}/></Link>
                </div>
            </div>
        </div>
    )
} 
    
export default Footer;