import "./Divider.css";

function Divider({ className = "" }) {
  return <hr className={`divider ${className}`} />;
}

export default Divider;
