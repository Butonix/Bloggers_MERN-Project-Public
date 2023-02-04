import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { AiOutlineClose } from "react-icons/ai";

const ConfirmModal = ({
  handleClose,
  onConfirm,
  actionText,
  titleText,
  confirmText,
  cancelText,
  children,
}) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return ReactDOM.createPortal(
    <div
      onClick={handleClose}
      className="absolute top-0 min-h-full h-auto w-full bg-black/50 py-16 z-50 flex items-center justify-center"
    >
      <button
        type="button"
        onClick={handleClose}
        className="absolute text-2xl top-5 right-5 text-white"
      >
        <AiOutlineClose />
      </button>
      <div onClick={(e) => e.stopPropagation()} className="bg-white p-10 rounded-lg">
        <h1 className="text-xl">
          {actionText}
          <br />
          <p className="font-semibold my-2">{titleText}</p>
        </h1>
        {children}
        <div className="flex items-center justify-center gap-10">
          <button
            className="bg-red-500 text-white py-2 px-4 mt-2 font-semibold shadow-md rounded hover:bg-red-600"
            onClick={onConfirm}
            type="button"
          >
            {confirmText}
          </button>
          <button
            className="bg-gray-400 text-white py-2 px-4 mt-2 font-semibold shadow-md rounded hover:bg-gray-500"
            onClick={handleClose}
            type="button"
          >
            {cancelText}
          </button>
        </div>
      </div>
    </div>,
    document.getElementById("confirm-modal")
  );
};

export default ConfirmModal;
