import React, { useEffect, useState } from 'react';
import DocTeam from './DocTeam';

const Doctors = () => {
    const [doctors, setDoctors] = useState([]);

  useEffect(() => {
      fetch('https://raw.githubusercontent.com/imtiazazad/treatment-plus/imtiaz/public/doctors.json')
          .then(res => res.json())
          .then(data => setDoctors(data));
        }, [])
        
    return (
        <div>
             {
                    doctors?.map(doctor => <DocTeam
                    key={doctor._id}
                    doctor={doctor}
                    ></DocTeam>)
                }
        </div>
    );
};

export default Doctors;