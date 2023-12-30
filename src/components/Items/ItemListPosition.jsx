import './ItemsListPosition.css';

function ItemListPosition({index, title, description}) {
    return (
        <div className="item-list-position">
            <h2>{title} <span>{index}</span></h2>
            <p>{description}</p>
        </div>
    );
}

export default ItemListPosition;