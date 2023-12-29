import { ITEMS_DATA } from "./data/items";
import ItemListPosition from "./components/ItemListPosition";

function App() {
    return (
        <div>
            {ITEMS_DATA.map( (item) => <ItemListPosition {...item} /> ) }
        </div>
    );
}

export default App;