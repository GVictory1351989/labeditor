import { useState } from "react";
import './PatientInfo.css';

function PatientInfo() {
    const [patientName, setPatientName] = useState("");
    const [address, setAddress] = useState("");
    const [ageSex, setAgeSex] = useState("");

    return (
        <div className="patient-info-wrapper">
            <h2 className="patient-info-heading">🧾 Patient Information</h2>

            <div className="input-group">
                {/* Left Side */}
                <div className="input-block">
                    <label className="input-label">👤 Patient Name</label>
                    <input
                        type="text"
                        value={patientName}
                        onChange={(e) => setPatientName(e.target.value)}
                        placeholder="Enter Patient Name"
                        className="input-field"
                    />

                    <label className="input-label mt">🎂 Age / Sex</label>
                    <input
                        type="text"
                        value={ageSex}
                        onChange={(e) => setAgeSex(e.target.value)}
                        placeholder="Enter Age / Sex"
                        className="input-field"
                    />
                </div>

                {/* Right Side */}
                <div className="input-block">
                    <label className="input-label">🏠 Address</label>
                    <textarea
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        placeholder="Enter Address"
                        className="input-area"
                    />
                </div>
            </div>

            <div className="doctor-ref">
                <span>Refd By:</span> Dr. SAURABH KUMAR BAMS
            </div>
        </div>
    );
}

export default PatientInfo;
