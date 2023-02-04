import React, { useState } from "react";
import Logo from "../assets/Logo.png";
import MobileNavbar from "./MobileNavbar";
import NavItems from "./NavItems";
import AuthButton from "./AuthButton";
import PublishButton from "./PublishButton";
import { TbBulb } from "react-icons/tb";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signOutAction } from "../store/actions/authActions";
import * as ROUTES from "../constants/routes";
import { Link } from "react-router-dom";
import { useDarkModeContext, useModalContext } from "../context";
import { AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [toggleMobileNav, setToggleMobileNav] = useState(false);
  const { isAuthenticated, user } = useSelector((state) => state.auth);
  const { toggleDarkMode } = useDarkModeContext();
  const { setIsModalOpen } = useModalContext();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleAuth = (action) => {
    if (action === "Sign Up") {
      navigate(ROUTES.AUTH);
    } else {
      dispatch(
        signOutAction(() => {
          navigate(ROUTES.HOME);
        })
      );
    }
  };

  return (
    <div className="w-full px-[7%] mx-auto py-10 dark:bg-[#33373E] px-5 dark:text-[#F7F7F7] relative flex justify-between align-center">
      <Link to={ROUTES.HOME}>
        <img src={Logo} alt="logo" className="md:h-[49px] h-[35px]" />
      </Link>
      <div className="lg:flex hidden align-center">
        <div className="mr-10 flex align-center">
          <button
            type="button"
            className="mr-5 cursor-pointer hover:text-[#2D5CD0] dark:hover:text-[#ebebed]"
            onClick={toggleDarkMode}
          >
            <TbBulb size={30} />
          </button>
        </div>

        <ul className="flex items-center">
          <NavItems userId={user?._id} isAuthenticated={isAuthenticated} role={user?.role} />
        </ul>
        {isAuthenticated && <PublishButton handleClick={() => setIsModalOpen(true)} />}
        <AuthButton isAuthenticated={isAuthenticated} handleAuth={handleAuth} />
      </div>
      <button onClick={() => setToggleMobileNav(true)} className="lg:hidden block text-2xl">
        <AiOutlineMenu />
      </button>
      {toggleMobileNav && (
        <MobileNavbar
          setToggleMobileNav={setToggleMobileNav}
          userId={user?._id}
          role={user?.role}
          isAuthenticated={isAuthenticated}
          handleAuth={handleAuth}
          handlePublishButtonClick={() => setIsModalOpen(true)}
        />
      )}
    </div>
  );
};

export default Navbar;
