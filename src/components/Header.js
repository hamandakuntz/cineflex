import { useHistory } from "react-router-dom";

export default function Header() {
  let history = useHistory();

  function handleClick() {
    history.push("/");
  }

  return (
    <div onClick={handleClick} className="header">
      <p>CINEFLEX</p>
    </div>
  );
}
