export default function JsonStringify() {
  const squares = [1, 4, 16, 25, 36];
  return (
    <div className="wd-json-stringify">
      <h3>JSON Stringify</h3>
      squares = {JSON.stringify(squares)}; time ={" "}
      {JSON.stringify({ now: new Date() })};
      <hr />
    </div>
  );
}
