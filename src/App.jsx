import Header from './components/Header';
import PatientInfo from './components/PatientInfo';
import BiochemistryReport from './components/BiochemistryReport';
import ReportFooter from './components/ReportFooter';

function App() {
    return (
        <div className="flex flex-col min-h-screen bg-white text-black max-w-3xl mx-auto shadow-md">
            <div className="flex-grow p-4">
                <Header />
                <PatientInfo />
                <BiochemistryReport />
            </div>

            <ReportFooter />
        </div>
    );
}

export default App;