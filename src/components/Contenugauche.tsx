import { Contact } from "./Contact";
import { Competances } from "./Competances";
export const Contenugauche = () => {
    return(
    <div className=" bg-stone-300 flex flex-col  border border-stone-300 p-4  shadow-md lg:w-1/4  mb-8 ">
        <Contact/>
        <Competances/>
    </div>
    );
}