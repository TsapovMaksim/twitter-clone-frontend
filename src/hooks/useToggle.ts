import { useState } from 'react';

export const useToggle = (intialState = false) => {
  const [isOpen, setIsOpen] = useState(intialState);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  return [isOpen, handleOpen] as const;
};
