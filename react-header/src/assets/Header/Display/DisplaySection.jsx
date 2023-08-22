import Dark from "./Dark";
import Light from "./Light";
const DisplaySection = () => {
  return (
    <div className="displayMode">
      <div className="displayIcons">
        <Light />
        <Dark />
      </div>
    </div>
  );
};

export default DisplaySection;
