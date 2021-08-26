import CatalogItem from "./CatalogItem";

function CatalogSection(props){
    let category = props.category
    let itemsArr;

    itemsArr = Object.entries(category.items).map((index) => <>
            <CatalogItem item={index[1]} cat={category.name} />
        </>)
    return (
        <>
            <div className="catalog-category">
                <h2>{category.name}</h2>
                {itemsArr}
            </div>
        </>
    )
}

export default CatalogSection