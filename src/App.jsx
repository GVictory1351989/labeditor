import Header from './components/Header';
import PatientInfo from './components/PatientInfo';
import BiochemistryReport from './components/BiochemistryReport';
import ReportFooter from './components/ReportFooter';

function App() {
    return (
        <div className="min-h-screen flex flex-col bg-white text-black">
            {/* Content Section */}
            <div className="flex-grow max-w-3xl mx-auto p-4 shadow-md w-full">
                <Header />
                <PatientInfo />
                <BiochemistryReport />
            </div>

            {/* Footer always sticks to bottom */}
            <ReportFooter />
        </div>
    );
}

export default App;
