"use client";

import React, { useEffect, useState } from "react";

const totalCapacity = 100; // Total parking capacity

function ParkingList() {
  const [vehicles, setVehicles] = useState([]);
  const [availableSlots, setAvailableSlots] = useState(totalCapacity);
  const [vehicleTypeCount, setVehicleTypeCount] = useState({});
  const [vehiclesOverOneHour, setVehiclesOverOneHour] = useState([]);

  useEffect(() => {
    // Fetch vehicles from localStorage when component mounts
    const savedVehicles = JSON.parse(localStorage.getItem("vehicles")) || [];
    setVehicles(savedVehicles);
    updateCapacity(savedVehicles);
    countVehicleTypes(savedVehicles);
    findVehiclesOverOneHour(savedVehicles);
  }, []);

  const updateCapacity = (vehicles) => {
    // Update available parking slots based on parked vehicles
    const parkedVehicles = vehicles.filter((vehicle) => vehicle.status === "Parked");
    setAvailableSlots(totalCapacity - parkedVehicles.length);
  };

  const countVehicleTypes = (vehicles) => {
    // Count the number of each vehicle type
    const typeCounts = {};
    vehicles.forEach((vehicle) => {
      if (vehicle.status === "Parked") {
        typeCounts[vehicle.vehicleType] = (typeCounts[vehicle.vehicleType] || 0) + 1;
      }
    });
    setVehicleTypeCount(typeCounts);
  };

  const findVehiclesOverOneHour = (vehicles) => {
    // Find vehicles parked for over 1 hour
    const currentTime = new Date().getTime();
    const overOneHourVehicles = vehicles.filter((vehicle) => {
      const parkedTime = new Date(vehicle.entryTime).getTime();
      const timeDiff = (currentTime - parkedTime) / (1000 * 60 * 60); // Time in hours
      return timeDiff > 1 && vehicle.status === "Parked";
    });
    setVehiclesOverOneHour(overOneHourVehicles);
  };

  const handleDelete = (index) => {
    const updatedVehicles = vehicles.filter((_, i) => i !== index);
    setVehicles(updatedVehicles);
    localStorage.setItem("vehicles", JSON.stringify(updatedVehicles));
    updateCapacity(updatedVehicles);
    countVehicleTypes(updatedVehicles);
    findVehiclesOverOneHour(updatedVehicles);
  };

  return (
    <div className="bg-slate-400 flex flex-col items-center justify-center min-h-screen">
      <div className="mt-0 w-full">
        <h1 className="bg-blue-500 p-5 text-4xl text-white text-center w-full rounded-md">
          Parking Management System
        </h1>
      </div>

      {/* Parking Capacity Block */}
      <div className="bg-white shadow-md rounded-lg p-10 mt-5 w-3/4">
        <h2 className="text-2xl font-bold mb-4">Parking Overview</h2>
        <p className="text-lg">Total Capacity: {totalCapacity}</p>
        <p className="text-lg">Available Slots: {availableSlots}</p>
        <div className="mt-4">
          <h3 className="text-lg font-semibold">Vehicle Type Count:</h3>
          <ul className="list-disc pl-5">
            {Object.keys(vehicleTypeCount).map((type, index) => (
              <li key={index} className="text-lg">
                {type}: {vehicleTypeCount[type]}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* List of Vehicles Over 1 Hour */}
      <div className="bg-white shadow-md rounded-lg p-10 mt-5 w-3/4">
        <h2 className="text-2xl font-bold mb-4">Vehicles Parked for Over 1 Hour</h2>
        {vehiclesOverOneHour.length === 0 ? (
          <p className="text-lg">No vehicles have been parked for over 1 hour.</p>
        ) : (
          <ul className="list-disc pl-5">
            {vehiclesOverOneHour.map((vehicle, index) => (
              <li key={index} className="text-lg">
                {vehicle.ownerName} - {vehicle.licenseNumber}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Optionally you can add the vehicle list display */}
    </div>
  );
}

export default ParkingList;