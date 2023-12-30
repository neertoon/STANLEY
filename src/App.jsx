import { ITEMS_DATA } from "./data/items";
import ItemListPosition from "./components/Items/ItemListPosition";
import BottomMenu from "./components/BottomMenu/BottomMenu";

function App() {
    return (
        <div>
            {ITEMS_DATA.map( (item) => <ItemListPosition {...item} /> ) }
            <BottomMenu />
        </div>
    );
}

export default App;