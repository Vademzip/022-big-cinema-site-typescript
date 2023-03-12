import {RefObject, useEffect} from 'react';

const useOnClickOutside = (ref:RefObject<HTMLDivElement>, handler: (event: { target: any }) => void) => {
    useEffect(() => {
        const listener = (event: { target: any; }) => {
            if (!ref.current || ref.current.contains(event.target)) {
                return;
            }
            handler(event);
        };
        document.addEventListener('mousedown', listener);
        return () => {
            document.removeEventListener('mousedown', listener);
        };
    }, [ref, handler]);
};

export default useOnClickOutside;