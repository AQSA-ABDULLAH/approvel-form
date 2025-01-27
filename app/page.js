"use client";

import { useState } from "react";
import ApprovalModal from "@/components/Application";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      {/* Button to trigger the modal */}
      <button
        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        onClick={() => setIsModalOpen(true)}
      >
        Yes, SUBMIT
      </button>

      {/* Modal Component */}
      {isModalOpen && <ApprovalModal onClose={() => setIsModalOpen(false)} />}
    </div>
  );
}


