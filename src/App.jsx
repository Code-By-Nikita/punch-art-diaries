import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Card from "./components/Card";
import productImage1 from './assets/Product1.jpeg';
import productImage2 from './assets/Product2.jpeg';
import productImage3 from './assets/Product3.jpeg';
import productImage4 from './assets/Product4.jpeg';
import productImage5 from './assets/Product5.jpeg';
import productImage6 from './assets/Product6.jpeg';
import productImage7 from './assets/Product7.jpeg';
import productImage8 from './assets/Product8.jpeg';

export const PunchArt = () => {
    return <>
        <Header></Header>
        <Navbar></Navbar>
        <div className="cards-container">

            <Card
                image={productImage1}
                name="Leaf Hoop"
                description="Palm Leaf design punch art wall hanging hoop"
                price="450"
            />
            <Card
               image={productImage2}
                name="Tulip Hoop"
                description="Tulip flower design punch art wall hanging hoop"
                price="590"
            />
             <Card
                image={productImage3}
                name="Planter Hoop"
                description="Plant design punch art wall hanging hoop"
                price="490"
            />
            <Card
                image={productImage4}
                name="Landscape Hoop"
                description="Beautiful landscape design punch art wall hanging hoop"
                price="549"
            />
             <Card
                image={productImage5}
                name="Mountain Hoop"
                description="Magestic Mountain design punch art wall hanging hoop"
                price="450"
            />
            <Card
                image={productImage6}
                name="Seaside Hoop"
                description="Beautiful Seaside design punch art wall hanging hoop"
                price="490"
            />
             <Card
                image={productImage7}
                name="Flower Hoop"
                description="Flower bunch design punch art wall hanging hoop"
                price="599"
            />
            <Card
                image={productImage8}
                name="Daylight Hoop"
                description="Bright Daylight design punch art wall hanging hoop"
                price="499"
            />
        </div>
        <Footer></Footer>

    </>
}

export default PunchArt
