export function Education (){
    return(
        <div>
            <h2 className="flex justify-left text-xl font-extrabold mb-3" >Education : </h2>
            <table className="table-auto border-separate border-spacing-2 border border-slate-400">
                <tr>
                    <th className="border border-slate-300">Ecole</th>
                    <th className="border border-slate-300">Annés d'étude</th>
                    <th className="border border-slate-300">Filière</th>
                </tr>
                <tr>
                    <td className="border border-slate-300">Ecole mohammadia d'ingenieurs</td>
                    <td className="border border-slate-300">2016-2019</td>
                    <td className="border border-slate-300">Genie informatique</td>
                </tr>
                <tr>
                    <td className="border border-slate-300">Classes préparatoires</td>
                    <td className="border border-slate-300">2014-2016</td>
                    <td className="border border-slate-300">Maths-physique</td>
                </tr>
                
            </table>
        </div>
    );
}