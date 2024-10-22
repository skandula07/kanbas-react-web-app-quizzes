export function MapFunction() {
  // just showing what happens when you don't declare
  // a function as the default
  let numberArray1 = [1, 2, 3, 4, 5, 6];
  var numberArray1AsString = numberArray1.join(", ");
  const square = (a: number) => a * a;
  const todos = ["Buy milk", "Feed the pets"];
  const squares = numberArray1.map(square);
  var squaresAsString = squares.join(", ");
  const cubes = numberArray1.map((a) => a * a * a);
  var cubesAsString = cubes.join(", ");
  return (
    <div id="wd-map-function">
      <h4>Map Function</h4>
      numberArray1 = {numberArray1} <br />
      numberArray1AsString = {numberArray1AsString} <br />
      <br />
      squares = {squares} <br />
      squaresAsString = {squaresAsString} <br />
      <br />
      cubes = {cubes} <br />
      cubesAsString = {cubesAsString} <br />
      Todos:
      <ol>
        {todos.map((todo) => (
          <li>{todo}</li>
        ))}
      </ol>{" "}
      <hr />
    </div>
  );
}
