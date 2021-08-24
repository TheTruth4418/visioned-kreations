import { getItems } from "../actions"
import { NavLink } from "react-router-dom/cjs/react-router-dom.min"

function CatalogItem(props){
    let item = props.item
    return (
        <>
            <NavLink to={`/items/${item.name}`} key={item.id} >
                <img src={require(`../images/${item.category}/${item.name}.png`).default} alt="" className={item.category} /><br/> 
                {item.name}<br/>{`Starting at $${item.price}`}
            </NavLink>
        </>
    )
}

export default CatalogItem