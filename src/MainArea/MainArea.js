import React from "react";
import { AiFillFileImage } from "react-icons/ai";
import {
  FaAngleDown,
  FaCommentAlt,
  FaFacebookMessenger,
  FaFontAwesomeFlag,
  FaGrin,
  FaMedrt,
  FaRegShareSquare,
  FaRegThumbsUp,
  FaSearch,
  FaUserFriends,
} from "react-icons/fa";
import { MdMoreHoriz, MdVideoCall } from "react-icons/md";
import "./MainArea.css";
function MainArea() {
  return (
    <div className="Main">
      <div className="Rside">
        <div className="Profile">
          <img
            src="/images/dp.jpg"
            alt="dp"
            style={{ height: "35px", padding: "1rem" }}
          />
          Saifalikhan Pathan
        </div>
        <div className="Pro">
          <FaMedrt color="red" fontSize="2rem" />
          <div>COVID-19 INFORMATION CENTER</div>
        </div>
        <br></br>
        <div className="Pro">
          <FaFontAwesomeFlag color="green" fontSize="1.7rem" />
          <div>Page</div>
        </div>
        <br></br>
        <div className="Pro">
          <FaUserFriends color="blue" fontSize="1.7rem" />
          <div>Friends</div>
        </div>
        <br></br>
        <div className="Pro">
          <FaFacebookMessenger color="blue" fontSize="1.7rem" />
          <div>Messenger</div>
        </div>
        <br></br>
        <div className="Pro">
          <FaAngleDown color="blue" fontSize="1.7rem" />
          <div>See More</div>
        </div>
        <br></br>
        <div className="Profiles">
          <img
            src="/images/logo1.jpg"
            alt="logo"
            style={{ height: "45px", padding: "1rem" }}
          />
          React Developer
        </div>
        <div className="Profiles">
          <img
            src="/images/logo2.jpg"
            alt="logo"
            style={{ height: "45px", padding: "1rem" }}
          />
          ReactJs Export Community
        </div>
        <div className="Profiles">
          <img
            src="/images/logo3.jpg"
            alt="logo"
            style={{ height: "45px", padding: "1rem" }}
          />
          CSS current Affairs and General Knowledge
        </div>
        <div className="Profiles">
          <img
            src="/images/logo4.jpg"
            alt="logo"
            style={{ height: "45px", padding: "1rem" }}
          />
          Javascript Frameworks
        </div>
        <div className="Profiles">
          <img
            src="/images/logo5.jpg"
            alt="logo"
            style={{ height: "45px", padding: "1rem" }}
          />
          Programming jokes
        </div>
        <div className="Pross">
          <FaAngleDown color="blue" fontSize="1.7rem" />
          See more
        </div>
      </div>

      <div className="MainArea">
        <div className="addStory">
          <div className="Story">
            <img
              src="/images/ri1.jpg"
              alt="fb"
              style={{ height: "50px", width: "50px", borderRadius: "50%" }}
            />
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            Neha Sharma
          </div>
          <div className="Story">
            <img
              src="/images/ri2.jpg"
              alt="fb"
              style={{ height: "50px", width: "50px", borderRadius: "50%" }}
            />
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            Jessey Pinkman
          </div>
          <div className="Story">
            <img
              src="/images/ri3.jpg"
              alt="fb"
              style={{ height: "50px", width: "50px", borderRadius: "50%" }}
            />
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            Heisenberg
          </div>
          <div className="Story">
            <img
              src="/images/ri4.jpg"
              alt="fb"
              style={{ height: "50px", width: "50px", borderRadius: "50%" }}
            />
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            Tom Cruise
          </div>
        </div>
        <div className="message">
          <div className="text">
            <div className="Post">
              <img src="/images/dp.jpg" alt="Fb" />
              <input type="Mind" placeholder="What's on your mind,Saif?" />
            </div>
            <div className="Call">
              <div className="ico">
                <div className="icone">
                  <MdVideoCall fontSize="2.2rem" color="red" />
                  <div>LiveVideo</div>
                </div>
                <div className="icone">
                  <AiFillFileImage fontSize="2.2rem" color="green" />
                  <div>Photo/Video</div>
                </div>
                <div className="icone">
                  <FaGrin fontSize="2.2rem" color="orange" />
                  <div>Feeling/Activity</div>
                </div>
              </div>
            </div>
          </div>
          <br></br>
          <div className="Room">
            <div className="RoomLnk">
              <div className="Rooms">
                <MdVideoCall fontSize="2rem" color="brown" />
                <div>Rooms</div>
              </div>
              <div className="Create">
                <a href="createRoom">Create</a>
              </div>
            </div>
            <div className="Images">
              <div className="imag">
                <img
                  src="/images/zaheena.jpg"
                  alt="Img"
                  style={{
                    height: "40px",
                    width: "40px",
                    borderRadius: "50px",
                  }}
                />
              </div>
              <div className="imag">
                <img
                  src="/images/ritvik.jpg"
                  alt="Img"
                  style={{
                    height: "40px",
                    width: "40px",
                    borderRadius: "50px",
                  }}
                />
              </div>
              <div className="imag">
                <img
                  src="/images/humera.jpg"
                  alt="Img"
                  style={{
                    height: "40px",
                    width: "40px",
                    borderRadius: "50px",
                  }}
                />
              </div>
              <div className="imag">
                <img
                  src="/images/nishank.jpg"
                  alt="Img"
                  style={{
                    height: "40px",
                    width: "40px",
                    borderRadius: "50px",
                  }}
                />
              </div>
              <div className="imag">
                <img
                  src="/images/ww.jpg"
                  alt="Img"
                  style={{
                    height: "40px",
                    width: "40px",
                    borderRadius: "50px",
                  }}
                />
              </div>
              <div className="imag">
                <img
                  src="/images/ri5.jpg"
                  alt="Img"
                  style={{
                    height: "40px",
                    width: "40px",
                    borderRadius: "50px",
                  }}
                />
              </div>
            </div>
            <div className="Posted">
              <div className="poster">
                <div className="Saif">
                  <img
                    src="/images/dp.jpg"
                    alt="Img"
                    style={{
                      height: "50%",
                      width: "10%",
                      borderRadius: "100%",
                    }}
                  />
                  Saifalikhan Pathan
                  <div className="update">updated his cover photo.</div>
                </div>
                <div className="edit">
                  <MdMoreHoriz fontSize="1.6rem" />
                </div>
                <div className="quote">I feel like I am in a dream</div>
                <br></br>
                <div className="FacebookImg">
                  <img
                    src="/images/cover.jpg"
                    alt="dp"
                    style={{ height: "auto", width: "100%" }}
                  />
                </div>
                <div className="Comment">
                  <div className="Like">
                    <FaRegThumbsUp color="grey" />
                    like
                  </div>
                  <div className="Like">
                    <FaCommentAlt color="grey" />
                    Comment
                  </div>
                  <div className="Like">
                    <FaRegShareSquare color="grey" />
                    share
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="Lside">
        <div className="Contact">
          <div className="Contacts">Contacts</div>

          <div className="chaticon">
            <div className="icons">
              <MdVideoCall fontSize="1.6rem" />
            </div>
            <div className="icons">
              <FaSearch fontSize="1.6rem" />
            </div>
            <div className="icons">
              <MdMoreHoriz fontSize="1.6rem" />
            </div>
          </div>
        </div>
        <div className="concise">
          <div className="Profilee">
            <img
              src="/images/zaheena.jpg"
              alt="logo"
              style={{ height: "35px", padding: "1rem" }}
            />
            Zaheena
          </div>
          <div className="Profilee">
            <img
              src="/images/ritvik.jpg"
              alt="logo"
              style={{ height: "35px", padding: "1rem" }}
            />
            Ritvik
          </div>
          <div className="Profilee">
            <img
              src="/images/nishank.jpg"
              alt="logo"
              style={{ height: "35px", padding: "1rem" }}
            />
            Nishank
          </div>
          <div className="Profilee">
            <img
              src="/images/humera.jpg"
              alt="logo"
              style={{ height: "35px", padding: "1rem" }}
            />
            Humera
          </div>
          <div className="Profilee">
            <img
              src="/images/ww.jpg"
              alt="logo"
              style={{ height: "35px", padding: "1rem" }}
            />
            Walter White
          </div>
          <div className="Profilee">
            <img
              src="/images/ri5.jpg"
              alt="logo"
              style={{ height: "35px", padding: "1rem" }}
            />
            Pinkman
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainArea;
