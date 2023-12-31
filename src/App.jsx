import { useState } from "react";
import BottomMenu from "./components/BottomMenu/BottomMenu";
import MainContent from "./components/MainContent";

function App() {
    const [ selectedContent, handleSelectedContent ] = useState('MainPage');

    function changeContent(componentName) {
        handleSelectedContent(componentName)
    }

    return (
        <div>
            <MainContent selectedContent={selectedContent} />
            <BottomMenu onClick={() => changeContent('ItemList')}/>
        </div>
    );
}

export default App;