import React from "react";
import Links from "./Links.js";
// import user from "../data/user";

function About(props) {
  console.log(props.github);
  return (
    <div id="about">
      <h2>About Me</h2>
      {props.bio ? <p>{props.bio}</p> : null}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links github={props.github} linkedin={props.linkedin} />
      {/* <Links github={user.links.github} linkedin={user.links.linkedin} /> */}
    </div>
  );
}

export default About;
