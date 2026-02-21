import './styles.css';
//import {homerSimpson, getHobbiesAsString} from "./data.js";

/* props - transfer object from parent to child
   props -an object
**/
function Card({ firstName, lastName, job, avatar, hobby }) {
  //const {firstName, lastName, avatar, occupation} = homerSimpson;
  return (
    <>
      <article className="card">
        <div className="card-image-wrapper">
          <img className="card-image" src={avatar} alt="Homer Simpson avatar" />
        </div>
        <div className="card-details">
          <p className="card-text">
            <span>Firstname:</span> {firstName}
          </p>
          <p className="card-text">
            <span>Lastname:</span> {lastName}
          </p>
          <p className="card-text">
            <span>Occupation:</span> {job}
          </p>
          <p className="card-text">
            <span>Hobbies:</span> {hobby}
          </p>
        </div>
      </article>
    </>
  );
}

export default Card;
