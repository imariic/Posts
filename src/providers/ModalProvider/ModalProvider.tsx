import React, { useState } from "react";
import { Modal } from "ui";

interface ModalContextType {
  isVisible: boolean;
  setIsVisible: (isVisible: boolean) => void;
}

export const ModalContext = React.createContext<ModalContextType>({
  isVisible: false,
  setIsVisible: (isVisible) => {},
});

interface ModalProviderProps {
  children: React.ReactNode;
}

const ModalProvider: React.FC<ModalProviderProps> = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);

  const value = { isVisible, setIsVisible };

  return (
    <ModalContext.Provider value={value}>
      {isVisible && (
        <Modal setIsVisible={setIsVisible}>
          <div></div>
        </Modal>
      )}
      {children}
    </ModalContext.Provider>
  );
};
export default ModalProvider;
