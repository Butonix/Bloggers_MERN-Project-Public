import React, { createContext, useContext, useState } from "react";

const ModalContext = createContext();

export const ModalContextProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [confirmModal, setConfirmModal] = useState({
    isOpen: false,
    postId: null,
    title: "",
  });
  return (
    <ModalContext.Provider value={{ isModalOpen, setIsModalOpen, confirmModal, setConfirmModal }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModalContext = () => useContext(ModalContext);
