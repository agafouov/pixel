import { useNavigate } from "react-router-dom";
import "./style.scss";

const TabButton = (props) => {
  const navigate = useNavigate();

  const savedData = sessionStorage.getItem("pixelcoinLangpack");
  const parsedData = JSON.parse(savedData);
  return (
    <button
      onClick={() => {
        navigate(`/${props.name}`);
      }}
      className={`tab tab__${props.name}-btn`}
    >
      <div className="tab__name">
        {props.name === `fren` ? parsedData.main.frens : parsedData.main.earn}
      </div>
    </button>
  );
};

export default TabButton;
