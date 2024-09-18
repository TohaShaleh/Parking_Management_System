"use client";

import React, { useState } from "react";

function Page() {
  const [vehicleType, setVehicleType] = useState("");

  const handleChange = (event) => {
    setVehicleType(event.target.value); // Corrected typo
  };

  return (
    <>
      <div className="bg-slate-400 flex flex-col items-center justify-center min-h-screen">
        <h1 className="bg-blue-500 p-5 text-4xl text-white text-center w-full rounded-md">
          Parking Management System
        </h1>
        <form action="" className="bg-white shadow-md rounded-lg p-10 mt-10 w-3/4">
          <div className="flex flex-wrap items-center mb-6">
            <label htmlFor="license-number" className="block w-full md:w-1/2 mb-2">
              Vehicle License Number:
            </label>
            <input
              id="license-number"
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
              name="vehicle-type"
              value={vehicleType}
              onChange={handleChange}
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
              name="status"
              id="status"
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
              name="entry-time"
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
              name="exit-time"
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
              name="parking-charge"
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