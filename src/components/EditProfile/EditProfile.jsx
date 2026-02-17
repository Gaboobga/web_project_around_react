export default function EditProfile() {
  return (
    <form className="popup__form" name="profile-form" id="profile-form" noValidate>
      <label className="popup__field">
        <input
          className="popup__input popup__input_type_name"
          id="profile-name"
          name="name"
          placeholder="Name"
          required
          type="text"
          minLength="2"
          maxLength="40"
        />
        <span className="popup__error" id="profile-name-error"></span>
      </label>

      <label className="popup__field">
        <input
          className="popup__input popup__input_type_description"
          id="profile-description"
          name="description"
          placeholder="About me"
          required
          type="text"
          minLength="2"
          maxLength="200"
        />
        <span className="popup__error" id="profile-description-error"></span>
      </label>

      <button className="popup__save-button" type="submit">
        Guardar
      </button>
    </form>
  );
}
