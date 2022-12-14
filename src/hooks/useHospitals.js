import { useEffect, useState } from 'react';

const useHospitals = () => {
    const [hospitals, setHospitals] = useState();
    useEffect(() => {
      fetch("/hospitalData.json")
        .then(res => res.json())
        .then(data => setHospitals(data))
    }, [])

    return [hospitals, setHospitals];

};

export default useHospitals;