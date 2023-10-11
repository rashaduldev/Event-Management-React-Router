/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const Serve = ({ sData }) => {
  if (!sData) {
    return null;
  }

  return (
    <div>
      <div className="card card-compact bg-base-100 shadow-xl">
        <figure>
          <img src={sData.img} alt={sData.name} />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-2xl font-bold">{sData.name}</h2>
          <p>{sData.description}</p>
          <div className="card-actions justify-end items-center mt-4">
            <p>Prices: {sData.price}</p>
            <Link to={`/service/${sData.id}`}>
              <button className="btn btn-outline btn-success">Details</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Serve;
