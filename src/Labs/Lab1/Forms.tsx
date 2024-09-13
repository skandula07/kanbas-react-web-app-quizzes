export default function Forms() {
  return (
    <div id="wd-forms">
      <h3>Forms</h3>

      <h4>Input Fields & Labels</h4>
      <label htmlFor="usernameFld">Username</label>
      <input
        id="usernameFld"
        type="text"
        title="Username"
        placeholder="alice"
      />

      <label htmlFor="firstNameFld">First Name</label>
      <input id="firstNameFld" value="Alice" />

      <form id="wd-text-fields">
        <h4>Text Fields</h4>
        <label htmlFor="wd-text-fields-username">Username:</label>
        <input id="wd-text-fields-username" placeholder="jdoe" /> <br />
        <label htmlFor="wd-text-fields-password">Password:</label>
        <input type="password" id="wd-text-fields-password" value="123@#$asd" />
        <br />
        <label htmlFor="wd-text-fields-first-name">First name:</label>
        <input type="text" id="wd-text-fields-first-name" title="John" /> <br />
        <label htmlFor="wd-text-fields-last-name">Last name:</label>
        <input
          type="text"
          id="wd-text-fields-last-name"
          placeholder="Doe"
          value="Wonderland"
          title="The last name"
        />
        {/* copy rest of form elements here  */}
      </form>

      <h4>Text boxes</h4>
      <label>Biography:</label>
      <br />
      <textarea id="wd-textarea" cols={30} rows={10}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </textarea>
    </div>
  );
}
