/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { Avatar, Layout, Menu } from "antd";
import {UserOutlined} from "@ant-design/icons";


import {
  LeftSquareOutlined,
  RightSquareOutlined,
} from "@ant-design/icons";

import { getSidebarItems } from "./SidebarItems";
// import Loading from "../../pages/shared/loading/Loading";


const { Sider } = Layout;

const SideBar = () => {
  const [collapsed, setCollapsed] = useState(false);

//   const userInfo = getUserInfo()

    //@ts-ignore
    // const id = userInfo?._id as string 
    //@ts-ignore
    // const role = userInfo?.role as string
    const role = "user";

    // const {data, isLoading}= useGetSingleUserQuery(id);
    const textColor = "black"
    const sidebarItems = getSidebarItems(role,textColor )


    // if(isLoading){
    //     return <Loading />
    // }
    const image = "https://i.ibb.co/whKfdwp/Online-transactions-rafiki.png";
    // const image = data?.data?.userImage;
    
  return (
    <Sider
      className="bg-white text-black"
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
      width={230}
      collapsedWidth={80}
      theme="light"
      trigger={
        <div className="trigger text-3xl">
          {collapsed ? <span className="ml-6"><RightSquareOutlined /></span> : <span className="ml-40"><LeftSquareOutlined /></span>}
        </div>
      }
      style={{
        overflow: "auto",
        height: "550px",
        position: "sticky",
        left: 0,
        top: 0,
        bottom: 0,
      }}
    >
      {!collapsed && <div className="flex flex-col justify-center items-center mt-4 -ml-3 -mb-7 hidden lg:flex">
                {
                   image ? <img className="" src={image}/> :<Avatar size={80} icon={<UserOutlined />} />
                   
                }
                <p className="mt-2 text-lg">{data?.data?.name || "AWARAPAN"}</p>
            </div>}
      <Menu
      className="mt-10 "
        defaultSelectedKeys={["1"]}
        mode="inline"
        items={sidebarItems}
      />
    </Sider>
  );
};

export default SideBar;
