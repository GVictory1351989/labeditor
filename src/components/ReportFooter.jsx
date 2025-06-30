import './ReportFooter.css';

function ReportFooter() {
    return (
        <div className="report-footer">
            <div className="footer-signature-box">
                <img src="/images/signdata.png" alt="Signature" className="footer-image" />
                <div className="footer-name">ASHISH KUMAR(DMLT)</div>
            </div>

            <div className="footer-line">
                <p className="footer-disclaimer">
                    This report is not valid for medico legal purpose.
                </p>
            </div>
        </div>
    );
}

export default ReportFooter;
