
import { useEffect, useState } from 'react';
const MyName = () => {

    const [open, setOpen] = useState(false);
  
    const toggleOpen = () => {
      setOpen(!open);
    };

return (
<div className={`name ${open ? " open" : "close"}`}>
   <div className= "ItsMyName" onClick ={toggleOpen}>Farcasanu Melisa</div>
   <div className="Color">Numele de alaturi este colorat!</div>
    
</div>
);
};

export default MyName;