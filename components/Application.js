"use client";
import { HiCheckCircle } from "react-icons/hi2";
import { HiMiniCheckCircle } from "react-icons/hi2";
import { useState } from "react";

export default function ApprovalModal({ onClose }) {
  const [isConfirmationOpen, setIsConfirmationOpen] = useState(true);
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);

  const handleSubmit = () => {
    setIsConfirmationOpen(false); // Close the confirmation modal
    setIsSuccessOpen(true); // Open the success modal
  };

  return (
    <div>
      {/* Confirmation Modal */}
      {isConfirmationOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-lg w-full max-w-md p-6 relative">
            {/* Close button */}
            <button
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-600"
              onClick={onClose}
            >
              ✖
            </button>

            {/* Warning Icon */}
            <div className="text-center">
              <div className="text-yellow-500 text-5xl mb-4">⚠️</div>
              <h2 className="text-xl font-bold text-gray-800">
                Are you sure you want to submit this application for APPROVAL?
              </h2>
            </div>

            {/* Company Info */}
            <div className="mt-4 text-center">
              <p className="font-semibold text-blue-600">JH Industries, Inc.</p>
              <p className="text-gray-600">Jack Stewart, Program Manager</p>
              <p className="text-gray-600">jack.stewart@mail.mail</p>
            </div>

            {/* Message Input */}
            <div className="mt-4">
              <p className="text-sm text-gray-600">
                Send a message to the MPP Director/Manager.
              </p>
              <textarea
                className="mt-2 w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Begin typing or copy and paste..."
                maxLength={250}
                rows={3}
              ></textarea>
              <p className="text-sm text-gray-400 text-right">
                0 out of 250 words
              </p>
            </div>

            {/* Buttons */}
            <div className="flex justify-between mt-6">
              <button
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
                onClick={handleSubmit}
              >
                Yes, SUBMIT
              </button>
              <button
                className="bg-gray-100 text-gray-600 px-4 py-2 rounded-lg hover:bg-gray-200"
                onClick={onClose}
              >
                No, Go Back
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Success Modal */}
      {isSuccessOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-lg w-full max-w-md p-6 relative">
            {/* Close button */}
            <button
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-600"
              onClick={onClose}
            >
              ✖
            </button>

            {/* Success Icon */}
            <div className="flex flex-col items-center">
            <HiMiniCheckCircle  className="text-7xl text-blue-800"/>
              <h2 className="text-xl font-bold text-gray-800">
                Application has been submitted for approval
              </h2>
              <p className="mt-4 text-sm text-gray-600">
                Once approved, the applicant will appear in your dashboard under
                APPLICATIONS: APPROVED.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
