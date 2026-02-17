export default function EditAvatar() {
  return (
    <form className="popup__form" name="avatar-form" id="avatar-form" noValidate>
      <label className="popup__field">
        <input
          className="popup__input popup__input_type_url"
          id="avatar-link"
          name="avatar"
          placeholder="Avatar link"
          required
          type="url"
        />
        <span className="popup__error" id="avatar-link-error"></span>
      </label>

      <button className="popup__save-button" type="submit">
        Guardar
      </button>
    </form>
  );
}
