import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Usetitle = () => {
    
    const location = useLocation();
    let title = location.pathname
    if (title === '/') {
        title = 'Home';
    }
    if (title.includes('/')) {
        title = title.split('/')[1]
    }
    console.log(title)
    useEffect(() => {
        document.title = `MC | ${title.charAt(0).toUpperCase() + title.slice(1) }`;  
    },[title])
};

export default Usetitle;