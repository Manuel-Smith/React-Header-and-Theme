import Footer from "../Footer/Footer";
const LeftMenu = () => {
  return (
    <div>
      <ul>
        <li>
          <i className="fa-solid fa-paper-plane"></i>
          <a href="#">Mailing List</a>
        </li>
        <li>
          <i className="fa-regular fa-map"></i>
          <a href="#">Campaigns</a>
        </li>
        <li>
          <i className="fa-solid fa-chart-simple"></i>
          <a href="#">Analytics</a>
        </li>
        <li>
          <i className="fa-regular fa-comments"></i>
          <a href="#">Message</a>
        </li>
      </ul>
    </div>
  );
};

export default LeftMenu;
