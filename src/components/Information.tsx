import { checkAll } from "../components/Verification";
import { useForm, SubmitHandler } from "react-hook-form" 
export {};

export const Information = () => {
  
  return (
    <form id='infos_perso' >
      <fieldset className="border-2 border-dashed border-black rounded p-2">
        <legend className="ml-2"><strong>Informations personnelles :</strong></legend>
        <label className="mr-3">Nom :</label>
        <input type="text" id="nom" name="nom" className="border border-black rounded mb-2 p-1"></input>
        <br></br>
        <label className="mr-3">Prénom :</label>
        <input type="text" id="prenom" name="prenom" className="border border-black rounded mb-2 p-1"></input>
        <br></br>
        <label className="mr-3">Titre de CV :</label>
        <input type="text" id="titre" name="titre" className="border border-black rounded mb-2 p-1"></input>
        <br></br>
        <label className="mr-3">Genre :</label>
        <label className="mr-3" >
          <input type="radio" id="genre_homme" name="genre" value="homme"/> Homme
        </label>

        <label className="mr-3">
          <input type="radio" id="genre_femme" name="genre" value="femme"/> Femme
        </label>
        <br></br>
        <label className="mr-3">Sélectionnez votre date de naissance :</label>
        <input type="date" id="date" name="date" className="border border-black rounded mb-2 p-1"></input>
        <br></br>
        <label className="mr-3">Saisir votre adresse émail: </label>
        <input type="email" id="email" name="email" placeholder="azerty@demo.com" className="border border-black rounded mb-2 p-1"></input>
        <br></br>
        <label className="mr-3">Adresse :</label>
        <input type="text" id="adresse" name="adresse" className="border border-black rounded mb-2 p-1"></input>
        <br></br>
        <label className="mr-3">Ajouter une image :</label>
        <input type="file" id="image" name="image" className="rounded mb-2 p-1"></input>
      </fieldset>
    </form>
  );
};
