import CatalogItem from "./CatalogItem";

function CatalogSection(props){
    let category = props.category
    let itemsArr;

    itemsArr = Object.entries(category.items).map((index) => <>
            <CatalogItem item={index[1]} cat={category.name} />
        </>)
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