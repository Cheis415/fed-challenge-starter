import "./Card.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faStopwatch } from '@fortawesome/free-solid-svg-icons';
import { faLemon } from '@fortawesome/free-solid-svg-icons';
import React from "react";
//I couldn't tell what the second icon was, so I just chose
//a lemon. Also the regular icons cost money so I used the solid
//free icons.

function Card({id, image, text, trainer, time, distance, activate, active, workouts }) {
  
  function handleClick(){
    activate(id);
  }
  //I was going to do a better alert like a pop up that comes right out of view details
  //but didn't have time
  function funClick() {
    alert("Thank you so much for the opportunity!!")
  }
  return (
  
      <div onClick={handleClick} className={active === id ? "selected" : "unselected" }>
        <div className="image">
          {workouts.length > 0 
            ? <div className="overlay"> 
                <h4 className="number">{workouts}</h4> 
                <p className="workouts">WORKOUTS</p>
                <FontAwesomeIcon icon={faBars}/> 
              </div> 
            : null
          }
          <img className= "thumb" src={image} alt="" />
         </div>
        <span className= "span"> 
          <p className= "text">{text}</p>  
          <img className="trainer-pic" src={trainer} alt="" />
        </span>
          {(time.length > 0)
            ? <p className= "time"> 
                <FontAwesomeIcon icon={faStopwatch}/> {time}  
                <FontAwesomeIcon icon={faLemon}/>  {distance}
              </p>
            : <p className= "time">{time} {distance}</p>
          }
        {active === id 
          ? <p onClick={funClick} className="details">View Details</p> 
          : ''}
      </div>
  )
}

export default Card;