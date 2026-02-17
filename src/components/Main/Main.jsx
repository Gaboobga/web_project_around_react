import { useState } from "react";
import avatar from "../../images/Avatar.png";

import Popup from "../Popup/Popup";
import NewCard from "../NewCard/NewCard";
import EditProfile from "../EditProfile/EditProfile";
import EditAvatar from "../Avatar/EditAvatar";
import Card from "../Card/Card";

const cards = [
  {
    isLiked: false,
    _id: "5d1f0611d321eb4bdcd707dd",
    name: "Yosemite Valley",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg",
    owner: "5d1f0611d321eb4bdcd707dd",
    createdAt: "2019-07-05T08:10:57.741Z",
  },
  {
    isLiked: false,
    _id: "5d1f064ed321eb4bdcd707de",
    name: "Lake Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg",
    owner: "5d1f0611d321eb4bdcd707dd",
    createdAt: "2019-07-05T08:11:58.324Z",
  },
];

export default function Main() {
  const [popup, setPopup] = useState(null);

  const newCardPopup = { title: "Nuevo lugar", children: <NewCard /> };
  const editProfilePopup = { title: "Editar perfil", children: <EditProfile /> };
  const editAvatarPopup = {
    title: "Cambiar foto de perfil",
    children: <EditAvatar />,
  };

  function handleOpenPopup(p) {
    setPopup(p);
  }

  function handleClosePopup() {
    setPopup(null);
  }

  return (
    <>
      <section className="profile">
        <div className="profile__avatar-container">
          <img src={avatar} alt="Avatar" className="profile__avatar" />
          <button
            className="profile__avatar-edit-button"
            type="button"
            aria-label="Editar foto de perfil"
            onClick={() => handleOpenPopup(editAvatarPopup)}
          />
        </div>

        <div className="profile__info">
          <h1 className="profile__name">
            Jacques Cousteau
            <button
              className="profile__edit-button"
              type="button"
              aria-label="Editar perfil"
              onClick={() => handleOpenPopup(editProfilePopup)}
            />
          </h1>
          <p className="profile__occupation">Explorador</p>
        </div>

        <button
          className="profile__add-button"
          type="button"
          aria-label="Agregar nuevo lugar"
          onClick={() => handleOpenPopup(newCardPopup)}
        />
      </section>

      <ul className="cards" aria-live="polite">
        {cards.map((card) => (
          <Card key={card._id} card={card} handleOpenPopup={handleOpenPopup} />
        ))}
      </ul>

      {popup && (
        <Popup onClose={handleClosePopup} title={popup.title}>
          {popup.children}
        </Popup>
      )}
    </>
  );
}
