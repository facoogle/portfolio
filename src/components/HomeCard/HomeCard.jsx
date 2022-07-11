import React from "react";
import "./HomeCard.css"

export default function HomeCard(){
    return(
        <div className="HomeCard">
        <div class="card mb-3" >
  <div class="row g-0">
    <div class="col">
      <img class="img1" src="./yo2.png"   alt="..."/>
    </div>
    <div class="col-md-4">
    <div class="contenedor">Soy<ul className="move">
            <li>Facundo</li>
            <li>Full Stack</li>
            <li>Developer</li>
            
        </ul></div>
      <div class="card-body">
        <h5 class="card-title">Hola, Bievenidos a mi portafolio..! <span>&#160;</span></h5>

      </div>
    </div>
  </div>
</div>
</div>
    )
}