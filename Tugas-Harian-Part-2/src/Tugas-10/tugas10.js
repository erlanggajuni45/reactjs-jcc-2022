import image from './logo.png';
import './tugas10.css';

const List = (props) => {
    
    return (
        <div>
            <label className="list">
            <input type={'checkbox'}  />  {props.name}
            <span className="checkmark"></span>
        </label>
        <hr />
        </div>
)
    }
    const Tugas10 = () => {
        return(

        <div className="container">
            <img src = {image} className="img" />
            <h1 className="t">THINGS TO DO</h1>
            <p>During Bootcamp in Jabarcodingcamp</p>
            <hr />

                <List name={"Belajar Git & CLI"} />
                <List name={"Belajar HTML & CSS"} />
                <List name={"Belajar Javascript"} />
                <List name={"Belajar ReactJS Dasar"} />
                <List name={"Belajar ReactJS Advance"} />
            
            <button className="button">Send</button>
        </div>

        )
}

export default Tugas10;