const LeftMenu = () => {
  return (
    <div className="leftMenu">
      <ul>
        <li>
          <i className="fa-solid fa-paper-plane"></i>
          <p>Mailing List</p>
        </li>
        <li>
          <i className="fa-regular fa-map"></i>
          <p>Campaigns</p>
        </li>
        <li>
          <i className="fa-solid fa-chart-simple"></i>
          <p>Analytics</p>
        </li>
        <li>
          <i className="fa-regular fa-comments"></i>
          <p>Message</p>
        </li>
      </ul>
    </div>
  );
};

export default LeftMenu;
