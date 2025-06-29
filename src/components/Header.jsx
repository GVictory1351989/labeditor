import { useState } from "react";
import './Header.css';

function Header() {
    const [address, setAddress] = useState("INDAULI, MAHARAJGANJ, SIWAN, BIHAR , 381238");
    const [mobile, setMobile] = useState("+91....");

    return (
        <div className="header-container">
            {/* Logo */}
            <div className="logo-box">
                <img src="/images/logo.png" alt="Logo" className="logo-image" />
            </div>

            {/* Center Title + Info */}
            <div className="center-info">
                <h1 className="lab-title">DIKSHA PATHLAB</h1>
                <input
                    type="text"
                    value={address}
                    onChange={(e) => setAddress(address)}
                    className="editable-input"
                />
                <input
                    type="text"
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                    className="editable-input"
                />
            </div>

            {/* Date */}
            <div className="date-box">
                <p className="date-text">{new Date().toLocaleDateString()}</p>
            </div>
        </div>
    );
}

export default Header;
