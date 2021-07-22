import { useEffect, useState } from "react";
import * as Location from "expo-location";

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
      console.log(error);
    }
  };

  useEffect(() => {
    getLocation();
  }, []);

  return location;
};