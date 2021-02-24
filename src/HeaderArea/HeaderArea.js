import React from "react";
import "./HeaderArea.css";
import { AiFillHome, AiOutlineSearch, AiOutlineWallet } from "react-icons/ai";
import {
  FaBell,
  FaCaretDown,
  FaFacebookMessenger,
  FaPlusCircle,
  FaRegFlag,
  FaUsers,
} from "react-icons/fa";
import { MdOndemandVideo } from "react-icons/md";
import MainArea from "./../MainArea/MainArea";

function HeaderArea() {
  return (
    <div className="HomePage">
      <div className="header">
        <div className="first-header">
          <div className="logo">
            <img
              src="/images/facebook.png"
              alt="logo"
              style={{ height: "40px", padding: "1rem" }}
            />
          </div>
          <div className="Search">
            <AiOutlineSearch style={{ height: "4rem" }} />
            <input placeholder="Search Facebook" type="Search" />
          </div>
        </div>
        <div className="middle-header">
          <div className="Icon">
            <AiFillHome fontSize="2.1rem" color="#1877F2" />
          </div>
          <div className="Icon">
            <FaRegFlag fontSize="1.8rem" />
          </div>
          <div className="Icon">
            <MdOndemandVideo fontSize="1.8rem" />
          </div>
          <div className="Icon">
            <FaUsers fontSize="1.8rem" />
          </div>
          <div className="Icon">
            <AiOutlineWallet fontSize="1.8rem" />
          </div>
        </div>

        <div className="third-header">
          <div className="Pluss">
            <img
              src="/images/dp.jpg"
              alt="profile-pic"
              style={{ height: "45px" }}
            />
            <div>Saifalikhan</div>
            <div className="Plus">
              <FaPlusCircle fontSize="1.3rem" />
            </div>
            <div className="Plus">
              <FaFacebookMessenger fontSize="1.3rem" />
            </div>
            <div className="Plus">
              <FaBell fontSize="1.3rem" />
            </div>
            <div className="Plus">
              <FaCaretDown fontSize="1.3rem" />
            </div>
          </div>
        </div>
      </div>
      <div>
        <MainArea />
      </div>
    </div>
  );
}

export default HeaderArea;
