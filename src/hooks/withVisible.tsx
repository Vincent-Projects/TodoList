import React, { useState, useEffect, useRef } from "react";

export interface VisibleProps {
  isVisible: boolean;
  handleSetVisible: () => void;
  elementRef: RefObject<any>;
}

export default function withVisible(Component: (T: any) => JSX.Element) {
  /* eslint-disable react/display-name */
  return (props: any) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<typeof Component>(null);

    const handleSetVisible = () => {
      setIsVisible(!isVisible);
    };

    const handleOutsideClick = (event: any) => {
      if (ref && ref.current && event.target !== ref.current) {
        setIsVisible(false);
      }
    };

    useEffect(() => {
      document.addEventListener("click", handleOutsideClick);
      return () => {
        document.removeEventListener("click", handleOutsideClick);
      };
    }, []);

    return (
      <Component
        {...props}
        isVisible={isVisible}
        handleSetVisible={handleSetVisible}
        elementRef={ref}
      />
    );
  };
  /* eslint-enable react/display-name */
}
