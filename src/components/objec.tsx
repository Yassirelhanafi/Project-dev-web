export {}
export const Objec = () => {
    return (
        <form id="objectif">
            <fieldset className="border-2 border-dashed border-black flex  rounded p-2">
                <legend className="ml-2"><strong>Objectif Professionnel :</strong></legend>
                <label className="mr-3">Objectif Professionnel :</label>
                <textarea id="objectif" name="objectif" rows={5} cols={40} className="border border-black rounded p-1"></textarea>
            </fieldset>
        </form>
    )
}