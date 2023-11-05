import { Head } from "../components/Head";
import { Foot } from "../components/Footer";
import { useForm, Controller } from 'react-hook-form';
import { Link} from 'react-router-dom';

interface IFormInputs {
  nom: string;
  prenom: string;
  titre: string;
  date: string;
  adresse: string;
}

export const Formulaire = () => {
  const { control, handleSubmit, formState: { errors } } = useForm<IFormInputs>();

  const isUppercase = (value: string) => /^[A-Z]+$/.test(value);
  const isUpper = (value: string) => /^[A-Z]+$/.test(value.charAt(0));
  const isAlphaNumeric = (value: string) => /^[A-Za-z\s]+$/.test(value);
  

  const isAdult = (date: string) => {
    const birthDate = new Date(date);
    const age = new Date().getFullYear() - birthDate.getFullYear();
    return age >= 18;
  };

  const onSubmit = (data: IFormInputs) => {
    
    alert(JSON.stringify(data));
  };

  return (
    <section className="bg-white rounded-lg ">
            <header className="mt-3 m-x-5 font-extrabold flex justify-center text-3xl bg-slate-900 text-white p-10 ">
                <Head/>
            </header>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="container mx-auto px-6 lg:space-x-8 flex flex-col lg:flex-row">
                <div className="lg:w-1/2 flex flex-col justify-center space-y-5 py-8 text-left lg:text-left">
                <fieldset className="border-2 border-dashed border-black rounded p-2">
                <legend className="ml-2"><strong>Informations personnelles :</strong></legend>
                    <div>
                        <label htmlFor="nom">Nom :</label>
                        <Controller
                        name="nom"
                        control={control}
                        render={({ field }) => (
                            <input
                            {...field}
                            type="text"
                            className="border border-black rounded mb-2 p-1"
                            />
                        )}
                        rules={{
                            required: 'Ce champ est requis',
                            validate: {
                            isUppercase: (value) => isUppercase(value) || 'Le nom doit être en majuscules',
                            isAlphaNumeric: (value) => isAlphaNumeric(value) || 'Le nom ne doit pas contenir ni chifres ni caractères spéciaux',
                            },
                        }}
                        />
                        {errors.nom && <p className="text-red-600">{errors.nom.message}</p>}
                    </div>

                    <div>
                        <label htmlFor="prenom">Prénom :</label>
                        <Controller
                        name="prenom"
                        control={control}
                        render={({ field }) => (
                            <input
                            {...field}
                            type="text"
                            className="border border-black rounded mb-2 p-1"
                            />
                        )}
                        rules={{
                            required: 'Ce champ est requis',
                            validate: {
                            isUpper: (value) => isUpper(value) || 'Le prénom doit commencer par une majuscule',
                            isAlphaNumeric: (value) => isAlphaNumeric(value) || 'Le prénom ne doit pas contenir ni chifres ni caractères spéciaux',
                            },
                        }}
                        />
                        {errors.prenom && <p className="text-red-600" >{errors.prenom.message}</p>}
                        <label htmlFor="titre">Titre de CV :</label>
                        <Controller
                            name="titre"
                            control={control}
                            render={({ field }) => (
                            <input
                                {...field}
                                type="text"
                                className="border border-black rounded mb-2 p-1"
                            />
                            )}
                            rules={{
                            validate: {
                                isAlphaNumeric: (value) => isAlphaNumeric(value) || 'Le titre de CV ne doit pas contenir ni chifres ni caractères spéciaux',
                            },
                            }}
                        />
                        {errors.titre && <p className="text-red-600">{errors.titre.message}</p>}
                        </div>
                        <label className="mr-3">Genre :</label>
                        <label className="mr-3" >
                        <input type="radio" id="genre_homme" name="genre" value="homme"/> Homme
                        </label>
                        <label className="mr-3">
                        <input type="radio" id="genre_femme" name="genre" value="femme"/> Femme
                        </label>
                        <br></br>
                        <br></br>
                        <div>
                        <label htmlFor="date">Sélectionnez votre date de naissance :</label>
                        <Controller
                            name="date"
                            control={control}
                            render={({ field }) => (
                            <input
                                {...field}
                                type="date"
                                className="border border-black rounded mb-2 p-1"
                            />
                            )}
                            rules={{
                            required: 'La date de naissance est requise',
                            validate: {
                                isAdult: (value) => isAdult(value) || 'Vous devez avoir au moins 18 ans',
                            },
                            }}
                        />
                        {errors.date && <p className="text-red-600">{errors.date.message}</p>}
                        </div>
                        <label className="mr-3">Saisir votre adresse émail: </label>
                        <input type="email" id="email" name="email" placeholder="azerty@demo.com" className="border border-black rounded mb-2 p-1"></input>
                        <br></br>
                        <div>
                        <label htmlFor="adresse">Adresse :</label>
                        <Controller
                            name="adresse"
                            control={control}
                            render={({ field }) => (
                            <input
                                {...field}
                                type="text"
                                className="border border-black rounded mb-2 p-1"
                            />
                            )}
                            rules={{
                            validate: {
                                isAlphaNumeric: (value) => isAlphaNumeric(value) || "L'adresse ne doit pas contenir ni chifres ni caractères spéciaux",
                            },
                            }}
                        />
                        {errors.adresse && <p className="text-red-600">{errors.adresse.message}</p>}
                        </div>
                        <label className="mr-3">Ajouter une image :</label>
                        <input type="file" id="image" name="image" className="rounded mb-2 p-1"></input>
                    </fieldset>
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
                    
                    <fieldset className="border-2 border-dashed border-black flex  rounded p-2">
                        <legend className="ml-2"><strong>Objectif Professionnel :</strong></legend>
                        <label className="mr-3">Objectif Professionnel :</label>
                        <textarea id="objectif" name="objectif" rows={5} cols={40} className="border border-black rounded p-1"></textarea>
                    </fieldset>
                </div>
                <div className="lg:w-1/2 lg:mt-10 flex flex-col justify-center space-y-5 py-8 text-left lg:text-left">
                    
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
                <div className="flex justify-end">
                        <fieldset >
                            <input type="submit" value="Soumettre" className="block bg-[gray] mt-2 px-2 hover:bg-sky-500/100 rounded p-2"/>
                        </fieldset>
                    </div>
                </div>
            </div>
        </form>
        <Foot/>
    </section>
  );
};
