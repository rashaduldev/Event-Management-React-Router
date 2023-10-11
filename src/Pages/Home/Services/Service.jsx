import { useContext} from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";

const Service = () => {
    const { user } = useContext(AuthContext);
    console.log(user);
    const { id } = useParams();
    const idInt=parseInt(id);
    console.log(id);
    const dataUsers = useLoaderData();
    const card=dataUsers.find(card=>card.id === idInt);
    console.log(card);
    return (
        <div>
            <div>              
                <div className="card w-full bg-base-100 shadow-xl">
                    <figure><img src={card.img} alt="card.name" /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-5xl">{card.name}</h2>
                        <p className="text-3xl my-5">{card.description}</p>
                        <div className="card-actions justify-end">
                            <p>Prices:{card.price}</p>
                            <Link to={'/'}><button className="btn btn-primary">Go Back</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;

