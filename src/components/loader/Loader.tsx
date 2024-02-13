import ReactDOM from "react-dom";
import "./loader.css"
const Loader = () => {
  const portalRoot = document.getElementById("loader");
  return portalRoot ? ReactDOM.createPortal (
    <div className="backdrop">
      <div>
        <img src={window.location.origin + '/assets/images/loader.gif'} alt="Loading..."></img>
      </div>
    </div>,
    portalRoot
  ) : null;
};

export default Loader;
