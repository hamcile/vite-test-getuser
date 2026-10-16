function KioskStatus() {
    return "Kiosk Status: Online";
}


function KioskApp() {
    return (
        <div className="app-container">
            <h1>Cart Express</h1>
            <p><KioskStatus /></p>
        </div>
    );
}
 
export default KioskApp;