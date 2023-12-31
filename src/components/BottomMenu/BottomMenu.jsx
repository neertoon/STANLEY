import './BottomMenu.css';
function BottomMenu({ onClick }) {
    console.log('ladowanie menu');
    return (
        <div className="bottom-menu" onClick={onClick}>
            <p>Tutaj będzie menu</p>
        </div>
    );
}

export default BottomMenu;