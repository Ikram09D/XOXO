import { Fragment } from "react/jsx-runtime";
import "./Head.css";
function Head() {
  const items = ["Acceuil", "Apropos", "FAQ"];
  return (
    <Fragment>
      <header>
        <h1 id="logo">LOGO</h1>
        <ul className="horizontal-list">
          {items.map((item) => (
            <li>
              <a href="">{item}</a>
            </li>
          ))}
          <button id="connecter"> Se connecter</button>
          <button id="inscrire">S'inscrire</button>
        </ul>
      </header>
    </Fragment>
  );
}
export default Head;
