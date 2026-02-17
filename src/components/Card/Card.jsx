import ImagePopup from "../ImagePopup/ImagePopup";

export default function Card(props) {
  const { card, handleOpenPopup } = props;
  const { name, link, isLiked } = card;

  const imageComponent = { title: null, children: <ImagePopup card={card} /> };

  return (
    <li className="card">
      <img
        className="card__image"
        src={link}
        alt={name}
        onClick={() => handleOpenPopup(imageComponent)}
      />
      <button
        aria-label="Delete card"
        className="card__delete-button"
        type="button"
      />
      <div className="card__caption">
        <h2 className="card__title">{name}</h2>
        <button
          aria-label="Like card"
          type="button"
          className={`card__like-button ${
            isLiked ? "card__like-button_active" : ""
          }`}
        />
      </div>
    </li>
  );
}
