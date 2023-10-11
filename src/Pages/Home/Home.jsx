import Slider from '../Slider/Slider';
import Administration from './Administration/Administration';
import Support from './Support/Support';
import { useLoaderData } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import Services from './Services/Services';

const Home = () => {
    const {user}=useContext(AuthContext);
    console.log(user);
    const detailsData=useLoaderData();
    console.log(detailsData.length);
    return (
        <div>
            <Slider></Slider>
            <Services></Services>
            <Administration></Administration>
            <Support></Support>

        </div>
    );
};

export default Home;