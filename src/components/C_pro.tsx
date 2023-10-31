export {}
export const C_pro = () => {
    return (
        <form id="C_pro">
            <fieldset className="border-2 border-dashed border-black rounded p-2">
                <legend className="ml-2"><strong>Compétences techniques :</strong></legend>
                <div className="mb-2">
                    <label><strong>Outils : </strong></label>
                    <label className="mr-3">
                        <input type="checkbox" id="MS" name="competences_techniques" value="MS Visual Studio"/> MS Visual Studio
                    </label>
                    <label className="mr-3">
                        <input type="checkbox" id="Spring" name="competences_techniques" value="Spring"/>Spring
                    </label>
                    <label className="mr-3">
                        <input type="checkbox" id="JUnit" name="competences_techniques" value="JUnit"/> JUnit
                    </label>
                    <label className="mr-3">
                        <input type="checkbox" id="Jbuilder" name="competences_techniques" value="Jbuilder"/> Jbuilder
                    </label>
                    <label className="mr-3">
                        <input type="checkbox" id="adobe" name="competences_techniques" value="Adobe Creative Cloud"/> Adobe Creative Cloud
                    </label>
                    <label className="mr-3">
                        <input type="checkbox" id="Microsoft Office" name="competences_techniques" value="Microsoft Office"/> Microsoft Office
                    </label>
                </div>
                <div className="mb-2">       
                <label><strong>Languages de programmation : </strong></label>
                    <label className="mr-3">
                        <input type="checkbox" id="java" name="competences_techniques" value="Java/J2EE"/> Java/J2EE
                    </label>
                    <label className="mr-3" >
                        <input type="checkbox" id="html5" name="competences_techniques" value="HTML5 & CSS3"/> HTML5 & CSS3
                    </label>
                    <label className="mr-3">
                        <input type="checkbox" id="C" name="competences_techniques" value="C,C+,C++ & C#"/> C,C+,C++ & C#
                    </label>
                    <label className="mr-3">
                        <input type="checkbox" id="JavaScript" name="competences_techniques" value="JavaScript"/> JavaScript
                    </label>
                    <label className="mr-3">
                        <input type="checkbox" id="PY" name="competences_techniques" value="Python"/> Python
                    </label>
                    <label className="mr-3">
                        <input type="checkbox" id="R" name="competences_techniques" value="R"/> R
                    </label>
                    <label className="mr-3">
                        <input type="checkbox" id="PHP" name="competences_techniques" value="PHP"/> PHP
                    </label>        
                </div>
                <div className="mb-2">
                    <label><strong>Gestion de base de données : </strong></label>
                    <label className="mr-3">
                        <input type="checkbox" id="Oracle_8_9" name="competences_techniques" value="Oracle 8.x/9.x"/> Oracle 8.x/9.x
                    </label>
                    <label className="mr-3">
                        <input type="checkbox" id="SQL_Server_2008" name="competences_techniques" value="SQL Server 2008"/> SQL Server 2008
                    </label>
                    <label className="mr-3">
                        <input type="checkbox" id="MS_Access" name="competences_techniques" value="MS Access"/> MS Access
                    </label>
                    <label className="mr-3">
                        <input type="checkbox" id="MySQL" name="competences_techniques" value="MySQL"/> MySQL
                    </label>        
                </div>
                <div className="mb-2">
                    <label><strong>Technologies du Cloud : </strong></label>
                    <label className="mr-3">
                        <input type="checkbox" id="AWS" name="competences_techniques" value="AWS"/> AWS
                    </label>
                    <label className="mr-3">
                        <input type="checkbox" id="Docker" name="competences_techniques" value="Docker"/> Docker
                    </label>
                    <label className="mr-3">
                        <input type="checkbox" id="Spark" name="competences_techniques" value="Spark"/> Spark
                    </label>
                </div>        
            </fieldset>
        </form>
    )
}