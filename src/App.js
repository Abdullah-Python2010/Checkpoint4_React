import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
// eslint-disable-next-line
import { NavbarComponent } from './components/Nav_Component';
import SingleCard from './components/Card';
// eslint-disable-next-line
import Logo from './Images/Logo.webp';
// eslint-disable-next-line
import Palace from './Images/House.webp';
// eslint-disable-next-line
import Polygon from './Images/Landscape.webp';

import { Sample } from './components/Bottom'
export default function App(){
    return(
        <div>
            < NavbarComponent />
            <h1 class='title'>Card</h1>
            <div className="card-container">
                < SingleCard image={Logo} />

                < SingleCard image={Palace} />

                < SingleCard image={Polygon} />

            </div>
            <Sample/>
        </div>
    );
};