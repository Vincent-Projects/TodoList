import React, { useState, useEffect } from "react";

export interface VisibleProps {
  isVisible: boolean;
  handleSetVisible: () => void;
}

export default function withVisible(Component: (T: any) => JSX.Element) {
  /* eslint-disable react/display-name */
  return (props: any) => {
    const [isVisible, setIsVisible] = useState(false);

    const handleSetVisible = () => {
      setIsVisible(!isVisible);
    }

    const handleOutsideClick = (event: any) => {
      setIsVisible(false);
      console.log("Here");
    }

    useEffect(() => {
      document.addEventListener("click", handleOutsideClick);
      return () => {
        document.removeEventListener("click", handleOutsideClick);
      }
    }, []);

    return (
      <Component {...props} isVisible={isVisible} handleSetVisible={handleSetVisible} />
    );
  }
  /* eslint-enable react/display-name */
}