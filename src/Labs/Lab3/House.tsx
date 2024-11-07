export default function House() {
  const house = {
    //weird-name : House
    "weird-name": "House",
    bedrooms: 4,
    bathrooms: 2.5,
    squareFeet: 2000,
    address: {
      street: "Via Roma",
      city: "Roma",
      state: "RM",
      zip: "00100",
      country: "Italy",
    },
    owners: ["Alice", "Bob"],
  };
  const a = [1, 2, 3];
  const e = [4, ...a];
  const [f] = e;
  console.log(f);
  console.log(house);
  return (
    <div id="wd-house">
      <h4>House</h4>
      <h5>bedrooms</h5>
      {f}
      {house.bedrooms}
      <h5>bathrooms</h5>
      {house.bathrooms}
      <h5>Address</h5>
      <pre>{JSON.stringify(house.address)}</pre>
      <pre>{JSON.stringify(house.address, null, 2)}</pre>
      {/* null - parser, 2 - # tabs */}
      <h5>Data</h5>
      <pre>{JSON.stringify(house, null, 2)}</pre>
      <hr />
    </div>
  );
}
