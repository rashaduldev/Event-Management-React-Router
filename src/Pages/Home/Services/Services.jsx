import { useEffect, useState } from 'react'
import Serve from './Serve';

const Services = () => {
  const [allData, setAllData] = useState([]);

  useEffect(() => {
    fetch('data.json')
      .then((res) => res.json())
      .then((data) => setAllData(data));
  }, []);

  return (
    <div>
      <h2 className='text-7xl mx-auto text-center my-16 font-bold'>Services</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-10' data-aos="fade-right">
        {allData.map((sData) => (
          <Serve key={sData.id} sData={sData} />
        ))}
      </div>
    </div>
  );
};

export default Services;

