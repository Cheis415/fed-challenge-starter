import data from "./api.json";
import Card from "./Card";
import "./Gallery.css";
import React, { useState } from "react";


function Gallery() {
  const [active, setActive] = useState('');

  function activate(id) {
    setActive(id);
  }
  
  return (
    <div className="Gallery">
      {data.map(obj => {
        return (
          <Card 
            id={obj.ID}
            key={obj.ID}
            image={obj.image} 
            text={obj.text} 
            trainer={obj.trainer} 
            time={obj.time}
            distance={obj.distance}
            workouts={obj.workouts} 
            activate={activate}
            active={active}
          />
        )
      })}
    </div>
  );
};

export default Gallery;