import "./styles.css";
import {animal, getFoodStatus} from "./data.js";
import Button from "../../components/Button/Button.jsx";

function Lesson_02() {

    const fullName = animal.fullName;

    return (<div className="lesson_02_wrapper">
        <div className="animal_card">
            <p className="card_title">Animal Card: {animal.type}</p>
            <img className="avatar" src={animal.avatarURL} alt="Tiger avatar"/>
            <p className="card_info">Name: {fullName}</p>
            <p className="card_info">Age: {animal.age}</p>
            <p className="card_info">Color:{animal.color}</p>
            <p className="card_info">Is Planteater? {getFoodStatus(animal.isPlanteater)}</p>
            <Button/>
        </div>
    </div>);
}

export default Lesson_02;