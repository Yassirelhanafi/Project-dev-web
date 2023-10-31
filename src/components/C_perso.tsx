export {}
export const Cperso = () => {
    return (
        <form id="Cperso">
            <fieldset className="border-2 border-dashed border-black rounded p-2">
            <legend className="ml-2"><strong>Compétences personnelles :</strong></legend>
            <label>
                <input type="checkbox" id="Communication" name="competences_personneles" value="Communication"/> Communication
            </label>
            <br></br>
            <label>
                <input type="checkbox" id="Travail en équipe" name="competences_personneles" value="Travail en équipe"/> Travail en équipe
            </label>
            <br></br>
            <label>
                <input type="checkbox" id="Fléxibilité" name="competences_personneles" value="Fléxibilité"/> Fléxibilité
            </label>
            <br></br>
            <label>
                <input type="checkbox" id="Confiance" name="competences_personneles" value="Confiance"/> Confiance
            </label>
            <br></br>
            <label>
                <input type="checkbox" id="Self-management" name="competences_personneles" value="Self-management"/> Self-management
            </label>
            <br></br>
            <label>
                <input type="checkbox" id="Résolution des problèmes" name="competences_personneles" value="Résolution des problèmes"/> Résolution des problèmes
            </label>
            </fieldset>
        </form>
    )
}