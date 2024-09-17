export default function OtherFields() {
  return (
    <div>
      <h3>Other Fields</h3>

      <h4>Range and Numbers</h4>
      <label htmlFor="wd-text-fields-salary-start">Starting salary:</label>
      <input
        type="number"
        id="wd-text-fields-salary-start"
        placeholder="1000"
        defaultValue="100000"
      />
      <br />

      <label htmlFor="wd-text-fields-rating">Rating: </label>
      <input
        type="range"
        id="wd-text-fields-rating"
        placeholder="Doe"
        max="5"
        defaultValue="4"
      />
      <br />

      <h4>Emails and Dates</h4>
      <label htmlFor="wd-text-fields-email">Email: </label>
      <input
        type="email"
        placeholder="jdoe@somewhere.com"
        id="wd-text-fields-email"
      />
      <br />

      <label htmlFor="wd-text-fields-dob">Date of birth: </label>
      <input type="date" id="wd-text-fields-dob" value="2000-01-21" />
      <br />

      <h4>Date Input Fields</h4>
      <label htmlFor="dobFld">Date of Birth</label>

      <input type="date" id="dobFld" value="2011-11-22" />
    </div>
  );
}
