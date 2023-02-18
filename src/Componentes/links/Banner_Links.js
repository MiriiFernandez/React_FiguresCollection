import {NavLink} from "react-router-dom";

function Banner_Links({path, name}) {
    return (
        <div className="btn">
            <NavLink to={path} className="link">{name} </NavLink>
        </div>
    )
}

export default Banner_Links;