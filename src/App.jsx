import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar'; // Import Sidebar component
import Dashboard from './components/Dashboard'; // Import Dashboard component
import Admissions from './components/Admissions'; // Import Admissions component
import PlacementChart from './components/PlacementChart';
import IndustryConnects from './components/IndustryConnects';
import Assessments from './components/Assessments';
import Placements from './components/Placements';
import Assets from './components/Assets'

const App = () => {
  return (
    <Router>
      <div className="flex">
        {/* Sidebar */}
        <Sidebar />

        {/* Main content area */}
        <div className="ml-64 p-6 flex-1">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/admissions" element={<Admissions />} />
            <Route path="/IndustryConnects" element={<IndustryConnects />} />
            <Route path="/Assessments" element={<Assessments/>}/>
            <Route path="/Placements" element={<Placements/>}/>
            <Route path="/Assets" element={<Assets/>}/>

          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;