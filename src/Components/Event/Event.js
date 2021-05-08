import React from "react";
import "./Event.css";

const Event = (props) => {
  return (
    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 cardContainer rounded">
      <div className="card event-block rounded">
        <img
          width="100%"
          className="card-img-top"
          src={props.event.img}
          alt="Card image cap"
        ></img>
        <div className="card-body cardTitle">
          <h5 className="card-title">{props.event.name}</h5>
          {/* <p className="card-text">{props.event.description}</p> */}
        </div>
        <div className="card-body cardBtn">
          
            <a
              href={`/RegisterVolunteer/${props.event._id}`}
              className="card-title  cardLink"
            ><h5 className="text-dark font-weight-bold">
              Register
              </h5>
            </a>
         
          {/* <p className="card-text">{props.event.description}</p> */}
        </div>
        {/* <div className="cardBtn">
                    <a href={`/RegisterVolunteer/${props.event._id}`} className="btn btn-primary">Register</a>
                </div> */}
      </div>
    </div>
  );
};

export default Event;
