import Header from './components/Header';
import PatientInfo from './components/PatientInfo';
import BiochemistryReport from './components/BiochemistryReport';
import ReportFooter from './components/ReportFooter';

function App() {
    return (
        <div className="page-wrapper">
            <div className="page-content">
                <Header />
                <PatientInfo />
                <BiochemistryReport />
            </div>
            <ReportFooter />
        </div>
    );
}

export default App;
