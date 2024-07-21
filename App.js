import React from 'react';
import EventDashboard from './components/EventDashboard';
import LivePolls from './components/LivePolls';
import QASessions from './components/QASessions';
import Networking from './components/Networking';

function App() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold text-center my-8">Virtual Event Platform</h1>
        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-2 bg-white p-6 rounded-lg shadow-md">
            <EventDashboard />
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <LivePolls />
          </div>
          <div className="col-span-3 bg-white p-6 rounded-lg shadow-md mt-4">
            <QASessions />
          </div>
          <div className="col-span-3 bg-white p-6 rounded-lg shadow-md mt-4">
            <Networking />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
