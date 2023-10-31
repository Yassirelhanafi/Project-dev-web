import { Head } from "../components/Head";
import { Information } from "../components/Information";
import { Formation } from "../components/Formation";
import { Cperso } from "../components/C_perso";
import { Objec } from "../components/objec";
import { Langues } from "../components/Langues";
import { C_pro } from "../components/C_pro";
import { Soumettre } from "../components/Soumettre";
import { Foot } from "../components/Footer";

export const Formulaire = () => {
    return (
        <section className="bg-white rounded-lg ">
            <header className="mt-3 m-x-5 mb-5 font-extrabold flex justify-center text-3xl bg-slate-900 text-white p-10 ">
                <Head/>
            </header>
            <div className="container mx-auto px-6 lg:space-x-8 flex flex-col lg:flex-row">
                <div className="lg:w-1/2 flex flex-col justify-center space-y-5 py-8 text-left lg:text-left">
                    <Information/>
                    <Formation/>
                    <Objec/>
                </div>
                <div className="lg:w-1/2 lg:mt-10 flex flex-col justify-center space-y-5 py-8 text-left lg:text-left">
                    <Cperso/>
                    <Langues/>
                    <C_pro/>
                    <div className="flex justify-end">
                        <Soumettre/>
                    </div>
                </div>
            </div>
            <Foot/>
        </section>
    );
}
