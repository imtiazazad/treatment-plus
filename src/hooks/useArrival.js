import { useEffect, useState } from "react";

const useArrival = () => {
    const [arrivalData, setArrivalData] = useState([]);

    useEffect(() => {
        fetch('/arrivalData.json').then(res => res.json())
            .then(data => {
                setArrivalData(data);
            })
    }, []);

    return [arrivalData, setArrivalData];
}

export default useArrival;