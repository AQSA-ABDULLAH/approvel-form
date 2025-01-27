"use client";
import { GoAlertFill } from "react-icons/go";
import { HiMiniCheckCircle } from "react-icons/hi2";
import { useState } from "react";

export default function ApprovalModal({ onClose }) {
  const [isConfirmationOpen, setIsConfirmationOpen] = useState(true);
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);
  const [message, setMessage] = useState(""); // State for textarea input
  const [error, setError] = useState(""); // State for validation error

  const handleSubmit = () => {
    const wordsArray = message.trim().split(/\s+/); // Split by whitespace to count words
    const wordCount = wordsArray.length; // Total word count

    if (!message.trim()) {
      setError("Message is required."); // Show error if message is empty
      return;
    }

    if (wordCount > 4) {
      setError("Maximum word limit exceeded. Only 4 words are allowed."); // Word limit exceeded
      return;
    }

    setError(""); // Clear any existing error
    setIsConfirmationOpen(false); // Close the confirmation modal
    setIsSuccessOpen(true); // Open the success modal
  };

  return (
    <div>
      {/* Confirmation Modal */}
      {isConfirmationOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-lg w-full max-w-[600px] p-6 relative">
            {/* Close button */}
            <button
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-600"
              onClick={onClose}
            >
              ✖
            </button>

            {/* Warning Icon */}
            <div className="text-center flex flex-col items-center">
              <GoAlertFill className="text-yellow-500 text-[75px] mb-3" />
              <h2 className="text-[18px] px-[100px] font-semibold text-gray-800">
                Are you sure you want to submit this application for APPROVAL?
              </h2>
            </div>

            {/* Company Info */}
            <div className="mt-4 text-center text-[13px] text-gray-500">
              <p className="text-blue-800 font-semibold">JH Industries, Inc.</p>
              <p>Jack Stewart, Program Manager</p>
              <p>jack.stewart@mail.mail</p>
            </div>

            {/* Message Input */}
            <div className="flex flex-col items-center">
              <p className="text-[13px] text-gray-800 my-5 text-center">
                Send a message to the MPP Director/Manager.
              </p>
              <textarea
                className="mt-2 w-[82%] p-2 border-gray-300 text-[13px] border-2 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-800"
                placeholder="Begin typing or copy and paste..."
                rows={5}
                value={message}
                onChange={(e) => {
                  const inputValue = e.target.value; // Preserve original input value
                  const wordsArray = inputValue.trim().split(/\s+/); // Split by whitespace to count words
                  const wordCount = wordsArray.length; // Total word count

                  setMessage(inputValue); // Update message state

                  if (wordCount > 4) {
                    setError("Maximum word limit exceeded. Only 4 Out of 250 words are allowed.");
                  } else {
                    setError(""); // Clear error when word count is valid
                  }
                  
                }}
              />
              {/* Word Limit and Error Message */}
              <div className="w-[82%] mt-2 text-center">
                {error && <p className="text-red-500 text-[13px]">{error}</p>}
              </div>
            </div>

            {/* Buttons */}
            <div className="flex gap-6 mt-6 text-center justify-center text-[14px] mb-[40px]">
              <button
                className="bg-blue-800 text-white px-4 py-2 rounded-[4px] hover:bg-blue-700"
                onClick={handleSubmit}
              >
                Yes, SUBMIT
              </button>
              <button
                className="text-blue-800 border-2 border-blue-800 px-4 py-2 rounded-[4px] hover:bg-gray-200"
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
          <div className="bg-white rounded-[7px] shadow-lg w-full max-w-[600px] pt-8 pb-[82px] relative">
            {/* Close button */}
            <button
              className="absolute top-3 right-3 text-gray-700 hover:text-gray-800"
              onClick={onClose}
            >
              ✖
            </button>

            {/* Success Icon */}
            <div className="flex flex-col items-center">
              <HiMiniCheckCircle className="text-[83px] text-blue-800 my-[15px]" />
              <h2 className="text-[20px] font-semibold text-gray-800">
                Application has been submitted for approval
              </h2>
              <p className="mt-4 text-[15px] text-gray-700 px-[120px] text-center">
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

