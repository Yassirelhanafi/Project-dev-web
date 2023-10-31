import { Education } from "./Education";
import { Licence } from "./Licence";
import { Obj_CV } from "./Obj_CV";
import { Expérience } from "./Expérience";
export const Contenudroit = () => {
    return(
        <div className=" bg-white flex flex-col  border border-white p-4  shadow-md lg:w-3/4  mb-8 ">
            <Education/>
            <Licence/>
            <Obj_CV/>
            <Expérience/>
        </div>
    )
}
