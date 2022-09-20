import React from "react";
import Links from "./Links";
import IsBio from "./IsBio";

function About(props) {

  return (

    <div id="about">

      <h2>About Me</h2>
       <IsBio bio={props.bio}/>
       <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      {/* add your <Links /> component here */}
      <Links github={props.github} linkedin={props.linkedin}/>
    </div>
  );
}

export default About;
