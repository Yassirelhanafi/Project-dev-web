import { Contenudroit } from "../components/Contenudroit";
import { Contenugauche } from "../components/Contenugauche";
import { Entete } from "../components/Entete";
import { Footcopy } from "../components/Footer copy";

export const CV = () => {
  return (
    <div className="container mt-8 ">
      <Entete/>
      <div className="container px-0 flex flex-col lg:flex-row">
        <Contenugauche/>
        <Contenudroit/>
      </div>
      <Footcopy/>
    </div>
  );
}


