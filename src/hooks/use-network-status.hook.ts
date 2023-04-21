import { useEffect, useState } from "react";
import NetInfo from "@react-native-community/netinfo";

export const useNetworkStatus = () => {
    const [networkStatus, setNetworkStatus] = useState(false);

    useEffect(() => {
        const unsubscribe = NetInfo.addEventListener((state) => {
            if (state.isConnected) {
                setNetworkStatus(true);
            } else {
                setNetworkStatus(false);
            }
        });
        return () => unsubscribe();
    }, []);

    return networkStatus;
}

