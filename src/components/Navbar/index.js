import './Navbar.css';
import {  Link } from "react-router-dom";

function Navbar() {
    return (
      <nav>
        <ul>
          <li>
            <Link to="/add">
              <img src='/images/add.svg' alt='Icone para adicionar na lista'/>
            </Link>
          </li>
          <li>
            <Link to="/list">
              <img src='/images/list.svg' alt='Icone para visualizar uma lista'/>
            </Link>
          </li>
          <li class="lastIcon">
            <Link to="/config">
              <img src='/images/config.svg' alt='Icone para configuração'/>
            </Link>
          </li>
        </ul>
      </nav>
    )
}

export default Navbar;