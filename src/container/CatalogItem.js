import { NavLink } from "react-router-dom/cjs/react-router-dom.min"

function CatalogItem(props){
    let item = props.item
    return (
        <>
            <div className="catalog-item">
                <NavLink to={`/items/${item.name}`} key={item.id} >
                    <img src={require(`../images/${props.cat}/${item.name}.png`).default} alt="" className={props.cat} /><br/> 
                    {item.name}<br/>{`Starting at $${item.price}`}
                </NavLink>
            </div>
        </>
    )
}


export default CatalogItem