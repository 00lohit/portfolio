"use client";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { motion } from "framer-motion";
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

interface AlertContextType {
  show: boolean;
  data: any;
  showAlert: (data: any) => void;
  hideAlert: () => void;
}

const AlertContext = createContext<AlertContextType | undefined>(undefined);

export function useAlert(): AlertContextType {
  const context = useContext(AlertContext);
  if (!context) {
    throw new Error("useAlert must be used within an AlertProvider");
  }
  return context;
}

interface AlertProviderProps {
  children: ReactNode;
}

export function AlertProvider({ children }: AlertProviderProps): JSX.Element {
  const [show, setShow] = useState(false);
  const [data, setData] = useState({});

  const showAlert = (data: any) => {
    setData(data);
    setShow(true);
  };

  const hideAlert = () => {
    setShow(false);
    // setData({});
  };

  return (
    <AlertContext.Provider value={{ show, data, showAlert, hideAlert }}>
      {children}
      <ShowAlert {...{ show, data, showAlert, hideAlert }} />
    </AlertContext.Provider>
  );
}

const ShowAlert = ({ show, data, showAlert, hideAlert }: AlertContextType) => {
  const variants = {
    visible: {
      transform: "translateY(0px)",
      transition: {
        ease: "easeOut",
        duration: 0.69,
      },
    },
    hidden: {
      transform: "translateY(-100px)",
      transition: {
        ease: "easeOut",
        duration: 0.345,
      },
    },
  };

  let { title, description, icon: Icon } = data;

  useEffect(() => {
    if (show) {
      const hideTimeout = setTimeout(() => {
        hideAlert();
      }, 4000);

      return () => {
        clearTimeout(hideTimeout); // Clear the timeout if the component unmounts before the timeout is reached
      };
    }
  }, [show, hideAlert]);

  return (
    <div className="flex justify-center w-full">
      <motion.div
        className="fixed top-4"
        initial="hidden"
        animate={show ? "visible" : "hidden"}
        variants={variants}
      >
        <Alert>
          {Icon && <Icon className="h-4 w-4" />}
          {title && <AlertTitle>{title}</AlertTitle>}
          {description && (
            <AlertDescription className="mt-2">{description}</AlertDescription>
          )}
        </Alert>
      </motion.div>
    </div>
  );
};
