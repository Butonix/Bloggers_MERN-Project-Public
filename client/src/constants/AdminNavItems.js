import { FaUsers } from "react-icons/fa";
import { BsFillFileEarmarkPostFill } from "react-icons/bs";
import { MdReport } from "react-icons/md";
import { BiPaperPlane } from "react-icons/bi";
import { AiOutlinePaperClip } from "react-icons/ai";
import * as ROUTES from "../constants/routes";

export const AdminNavItems = [
  {
    name: "Welcome",
    path: ROUTES.ADMIN_WELCOME,
    icon: <AiOutlinePaperClip size={25} color="green" />,
  },
  { name: "Users", path: ROUTES.ADMIN_USERS, icon: <FaUsers size={25} color="#1284F7" /> },
  {
    name: "Blogs",
    path: ROUTES.ADMIN_BLOGS,
    icon: <BsFillFileEarmarkPostFill color="#EE7B20" size={25} />,
  },
  { name: "Reports", path: ROUTES.ADMIN_REPORTS, icon: <MdReport size={25} color="#F44520" /> },
  { name: "SOON", path: "#!", icon: <BiPaperPlane color="#A320EE" size={25} /> },
];
