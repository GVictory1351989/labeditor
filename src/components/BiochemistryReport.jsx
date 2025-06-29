import { useState } from "react";
import "./BiochemistryReport.css";

function BiochemistryReport() {
    const [rows, setRows] = useState([
        { test: "", result: "", normal: "", bgColors: ["", "", ""] },
    ]);
    const [focusedCell, setFocusedCell] = useState({ rowIndex: null, colIndex: null });

    const addRow = () => {
        setRows([...rows, { test: "", result: "", normal: "", bgColors: ["", "", ""] }]);
    };

    const removeRow = () => {
        if (rows.length > 1) setRows(rows.slice(0, -1));
    };

    const handleInputChange = (rowIndex, field, value) => {
        const updated = [...rows];
        updated[rowIndex][field] = value;
        setRows(updated);
    };

    const setColor = (colorClass) => {
        const { rowIndex, colIndex } = focusedCell;
        if (rowIndex === null || colIndex === null) return;
        const updated = [...rows];
        updated[rowIndex].bgColors[colIndex] = colorClass;
        setRows(updated);
    };

    return (
        <div className="report-container">
            <div className="report-header">
                <div className="report-line"></div>
                <h2 className="report-title">🧪 BIOCHEMISTRY REPORT</h2>
            </div>

            <div className="table-header">
                <div>Test Name</div>
                <div>Result</div>
                <div>Normal Range</div>
            </div>

            <div className="table-rows">
                {rows.map((row, rowIndex) => (
                    <div key={rowIndex} className="table-row">
                        {["test", "result", "normal"].map((field, colIndex) => (
                            <input
                                key={colIndex}
                                type="text"
                                value={row[field]}
                                placeholder={`Enter ${field}`}
                                onFocus={() => setFocusedCell({ rowIndex, colIndex })}
                                onChange={(e) => handleInputChange(rowIndex, field, e.target.value)}
                                className={`table-input ${row.bgColors[colIndex]}`}
                            />
                        ))}
                    </div>
                ))}
            </div>

            <div className="action-bar no-print">
                <div className="row-controls">
                    <button onClick={addRow} className="btn btn-green">➕ Add Row</button>
                    <button onClick={removeRow} className="btn btn-red">➖ Remove Row</button>
                </div>
                <div className="color-controls">
                    <span>🎨 Cell Color:</span>
                    <button onClick={() => setColor("")} className="color-btn white"></button>
                    <button onClick={() => setColor("red-bg")} className="color-btn red"></button>
                    <button onClick={() => setColor("green-bg")} className="color-btn green"></button>
                </div>
                <button onClick={() => window.print()} className="btn btn-blue">🖨️ Print</button>
            </div>
        </div>
    );
}

export default BiochemistryReport;
