"use client";

import React, { useState } from "react";

function Page() {
  const [vehicleType, setVehicleType] = useState("");
  const [licenseNumber, setLicenseNumber] = useState("");
  const [ownerName, setOwnerName] = useState("");
  const [ownerPhone, setOwnerPhone] = useState("");
  const [status, setStatus] = useState("");
  const [address, setAddress] = useState("");
  const [entryTime, setEntryTime] = useState("");
  const [exitTime, setExitTime] = useState("");
  const [parkingCharge, setParkingCharge] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    // Collect form data
    const newVehicle = {
      licenseNumber,
      vehicleType,
      ownerName,
      ownerPhone,
      status,
      address,
      entryTime,
      exitTime,
      parkingCharge
    };

    // Get existing vehicles from local storage
    const savedVehicles = JSON.parse(localStorage.getItem("vehicles")) || [];

    // Add new vehicle and save to local storage
    savedVehicles.push(newVehicle);
    localStorage.setItem("vehicles", JSON.stringify(savedVehicles));

    // Optionally clear form fields
    setLicenseNumber("");
    setVehicleType("");
    setOwnerName("");
    setOwnerPhone("");
    setStatus("");
    setAddress("");
    setEntryTime("");
    setExitTime("");
    setParkingCharge("");
  };

  return (
    <>
      <div className="bg-slate-400 flex flex-col items-center justify-center min-h-screen">

        <div className="mt-0 w-full">
        <h1 className="bg-blue-500 p-5 text-4xl text-white text-center w-full rounded-md">
          Parking Management System
        </h1>
        </div>
        
        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-10 mt-10 w-3/4">
          <div className="flex flex-wrap items-center mb-6">
            <label htmlFor="license-number" className="block w-full md:w-1/2 mb-2">
              Vehicle License Number:
            </label>
            <input
              id="license-number"
              value={licenseNumber}
              onChange={(e) => setLicenseNumber(e.target.value)}
              className="p-3 w-full md:w-1/2 border border-gray-300 rounded"
              type="number"
              required
              placeholder="Input the Number"
            />
          </div>

          <div className="flex flex-wrap items-center mb-6">
            <label htmlFor="vehicle-type" className="block w-full md:w-1/2 mb-2">
              Select Vehicle Type:
            </label>
            <select
              id="vehicle-type"
              value={vehicleType}
              onChange={(e) => setVehicleType(e.target.value)}
              required
              className="p-3 w-full md:w-1/2 border border-gray-300 rounded"
            >
              <option value="">Select a type</option>
              <option value="car">Car</option>
              <option value="truck">Truck</option>
              <option value="microbus">Microbus</option>
            </select>
          </div>

          <div className="flex flex-wrap items-center mb-6">
            <label htmlFor="owner-name" className="block w-full md:w-1/2 mb-2">
              Vehicle Owner Name:
            </label>
            <input
              id="owner-name"
              value={ownerName}
              onChange={(e) => setOwnerName(e.target.value)}
              className="p-3 w-full md:w-1/2 border border-gray-300 rounded"
              type="text"
              required
              placeholder="Enter the name of the owner"
            />
          </div>

          <div className="flex flex-wrap items-center mb-6">
            <label htmlFor="owner-phone" className="block w-full md:w-1/2 mb-2">
              Owner Phone Number:
            </label>
            <input
              id="owner-phone"
              value={ownerPhone}
              onChange={(e) => setOwnerPhone(e.target.value)}
              className="p-3 w-full md:w-1/2 border border-gray-300 rounded"
              type="text"
              required
              placeholder="Enter the phone number"
            />
          </div>

          <div className="flex flex-wrap items-center mb-6">
            <label htmlFor="status" className="block w-full md:w-1/2 mb-2">
              Status:
            </label>
            <select
              id="status"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              required
              className="p-3 w-full md:w-1/2 border border-gray-300 rounded"
            >
              <option value="">Select Status</option>
              <option value="Parked">Parked</option>
              <option value="Exited">Exited</option>
            </select>
          </div>

          <div className="flex flex-wrap items-center mb-6">
            <label htmlFor="address" className="block w-full md:w-1/2 mb-2">
              Car Owner Address:
            </label>
            <textarea
              id="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              rows="4"
              className="p-3 w-full md:w-1/2 border border-gray-300 rounded"
              placeholder="Enter the address"
            />
          </div>

          <div className="flex flex-wrap items-center mb-6">
            <label htmlFor="entry-time" className="block w-full md:w-1/2 mb-2">
              Entry Date and Time:
            </label>
            <input
              type="datetime-local"
              id="entry-time"
              value={entryTime}
              onChange={(e) => setEntryTime(e.target.value)}
              className="p-3 w-full md:w-1/2 border border-gray-300 rounded"
            />
          </div>

          <div className="flex flex-wrap items-center mb-6">
            <label htmlFor="exit-time" className="block w-full md:w-1/2 mb-2">
              Exit Date and Time:
            </label>
            <input
              type="datetime-local"
              id="exit-time"
              value={exitTime}
              onChange={(e) => setExitTime(e.target.value)}
              className="p-3 w-full md:w-1/2 border border-gray-300 rounded"
            />
          </div>

          <div className="flex flex-wrap items-center mb-6">
            <label htmlFor="parking-charge" className="block w-full md:w-1/2 mb-2">
              Parking Charge (in BDT):
            </label>
            <input
              type="number"
              id="parking-charge"
              value={parkingCharge}
              onChange={(e) => setParkingCharge(e.target.value)}
              min="0"
              placeholder="Enter the parking charge"
              className="p-3 w-full md:w-1/2 border border-gray-300 rounded"
              required
            />
          </div>

          <input
            type="submit"
            value="Submit"
            className="rounded bg-red-500 p-3 w-full md:w-1/2 mt-6 hover:bg-red-800 text-white hover:cursor-pointer"
          />
        </form>
      </div>
    </>
  );
}

export default Page;