const ConditionalOutputIfElse = () => {
  const loggedIn = true;
  if (loggedIn) {
    return (
      <h2 id="wd-conditional-output-if-else-welcome">
        Welcome If Else
        <hr />
      </h2>
    );
  } else {
    return (
      <h2 id="wd-conditional-output-if-else-login">
        Please login If Else <hr />
      </h2>
    );
  }
};
export default ConditionalOutputIfElse;
