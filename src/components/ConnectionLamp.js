import useOnlineStatus from '../../utils/useOnlineStatus';

const ConnectionLamp=()=>{
  
    const lamp = useOnlineStatus();
    
  
   if(lamp ==='online'){
    return (
        <div className='green'>
            {lamp}
        </div>
      )
    }else{
        return (
            <div className='red'>
                {lamp}
            </div>
          )
    }
  
}

export default ConnectionLamp;