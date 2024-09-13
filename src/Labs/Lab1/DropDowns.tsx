export default function DropDowns() {
  return (
    <div>
      <h4 id="wd-dropdowns">Dropdowns</h4>
      <select name="role">
        <option value="FACULTY">Faculty</option>
        <option value="STUDENT">Student</option>
        <option value="ADMIN">Admin</option>
      </select>

      <h4 id="wd-dropdowns">Dropdowns</h4>
      <h5>Select one</h5>
      <label htmlFor="wd-select-one-genre">Favorite movie genre: </label>
      <br />
      <select id="wd-select-one-genre">
        <option value="COMEDY">Comedy</option>
        <option value="DRAMA">Drama</option>
        <option selected value="SCIFI">
          Science Fiction
        </option>
        <option value="FANTASY">Fantasy</option>
      </select>

      <h4>Select many</h4>
      <label htmlFor="wd-select-many-genre">Favorite all movie genres: </label>
      <br />
      <select id="wd-select-many-genre" multiple>
        <option selected value="COMEDY">
          Comedy
        </option>
        <option value="DRAMA">Drama</option>
        <option selected value="SCIFI">
          Science Fiction
        </option>
        <option value="FANTASY">Fantasy</option>
      </select>
    </div>
  );
}
