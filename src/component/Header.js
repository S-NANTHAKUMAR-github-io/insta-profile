import React, { useState } from "react";
import { Layout, Typography, Button, Dropdown } from "antd";
import { useNavigate } from "react-router-dom";
import { useLoader } from "../context/LoaderContext";
import CustomModal from "../HOC/Modal";
import HumanIcon from "../assets/human icon.png";
const { Header } = Layout;

const Navbar = () => {
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  const name = userInfo ? userInfo.email.split("@")[0] : "Unknown";
  const email = userInfo ? userInfo.email : "Unknown";

  //react router navigate
  const navigate = useNavigate();

  //to states for handling modal
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const [showProfileModal, setShowProfileModal] = useState(false);

  //to access loader globally from LoaderContext page
  const { startLoading, stopLoading } = useLoader();

  //For Modal open
  const handleProfileClick = () => {
    setShowProfileModal(true); // Set state to show profile modal
  };

  const handleLogoutClick = () => {
    setShowLogoutModal(true);
  };

  //For Modal Close
  const handleCancelLogout = () => {
    setShowLogoutModal(false);
  };
  const handleCancelProfile = () => {
    setShowProfileModal(false);
  };

  //Confirmation for logout
  const handleLogoutConfirmed = async () => {
    startLoading();
    setTimeout(() => {
      navigate("/");
      localStorage.clear();
      setShowLogoutModal(false);
      stopLoading();
    }, 2000);
  };

  const items = [
    {
      key: "1",
      label: (
        <Button
          type="link"
          onClick={handleProfileClick}
          className="text-[#374151] text-[14px] font-poppins border-none outline-none shadow-none"
        >
          Profile
        </Button>
      ),
    },
    {
      key: "2",
      label: (
        <Button
          type="link"
          onClick={handleLogoutClick}
          className="text-[#374151] text-[14px] font-poppins border-none outline-none shadow-none"
        >
          Logout
        </Button>
      ),
    },
  ];
  return (
    <>
      <Header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 1,
          width: "100%",
          display: "flex",
          alignItems: "center",
          backgroundColor: "white",
          justifyContent: "space-between",
        }}
      >
        <img
          src="https://res.cloudinary.com/dlapfxsrz/image/upload/v1712225134/wj6a2v1glqceuuitkrtl.png"
          alt="insta-logo"
          className="h-[60%]"
        />
        <div className="flex flex-row">
          <Button className="group h-10 pl-5 flex items-center  bg-gradient-to-r from-pink-600 to-purple-700 rounded-md text-sm text-white outline-none border-none font-poppins">
            Upload Post
          </Button>
          <Dropdown
            menu={{ items }}
            placement="bottomRight"
            arrow={{ pointAtCenter: true }}
          >
            <img
              src={HumanIcon}
              alt="Logo"
              style={{ marginLeft: "48px", height: "40px" }}
              className="rounded-3xl hidden sm:block "
            />
          </Dropdown>
        </div>
      </Header>

      {/* For Modal view */}
      <CustomModal
        open={showLogoutModal}
        onCancel={handleCancelLogout}
        width={400}
        title={
          <div className="">
            <h4 className="text-[#000] font-poppins font-semibold no-underline items-center text-[20px] mb-[30px]">
              Are you sure you want to exit?
            </h4>
          </div>
        }
        body={
          <div className="flex flex-row items-start gap-[20px]  ">
            <div className="text-[#000] font-poppins relative text-md not-italic font-medium leading-4 no-underline flex items-center">
              You will be returned to the login screen.
            </div>
          </div>
        }
        footer={
          <div className="mt-[35px]">
            <Button
              variant="light"
              onClick={handleCancelLogout}
              className="gap-[30px] relative right-[30px] text-[#000] font-poppins "
            >
              Cancel
            </Button>
            <Button
              style={{
                backgroundColor: "#387ADF",
                borderColor: "#387ADF",
                color: "white",
              }}
              onClick={handleLogoutConfirmed}
            >
              Logout
            </Button>
          </div>
        }
      />

      <CustomModal
        open={showProfileModal} // Use showProfileModal state to control visibility
        onCancel={handleCancelProfile} // Implement handleCancelProfile function
        width={400}
        title={
          <div className="">
            <h4 className="text-[#000] font-poppins font-semibold no-underline items-center text-[20px] mb-[30px]">
              Profile
            </h4>
          </div>
        }
        body={
          <div>
            <div className="text-[#000] font-poppins relative text-md not-italic font-medium leading-4 no-underline flex items-center gap-y-4 ">
              <div>Name: {name}</div>
            </div>
            <div className="text-[#000] font-poppins relative text-md not-italic font-medium leading-4 no-underline flex items-center top-[20px]">
              <div>Email: {email}</div>
            </div>
          </div>
        }
        footer={
          <div className="mt-[35px]">
            <Button
              variant="light"
              style={{
                backgroundColor: "#387ADF",
                borderColor: "#387ADF",
                color: "white",
              }}
              onClick={handleCancelProfile}
            >
              Close
            </Button>
          </div>
        }
      />
    </>
  );
};

export default Navbar;
