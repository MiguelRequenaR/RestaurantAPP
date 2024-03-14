import { useContext } from 'react';
import RestContext from '@/context/RestProvider';

const useRest = () => {
    return useContext(RestContext);
}

export default useRest;