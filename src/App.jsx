import { useState } from "react";
import BottomMenu from "./components/BottomMenu/BottomMenu";
import ItemList from "./components/Items/ItemList";


function App() {
    const [ selectedContent, handleSelectedContent ] = useState('MainPage');

    function changeContent(componentName) {
        handleSelectedContent(componentName)
    }
    let mainContent = '';
    if (selectedContent == 'MainPage') {
        mainContent = <MainPage />
    } else if (selectedContent == 'ItemList') {
        mainContent = <ItemList />
    }

    return (
        <div>
            {mainContent}
            <BottomMenu onClick={() => changeContent('ItemList')}/>
        </div>
    );
}

function MainPage() {
    return (
        <div>
            Tutaj strona główna
        </div>
    );
}

export default App;