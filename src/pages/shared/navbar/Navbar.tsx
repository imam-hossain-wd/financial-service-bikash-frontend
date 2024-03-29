/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Dropdown } from "antd";
import { Link} from "react-router-dom";
import { LoginOutlined, UserOutlined } from "@ant-design/icons";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { clearAccessToken } from "../../../redux/slice/authSlice";


const Navbar = () => {

  const dispatch = useAppDispatch()
  //@ts-ignore
  const accessToken = useAppSelector((state) => state?.auth?.accessToken);

  
  const role = "user";
  const accountItems = [
    {
      key: "1",
      label: (
        <div>
          <div className="flex flex-col">
            <Button type="text">
              <Link to={`/${role}/account`}> Account</Link>
            </Button>
            <Button type="text">
              <Link to={`/${role}/transation-history`}> Transation History</Link>
            </Button>
            <Button type="text">
              <Link to={`/${role}/manage-user`}> Manage User</Link>
            </Button>
            <Button
            onClick={()=>dispatch(clearAccessToken())}
            danger type="text">
              Log out
            </Button>
          </div>
        </div>
      ),
    },
  ];



  return (
    <section className="shadow-md bg-white">
      <div className="flex justify-between p-3  w-[85%] mx-auto">
        <div className="flex items-center">
     
         <Link to="/">
         <img
            className="w-14 h-12 rounded-full"
            src="https://i.ibb.co/rpjvK4r/logo.jpg"
          />
         </Link>
        </div>
        <div className="flex items-center justify-center">
      
        <div className="">
        {accessToken ? (
              <Dropdown menu={{ items: accountItems }} className="">
                <Button className="text-xl h-10 w-10 rounded-full flex justify-center items-center ">
                  <UserOutlined />
                </Button>
              </Dropdown>
            ) : (
              <Link className="no-underline " to="/login">
                <Button  className="w-28 h-10 flex justify-center items-center rounded-lg text-xl">
                  <LoginOutlined />
                  Login
                </Button>
              </Link>
            )}
        </div>
        </div>
      </div>
    </section>

  );
};

export default Navbar;
