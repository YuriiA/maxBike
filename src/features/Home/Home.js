import { NavLink } from "react-router-dom";



export function Home() {
  return (
    <div className="home">
      
      
      <div className="homeNav">
      
        <NavLink className="allAdsList" to="/ads">
      
          Verifica modele disponibile
        </NavLink>

        
      </div>
    </div>
  );
}
