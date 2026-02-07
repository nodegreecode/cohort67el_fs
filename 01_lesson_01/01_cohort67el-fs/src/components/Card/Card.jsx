import "./styles.css";
import {homerSimpson, getHobbiesAsString} from "./data.js";

function Card() {
    return (
        <>
            <article className="card">
                <div className="col-6">
                    <img className="card-image" src={homerSimpson.avatar} alt="Homer Simpson avatar" />
                </div>
                <div className="col-6 v-stack">
                    <p className="card-text"><span>Firstname:</span> {homerSimpson.firstName}</p>
                    <p className="card-text"><span>Lastname:</span> {homerSimpson.lastName}</p>
                    <p className="card-text"><span>Occupation:</span> {homerSimpson.occupation}</p>
                    <p className="card-text"><span>Hobbies:</span> {getHobbiesAsString()}</p></div>
            </article>
        </>);
}

export default Card;