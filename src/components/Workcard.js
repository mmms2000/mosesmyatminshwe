import "./WorkCardStyles.css"
import { NavLink } from "react-router-dom"

const Workcard =(props) => {
  return (
    <div className="work-container"> 
    <h1 className="project-heading"></h1>
    <div className="project-container">
        <div className="project-card">
            <img src={props.imgsrc} alt="image" />
            <h2 className="project-title"> {props.title}</h2>
            <div className="pro-details">
                <p> {props.text}</p>
                <p className="p2"> {props.stack}</p>
                <div className="pro-btns">
                    <NavLink to={props.view} className="btn" > Views</NavLink>
                    <NavLink to={props.source} className="btn" > Source</NavLink>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Workcard