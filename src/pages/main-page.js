import "./main-page.css";
import search from "../assests/search.png";
import noti from "../assests/notification.png";
import { useState, useEffect } from "react";
import arrow from "../assests/arrow-down.png";

const Main = () => {
  const [slideIndex, setSlideIndex] = useState(0); // For slides
  const [isPopupVisible, setIsPopupVisible] = useState(false); // For the popup visibility

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex((prevIndex) => (prevIndex + 1) % 6); // Automatically change slide every 5 seconds
    }, 5000);
    return () => clearInterval(interval); // Clear the interval on component unmount
  }, []);

  const changeSlide = (n) => {
    setSlideIndex((prevIndex) => (prevIndex + n + 6) % 6); // Navigate slides
  };

  const togglePopup = () => {
    setIsPopupVisible((prevVisible) => !prevVisible); // Toggle popup visibility
  };

  useEffect(() => {
    const navbar = document.querySelector(".navbar");

    const handleScroll = () => {
      if (window.scrollY > 50) { // Trigger when scrolled down 50px
        navbar.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
      } else {
        navbar.style.backgroundColor = "rgba(0, 0, 0, 0.2)";
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="main-comtainer">
      <div
        className="main-bg"
        style={{
          backgroundImage:
            'url("https://th.bing.com/th/id/R.4a0ad92dc4e212431952f3b2ae2cdc8d?rik=lOH6GyaVl%2fTw9w&riu=http%3a%2f%2fwww.hdwallpapers.in%2fdownload%2fanimation_movie_sing-2560x1600.jpg&ehk=lPWxPkoL%2fh3wZVc9EYRJct%2fHhbBwGVxMzzc244Uh20I%3d&risl=&pid=ImgRaw&r=0")',
          backgroundSize: "100%",
          height: "100vh",
        }}
      >
        <div className="navbar">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/300px-Netflix_2015_logo.svg.png"
            alt="Netflix Logo"
            className="main-logo"
          />
          <nav>
            <ul>
              <li>
                <a href="/home">หน้าหลัก</a>
              </li>
              <li>
                <a href="/tv">รายการทีวี</a>
              </li>
              <li>
                <a href="/movies">ภาพยนตร์</a>
              </li>
              <li>
                <a href="/new">มาใหม่และกำลังฮิต</a>
              </li>
              <li>
                <a href="/favourites">รายการของฉัน</a>
              </li>
              <li>
                <a href="/language">เลือกดูตามภาษา</a>
              </li>
            </ul>
          </nav>
          <div className="nav-icons">
            <img src={search} alt="Search Icon" />
            <img src={noti} alt="Notification Icon" />
            <img src='https://bernardojachegou.github.io/mestre-codigos-frontend/assets/profile-pic-02.jpg' alt="profile" className="main-profile-img"
             style={{
              height: "30px", width: "30px"
            }}/>
             <div className="popup-container">
              <img
                src={arrow}
                alt="Arrow Icon"
                className="arrow"
                onClick={togglePopup} 
                style={{ cursor: "pointer" }}
              />
              {isPopupVisible && (
                <div className="popup">
                  <ul>
                    <a href="/">Name2</a>
                    <a href="/">Name3</a>
                    <a href="/">Name4</a>
                    <a href="/">Name5</a>
                    <a href="/">จัดการโปรไฟล์</a>
                    <a href="/">ย้ายโปรไฟล์</a>
                    <a href="/">บัญชี</a>
                    <a href="/">ศูนย์ช่วยเหลือ</a>
                    <a href="/">ออกจากระบบ</a>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="info-section">
          <h1>Sing ร้องจริง เสียงจริง</h1>
          <p>บัสเตอร์ มูน โคอาล่าเจ้าของโรงละครที่กำลังล้มละลาย จัดประกวดร้องเพลงเพื่อกู้ชื่อเสียง แต่เกิดข้อผิดพลาดโฆษณาเงินรางวัล $100,000 เกินงบจริง สร้างความวุ่นวายทั้งโรงละครและผู้เข้าแข่งขัน!</p>
          <button className="play-btn">เล่น</button>
          <button className="info-btn">ข้อมูลเพิ่มเติม</button>
        </div>
        <h1 className="main-h1">อนิเมชั่นฝรั่ง</h1>
      </div>
      <div className="card-container">
          <div className="slide-card">
              <div className="card">
                <img src='https://images.tv.osn.com/colossus/images/series/1259165556/landscapewithtitle/1259165556_LTT.jpg' alt="card"/>
                <img src='https://occ-0-2301-116.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABaPdShOnlX-pnA3fPeycYjwxx2lkpiZIpzAQDtlDqPv6fwlorYenD9D5EL1_jJl3kRLWNC2Df7llwAkAMqPLC9Lln9ffLwXwYCUF.jpg?r=a1d' alt="card"/>
                <img src='https://www.nflix.pl/wp-content/uploads/2018/03/netflix-Minions-bg1-1.jpg' alt="card"/>
                <img src='https://ntvb.tmsimg.com/assets/p23903564_v_h8_aa.jpg?w=960&h=540' alt="card"/>
                <img src='https://1.bp.blogspot.com/-fLU8rIxIl44/YOVrXYC7pCI/AAAAAAAAMus/B2hmh8OXzkMoyi-zU8c3765Yg5ERWFtCACLcBGAsYHQ/w640-h640/gambar%2Bmy%2Blittle%2Bpony%2B%25287%2529.jpg' alt="card"/>
                <img src='https://www.nflix.pl/wp-content/uploads/2017/08/netflix-Zig-and-Sharko-bg-1.jpg' alt="card"/>
                
                {/* <img src='https://i.kinja-img.com/gawker-media/image/upload/s--q2hePmXj--/c_fill,fl_progressive,g_center,h_900,q_80,w_1600/18j3yslje0n4ijpg.jpg' alt="card"/>
                <img src='https://i2.wp.com/lifeloveandthepursuitofplay.com/wp-content/uploads/dragon.jpg' alt="card"/>
                <img src='https://ntvb.tmsimg.com/assets/p176527_v_h8_am.jpg?w=960&h=540' alt="card"/>
                <img src='https://occ-0-3638-358.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABY0CB9rBFKI7FC7TWr5nA7A_d6KHbZdfC0vG7zAWIonDnvfGHGddwbhkrj2gN8ETjK4PyPjetqf4OpZ-KnD3nB3WhmTyX1Obkw8eoNBi-SARM4keyv-D7Lo0WTwqRdLBsnUBYw.jpg?r=987' alt="card"/>
                <img src='https://external-preview.redd.it/ngMHP2NGQddf3lu0utSXDseeRIxKV7z3Fxn-mPifMAM.jpg?auto=webp&s=33b07ee0fb39dbc7f4f9d2e6e067ae740731a413' alt="card"/>
                <img src='https://th.bing.com/th/id/R.6ca8ae543e7ddfb9bd9c8f2aa39a7084?rik=HEeAOFLis14suQ&pid=ImgRaw&r=0' alt="card"/> */}
              </div>
                <h1>ใหม่ที่ Netflix</h1>
                <div className="card">
                <img src='https://i-viaplay-com.akamaized.net/viaplay-prod/966/204/1682666628-41ef7c2f4f5a8121adb8e23e51ff1901f49ee206.jpg?width=448&height=252' alt="card"/>
                <img src='https://images-na.ssl-images-amazon.com/images/S/pv-target-images/6c4976e6339450fc877d3af45bf313c5d56a0f9b3d88ae16eb6be22b46b26157._UR1920,1080_RI_SX356_FMjpg_.jpg' alt="card"/>
                <img src='https://digitalt.tv/wp-content/uploads/imports/Tex-Mex-Motors.jpg' alt="card"/>
                <img src='https://attackofthefanboy.com/wp-content/uploads/2023/01/Ranma-One-Half.jpg' alt="card"/>
                <img src='https://elpopular.cronosmedia.glr.pe/original/2024/10/08/670563ac1c0bf2566c3ab633.jpg' alt="card"/>
                <img src='https://lifeincartoonmotion.com/wp-content/uploads/2023/10/kidnap-e0b8a5e0b8b1e0b89a-e0b888e0b989e0b8b2e0b887-e0b8a5e0b8b1e0b881-gmmtv-2024-part-1.jpeg?w=1024' alt="card"/>
                </div>
          </div>
        </div>
    </div>
  );
};

export default Main;
