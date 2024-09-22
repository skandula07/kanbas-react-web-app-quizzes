import Anchors from "./Anchors";
import Buttons from "./Buttons";
import DropDowns from "./DropDowns";
import Forms from "./Forms";
import Headings from "./Headings";
import Images from "./Images";
import Lists from "./Lists";
import OtherFields from "./OtherFields";
import Paragraphs from "./Paragraphs";
import Tables from "./Tables";

export default function Lab1() {
  return (
    <div>
      <h2>Lab 1</h2>
      <Headings />
      <Paragraphs />
      <Lists />
      <Tables />
      <Images />
      <Forms />
      <Anchors />
    </div>
  );
}
