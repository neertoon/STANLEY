import {ITEMS_DATA} from "../../data/items";
import ItemListPosition from "./ItemListPosition";

function ItemList() {
    return (
        <div className="item-list">
            {ITEMS_DATA.map( (item) => <ItemListPosition key={item.index} {...item} /> ) }
        </div>
    );
}

export default ItemList;