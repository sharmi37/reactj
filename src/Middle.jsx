import React from "react";
import "./Middle.css";
import Product from "./Product";
import car11 from "./imagess/car11.jpg";
import myVideo from "./imagess/car2.mp4";
import car12 from "./imagess/car12.jpg";
import car13 from "./imagess/car13.jpg";
import car14 from "./imagess/car14.jpg";
import car15 from "./imagess/car15.jpg";
import car16 from "./imagess/car16.jpg";
import car17 from "./imagess/car17.jpg";
import car18 from "./imagess/car18.jpg";
import car19 from "./imagess/car19.jpg";

function Middle() {

  let pname1 = {name:"Lexus LX570",src:car11,prize:20}
  let pname2 = {name:"Blue BMW M2 ",src:car12,prize:20}
  let pname3 = {name:"Yellow Audi Car",src:car13,prize:20}
  let pname4 = {name:"McLaren 570s",src:car14,prize:20}
  let pname5 = {name:"Lamborghini Veneno",src:car15,prize:20}
  let pname6 = {name:"Lamborghini Aventador",src:car16,prize:20}
  let pname7 = {name:"Jeep Wrangler",src:car17,prize:20}
  let pname8 = {name:"Mahindra THAR AX",src:car18,prize:20}
  let pname9 = {name:"Mahindra Thar 5 Door",src:car19,prize:20}

  return (
    <div className="Middle1">

      {/* Video Section */}
      <div className="Middle2">
        <video width="100%" autoPlay muted loop controls>
          <source src={myVideo} type="video/mp4"/>
        </video>
      </div>

      {/* Product Section */}
      <div className="Middle">
        <Product data={pname1}/>
        <Product data={pname2}/>
        <Product data={pname3}/>
        <Product data={pname4}/>
        <Product data={pname5}/>
        <Product data={pname6}/>
        <Product data={pname7}/>
        <Product data={pname8}/>
        <Product data={pname9}/>
      </div>

    </div>
  )
}

export default Middle;