import ItemList from "./Items/ItemList";
import MainPage from "./MainPage";

export default function MainContent({ selectedContent }) {
    let MainContent = 'div';
    if (selectedContent == 'MainPage') {
        MainContent = MainPage;
    } else if (selectedContent == 'ItemList') {
        MainContent = ItemList;
    }

    return (
        <div>
            <MainContent />
        </div>
    );
}