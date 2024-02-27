import { Link } from "react-router-dom";
import { ITransationItems } from "../../types";
import BreadCrumb from "../../components/breadcrumb/BreadCrumb";



const Transation = () => {
    
    const items = [
        {
            name: "Send Money",
            image: "https://i.ibb.co/gVj97vG/send-money.png",
            href:"/send-money"
        },
        {
            name: "Cash Out",
            image: "https://i.ibb.co/Z2QprDT/cashout.png",
            href:"/cash-out"
        },
        {
            name: "Cashin",
            image: "https://i.ibb.co/0hkLSn2/cashin.png",
            href:"/cashin"
        },
    ]




    return (
        <div className="mt-10 w-full lg:w-[70%] mx-auto">

            <div className="my-5 ml-10">
            <BreadCrumb
        items={[
          {
            label: "Home",
            link: "/",
          },
          {
            label: "Transation",
            link: "/transation",
          },
        ]}
      />
            </div>
            
            <div className="flex flex-col md:flex-row justify-around items-center ">
                {
                    items.map((item:ITransationItems, index:number)=> (
                        <Link style={{border:"1px solid #A9A9A9"}} to={item.href} className="no-underline w-60 h-60 p-3 rounded text-center" key={index}>
                            <div className="">
                                <img className="w-54 h-40" src={item.image} />
                            </div>
                            <p className="text-lg text-black">{item.name}</p>
                        </Link>
                    ))
                }
            </div>
        </div>
    );
};

export default Transation;