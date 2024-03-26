import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChartBarIcon, ArrowPathIcon, MapPinIcon } from '@heroicons/react/24/outline'
import Location from './Location';
import Header from './Header'
import axios from 'axios';



const Dashboard = () => {

  const [location, setLocation] = useState({ lat: 31, lng: 35 });

  const fetchCoordinates = () => {
    axios.get('http://localhost:3000/airtag/location/1')
      .then(function (response) {
          const { latitude, longitude } = response.data;
          setLocation({ latitude, longitude });
      })
      .catch(function (error) {
          console.error('Error fetching location:', error.message);
      });
  }
    

  return (
    <div className="flex h-screen bg-background-50">
      {/* Sidebar */}
      <div className="bg-background-100 w-64 rounded-lg h-[95vh] mt-5 ml-5 shadow-lg">
        <div className="p-4">
          <h1 className="text-2xl text-text font-bold underline underline-offset-4 decoration-1">User Dashboard</h1>
        </div>
        {/* Add your sidebar navigation links here */}
        <ul className="p-5">
          <li className="text-accent-500 hover:text-accent-700 hover:bg-secondary-100 rounded-lg cursor-pointer flex p-1 my-3">
            <ChartBarIcon className='h-5 w-5 mx-2' />
            Dashboard
          </li>
          <li className="text-accent-500 hover:text-accent-700 hover:bg-secondary-100 rounded-lg cursor-pointer flex p-1 my-3" onClick={fetchCoordinates}>
            <ArrowPathIcon className='h-5 w-5 mx-2' />
            Update Airtag
          </li>
          <li className="text-black font-bold mx-5 mt-10 underline hover:text-accent-700 hover:bg-secondary-100 rounded-lg cursor-pointer flex p-1 my-3">
            {/* <MapPinIcon className='h-5 w-5 mx-2' /> */}
            Location
          </li>
          <li className="text-accent-500 rounded-lg cursor-pointer flex p-1 my-3">
            <MapPinIcon className='h-5 w-5 mx-2' />
            Latitude: {location.latitude} <br/>
            Longitude: {location.longitude}
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <Header />

        {/* Main Content Area */}
        <main className="bg-background-100 shadow-lg h-[86.5vh] mt-5 w-100 mx-5 rounded-lg">
            <Location location={location}/>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
