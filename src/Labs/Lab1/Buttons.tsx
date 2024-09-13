export default function Buttons() {
  return (
    <div>
      <h3>Buttons, Radios, and Checkboxes</h3>
      <button type="button">Delete</button>
      <button type="button">Edit</button>
      <button type="submit">Update</button>
      <h4 id="wd-buttons">On-Click Event Handlers</h4>
      <button
        id="wd-all-good"
        onClick={() => alert("Life is Good!")}
        type="button"
      >
        Hello World!
      </button>
      <h4>File Upload</h4>
      <input id="wd-upload" type="file" />
      <h4>Checkbox and Radio Buttons</h4>
      <div>
        <label>
          <input name="b" type="checkbox" /> Tenured
        </label>
      </div>
      Tenured:
      <div>
        <label>
          <input name="a" type="radio" /> Yes
        </label>
        <label>
          <input name="a" type="radio" checked /> No
        </label>
      </div>
      <h4 id="wd-radio-buttons">Radio buttons</h4>
      <label>Favorite movie genre:</label>
      <br />
      <input type="radio" name="radio-genre" id="wd-radio-comedy" />
      <label htmlFor="wd-radio-comedy">Comedy</label>
      <br />
      <input type="radio" name="radio-genre" id="wd-radio-drama" />
      <label htmlFor="wd-radio-drama">Drama</label>
      <br />
      <input type="radio" name="radio-genre" id="wd-radio-scifi" />
      <label htmlFor="wd-radio-scifi">Science Fiction</label>
      <br />
      <input type="radio" name="radio-genre" id="wd-radio-fantasy" />
      <label htmlFor="wd-radio-fantasy">Fantasy</label>
      <h4 id="wd-checkboxes">Checkboxes</h4>
      <label>Favorite movie genre:</label>
      <br />
      <input type="checkbox" name="check-genre" id="wd-chkbox-comedy" />
      <label htmlFor="wd-chkbox-comedy">Comedy</label>
      <br />
      <input type="checkbox" name="check-genre" id="wd-chkbox-drama" />
      <label htmlFor="wd-chkbox-drama">Drama</label>
      <br />
      <input type="checkbox" name="check-genre" id="wd-chkbox-scifi" />
      <label htmlFor="wd-chkbox-scifi">Science Fiction</label>
      <br />
      <input type="checkbox" name="check-genre" id="wd-chkbox-fantasy" />
      <label htmlFor="wd-chkbox-fantasy">Fantasy</label>
    </div>
  );
}
