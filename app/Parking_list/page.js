"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

function ParkingList() {
  const [vehicles, setVehicles] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [editingVehicle, setEditingVehicle] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const savedVehicles = JSON.parse(localStorage.getItem("vehicles")) || [];
    setVehicles(savedVehicles);
  }, []);

  const handleDelete = (index) => {
    const updatedVehicles = vehicles.filter((_, i) => i !== index);
    setVehicles(updatedVehicles);
    localStorage.setItem("vehicles", JSON.stringify(updatedVehicles));
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    setEditingVehicle({ ...vehicles[index], index });
  };

  const handleSave = () => {
    const updatedVehicles = vehicles.map((vehicle, index) =>
      index === editingVehicle.index ? editingVehicle : vehicle
    );
    setVehicles(updatedVehicles);
    localStorage.setItem("vehicles", JSON.stringify(updatedVehicles));
    setEditIndex(null);
    setEditingVehicle(null);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditingVehicle({ ...editingVehicle, [name]: value });
  };

  // Utility function to format date and time
  const formatDateTime = (dateString) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("en-US", {
      dateStyle: "medium",
      timeStyle: "short",
    }).format(date);
  };

  return (
    <div className="bg-slate-400 flex flex-col items-center justify-center min-h-screen">
      <div className="bg-blue-500 p-5 mt-0 text-4xl text-white text-center w-full rounded-md">
        Parking Management System
      </div>

      <div className="bg-white shadow-md rounded-lg p-10 mt-10 w-[94%] ">
        <h2 className="text-4xl font-bold mb-9">Parking List of the Vehicles</h2>
        {vehicles.length === 0 ? (
          <p className="text-center text-4xl">No vehicles added yet.</p>
        ) : (
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                {/* Column headers */}
                <th className="p-4 text-left text-lg font-semibold text-gray-600">
                  License Number
                </th>
                <th className="p-4 text-left text-lg font-semibold text-gray-600">
                  Vehicle Type
                </th>
                <th className="p-4 text-left text-lg font-semibold text-gray-600">
                  Owner Name
                </th>
                <th className="p-4 text-left text-lg font-semibold text-gray-600">
                  Phone Number
                </th>
                <th className="p-4 text-left text-lg font-semibold text-gray-600">
                  Status
                </th>
                <th className="p-4 text-left text-lg font-semibold text-gray-600">
                  Address
                </th>
                <th className="p-4 text-left text-lg font-semibold text-gray-600">
                  Entry Time
                </th>
                <th className="p-4 text-left text-lg font-semibold text-gray-600">
                  Exit Time
                </th>
                <th className="p-4 text-left text-lg font-semibold text-gray-600">
                  Parking Charge
                </th>
                <th className="p-4 text-left text-lg font-semibold text-gray-600">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {vehicles.map((vehicle, index) => (
                <tr key={index}>
                  {/* Vehicle details */}
                  <td className="p-4 text-lg text-gray-700">
                    {vehicle.licenseNumber}
                  </td>
                  <td className="p-4 text-lg text-gray-700">
                    {vehicle.vehicleType}
                  </td>
                  <td className="p-4 text-lg text-gray-700">
                    {vehicle.ownerName}
                  </td>
                  <td className="p-4 text-lg text-gray-700">
                    {vehicle.ownerPhone}
                  </td>
                  <td className="p-4 text-lg text-gray-700">
                    {vehicle.status}
                  </td>
                  <td className="p-4 text-lg text-gray-700">
                    {vehicle.address}
                  </td>
                  <td className="p-4 text-lg text-gray-700 whitespace-nowrap">
                    {formatDateTime(vehicle.entryTime)}
                  </td>
                  <td className="p-4 text-lg text-gray-700 whitespace-nowrap">
                    {formatDateTime(vehicle.exitTime)}
                  </td>
                  <td className="p-4 text-lg text-gray-700">
                    {vehicle.parkingCharge}
                  </td>
                  <td className="p-4 text-lg text-gray-700 flex">
                    <button
                      onClick={() => handleEdit(index)}
                      className="bg-blue-500 text-white p-2 rounded mr-2 hover:bg-blue-700"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(index)}
                      className="bg-red-500 text-white p-2 rounded hover:bg-red-700"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
        {editIndex !== null && (
          <div className="mt-10">
            <h2 className="text-xl font-bold mb-4">Edit Vehicle</h2>
            <form className="bg-white shadow-md rounded-lg p-6">
              {/* Form fields to edit vehicle details */}
              {/* Same as before */}
              <button
                type="button"
                onClick={handleSave}
                className="bg-green-500 text-white p-3 rounded hover:bg-green-700"
              >
                Save Changes
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

export default ParkingList;