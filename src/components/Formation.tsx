export {};

export const Formation =() =>{
    return (
        <form id="formation">
            <fieldset className="border-2 border-dashed border-black rounded p-2">
            <legend className="ml-2"><strong>Formation:</strong></legend>
                <label className="mr-3">Formation :</label>
                <select id="formation" name="formation" className="border mb-2 border-black rounded" >
                    <option value="Bacalaureat">Bacalaureat</option>
                    <option value="Licence">Licence</option>
                    <option value="master">Master</option>
                    <option value="diplome_ingenieur">Diplôme d'ingénieur</option>
                    <option value="doctorat">Doctorat</option>
                </select>
                <br></br>
                <label className="mr-3">Ecole :</label>
                <input type="text" id="Ecole" name="Ecole" className="border border-black rounded mb-2 p-1"/>
                <br></br>
                <label className="mr-3">Filière :</label>
                <input type="text" id="Filière" name="Filière" className="border border-black rounded mb-2 p-1"/>
                <br></br> 
                <label className="mr-3">Période :</label>
                <input type="Période" id="" name="periode" placeholder="Janvier 2020 - Mai 2023" className="border border-black rounded mb-2 p-1"/>
            </fieldset>
        </form>
    )
}