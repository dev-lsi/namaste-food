import { useEffect, useState } from "react";

const useOnlineStatus=()=>{

    const [connectionStatus,setConnectionStatus] = useState('online');

    useEffect(()=>addEv(),[]);

    const addEv=()=>{
        window.addEventListener('online', () => {
            setConnectionStatus('online');
        });
        
        window.addEventListener('offline', () => {
            setConnectionStatus('offline');
        });
    }

    return connectionStatus;
}

export default useOnlineStatus;