import { Button } from "antd";
import { Link } from "react-router-dom";

const Home = () => {

    return (
 
        <div className="flex flex-col lg:flex-row justify-around items-center mt-10 lg:-mt-10">
           <div className="">
            <h1>Comprehensive Money Transfer <br /> Services</h1>
            <p className="w-96 mt-3">Experience hassle-free money transfers with our secure platform. Send, cash out, and cash in effortlessly, plus enjoy a range of additional services.</p>

            <Button className="mt-5 w-32 h-10" type="primary"><Link to="/transation">
            Getting Start</Link></Button>
           </div>

           <div>
            <img className="w-full lg:w-[700px] h-full lg:h-[600px]" src="https://i.ibb.co/whKfdwp/Online-transactions-rafiki.png" alt="banner"/>
           </div>
        </div>
    );
};

export default Home;