export default function Images() {
  return (
    <div>
      <div id="wd-images">
        <h3>Image Tag</h3>
        Loading an image from the internet:
        <br />
        <img
          id="wd-starship"
          width="400px"
          src="https://www.staradvertiser.com/wp-content/uploads/2021/08/web1_Starship-gap2.jpg"
          alt=""
        />
        <br />
        Loading a local image:
        <br />
        <img id="wd-teslabot" src="images/teslabot.jpg" height="200px" alt="" />
      </div>
    </div>
  );
}
