import React from "react";

type ModalProps = {
    setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>,
    children: React.ReactNode
}
const Modal = ({setIsModalOpen, children}: ModalProps) => {
  return (
    <div className="w-full">
      <div className="fixed inset-0 bg-[rgba(0,0,0,0.6)] bg-opacity-30 flex items-center justify-center z-50">
        <div className="bg-white rounded-xl shadow-lg p-6 pt-0 w-full max-w-xl relative">
          <h2 className="text-xl font-bold mb-4">Edit Movie</h2>

          {/* Your form or form component here */}
          {children}

          <div className="mt-6 flex justify-end space-x-4">
            <button
              onClick={() => setIsModalOpen(false)}
              className="px-4 py-2 rounded bg-gray-300 hover:bg-gray-400 text-black"
            >
              Cancel
            </button>
         
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
