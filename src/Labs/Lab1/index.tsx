import Anchors from "./Anchors";

import Forms from "./Forms";
import Headings from "./Headings";
import Images from "./Images";
import Lists from "./Lists";
import Paragraphs from "./Paragraphs";
import Tables from "./Tables";

export default function Lab1() {
  return (
    <div id="wd-lab1" className="container">
      <h2>Lab 1</h2>
      <Headings />
      <Paragraphs />
      <Lists />
      <Tables />
      <Images />
      <Forms />
      <Anchors />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}
