import CatalogItem from "./CatalogItem";

function CatalogSection(props){
    let category = props.category
    let itemsArr;

    itemsArr = Object.entries(category.items).map((ele,index) =>
            <li key={ele[1].name}><CatalogItem item={ele[1]} cat={category.name} /></li>)
    return (
        <>
            <h2>{category.name}</h2>
            <div className="catalog-category" id={`${category.name}-div`}>
                {itemsArr}
            </div>
        </>
    )
}

export default CatalogSection