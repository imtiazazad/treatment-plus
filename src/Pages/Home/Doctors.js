import React from 'react';
import DocTeam from './DocTeam';

const Doctors = () => {
    const [doctors, setDoctors] = useState([]);

  useEffect(() => {
      fetch('doctors.json')
          .then(res => res.json())
          .then(data => setDoctors(data));
        }, [])
        
    return (
        <div>
             {
                    doctors.map(doctor => <DocTeam
                    key={doctor._id}
                    doctor={doctor}
                    ></DocTeam>)
                }
        </div>
    );
};

export default Doctors;