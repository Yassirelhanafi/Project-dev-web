export {}
export const Langues = () => {
    return (
        <form id='langues'>
            <fieldset className="border-2 border-dashed border-black rounded p-2">
                <legend className="ml-2"><strong>Compétences linguistiques:</strong></legend>
                <div className="flex mb-2">
                    <label className="mr-3"><strong>Anglais :</strong></label>
                    <input type="range" name="niveau" min="1" max="10" step="1" />
                </div>
                <div className="flex mb-2">
                    <label className="mr-3"><strong>Français :</strong></label>
                    <input type="range" name="niveau" min="1" max="10" step="1"/>
                </div>
                <div className="flex mb-2">
                    <label className="mr-3"><strong>Arabe :</strong></label>
                    <input type="range" name="niveau" min="1" max="10" step="1" />
                </div>
                <div className="flex mb-2">
                    <label className="mr-3"><strong>Espagnol :</strong></label>
                    <input type="range" name="niveau" min="1" max="10" step="1" />
                </div>
                <div className="flex mb-2">
                    <label className="mr-3"><strong>Espagnol :</strong></label>
                    <input type="range" name="niveau" min="1" max="10" step="1" />
                </div>
                <div className="flex mb-2">
                    <label className="mr-3"><strong>Japonais :</strong></label>
                    <input type="range" name="niveau" min="1" max="10" step="1" />
                </div>
                <div className="flex mb-2">
                    <label className="mr-3">Autre langue :</label>
                    <input type="text" id="Autre langue" name="Autre langue" placeholder="Ex: Chinois" className="border border-black rounded p-1"/>
                    <label className="mr-3 ml-2">Niveau :</label>
                    <input type="range" name="niveau" min="1" max="10" step="1" className="mb-2"/>
                </div>
            </fieldset>
        </form>
    )
}