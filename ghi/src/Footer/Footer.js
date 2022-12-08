import "./Footer.css";

function Footer() {
  return (
    <div className="main-footer border-bottom-5">
      <div className="container">
        <div className="row">
          <div className="text h5">Game Night Planner</div>
          <div>
            <hr className="divider"></hr>
          </div>
          <small className="text">
            &copy;{new Date().getFullYear()} Game Night Planner | All rights reserved |
            Terms Of Service | Privacy
          </small>
        </div>
      </div>
    </div>
  );
}
export default Footer;
