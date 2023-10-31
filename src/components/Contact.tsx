import {BsLinkedin,BsTelephoneFill} from "react-icons/bs"
import {GrMail} from "react-icons/gr"
export function Contact (){
    return(
        
        <div className="mb-3">
            <h2 className="flex justify-left text-xl font-extrabold mb-3">Contact</h2>
            <p className="flex center-items"><span className="mr-2"><BsTelephoneFill/></span> +212 645565232</p>
            <p className="flex center-items "><span className="mr-2"><GrMail/></span> elhanafiboulmakoul@email.com</p>
            <div className="flex center-items">
                <span className="mr-2"><BsLinkedin/></span>
                <a href="https://www.linkedin.com/in/philip-emery-5443457b/?originalSubdomain=fr"title="Link_PhilipEmery" className="hover:text-[#4810bb]">LinkedIn_PhilipEmery</a>
            </div>
        </div>

    );
}