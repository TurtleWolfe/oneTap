import { useEffect, useState } from "react";
import * as Location from "expo-location";
import logger from "../utility/logger";

// interface useLocationProps {
//   coord?: {
//     latitude: number;
//     longitude: number;
//     // altitude?: number;
//     // accuracy?: number;
//     // heading?: number;
//     // speed?: number;
//   };
//   timestamp?: number;
// }

export default useLocation = () => {
  const [location, setLocation] = useState();

  const getLocation = async () => {
    try {
      const { granted } = await Location.requestBackgroundPermissionsAsync();
      if (!granted) return;
      const {
        coords: { latitude, longitude },
      } = await Location.getLastKnownPositionAsync();
      setLocation({ latitude, longitude });
    } catch (error) {
      logger.log(error);
    }
  };

  useEffect(() => {
    getLocation();
  }, []);

  return location;
};