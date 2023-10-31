import { FiArrowRight } from "react-icons/fi";
export {};
export const  Licence = () => {
    return (
        <div>
            <h2 className="flex justify-left text-xl font-extrabold mb-3 mt-3" >Licences et certifications</h2>
            <ul>
                <li className="flex center-items hover:text-[#4810bb] "><FiArrowRight/><strong>Microsoft:</strong><a href="https://www.microsoft.com/en-gb/learning/certification-overview.aspx"> Programming in HTML5 with JavaScript and CSS3</a>-Aout 2019</li>
                <li className="flex center-items hover:text-[#4810bb] "><FiArrowRight/><strong>Oracle:</strong><a href="https://catalog-education.oracle.com/pls/certview/sharebadge?id=582EF122264EF7B4FB73D480C825742B8CBDB8CE6EE3C36D3F306D74386315BA"> Oracle Certified Professional: Java SE 11 Developer</a>-Janvier 2018</li>
                <li className="flex center-items hover:text-[#4810bb] "><FiArrowRight/><strong>Diplôme d'études en langue française</strong>(DELF C1)-2017</li>
                </ul>
        </div>
    )
}