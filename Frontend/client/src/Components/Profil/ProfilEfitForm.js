import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { updateProfil, getUser } from "../../actions/user.actions";

//fermeture toggle
const menuToggle1 = () => {
  const toggleMenu = document.querySelector(".profil_menu_edit");
  toggleMenu.classList.toggle("active_edit");
};

const ProfilEfitForm = () => {
  const [firstname, setFirstName] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [service, setService] = useState("");
  const usersData = useSelector((state) => state.usersReducer);
  const { id } = useParams();
  const dispatch = useDispatch();

  const userId = Object.values(usersData).filter((user) => {
    return user.id + "" === id;
  });

  const handleEditForm = (e) => {
    e.preventDefault();
    dispatch(
      updateProfil(userId[0].id, firstname, name, email, password, service)
    ).then(() => {
      dispatch(getUser(userId[0].id));
      window.location.reload();
    });
  };

  return (
    <>
      <form action="" onSubmit={handleEditForm}>
        <label htmlFor="name">Nom</label>
        <input
          type="text"
          name="name"
          className="input_signup"
          id="name"
          placeholder={userId[0].name}
          onChange={(e) => setName(e.target.value)}
          value={name}
          required
        />
        <br />
        <label htmlFor="firstname">Prénom</label>
        <input
          type="text"
          name="firstname"
          className="input_signup"
          id="firstname"
          placeholder={userId[0].firstname}
          onChange={(e) => setFirstName(e.target.value)}
          value={firstname}
          required
        />
        <br />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          className="input_signup"
          id="email"
          placeholder={userId[0].email}
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          required
        />
        <br />
        <label htmlFor="password">Mot de passe</label>
        <input
          type="password"
          name="password"
          className="input_signup"
          id="password"
          placeholder="Entrer votre mot de passe"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          required
        />
        <br />
        <label htmlFor="password">Service</label>
        <input
          type="text"
          name="service"
          className="input_signup"
          id="service"
          placeholder={userId[0].service}
          onChange={(e) => setService(e.target.value)}
          value={service}
          required
        />
        <br />
        <input
          type="submit"
          className="submit"
          value="Editer"
          onClick={menuToggle1}
        />
      </form>
    </>
  );
};

export default ProfilEfitForm;
