import React, { useState } from 'react';
import "./login.css";
import translate from"../assests/translate.png"
import { useNavigate } from 'react-router-dom';
import cancle from "../assests/cancel.png"
const Login =()=>{
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const validate = () => {
    let valid = true;

    if (!email) {
      setEmailError("โปรดป้อนอีเมลหรือหมายเลขโทรศัพท์ที่ถูกต้อง");
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError("โปรดป้อนอีเมลหรือหมายเลขโทรศัพท์ที่ถูกต้อง");
      valid = false;
    } else {
      setEmailError("");
    }

    if (!password) {
      setPasswordError("รหัสผ่านต้องมีจำนวนระหว่าง 4 ถึง 60 อักขระ");
      valid = false;
    } else if (password.length < 4 || password.length > 60) {
      setPasswordError("รหัสผ่านต้องมีจำนวนระหว่าง 4 ถึง 60 อักขระ");
      valid = false;
    } else {
      setPasswordError("");
    }

    return valid;
  };
  const navigate = useNavigate();
  const handleLoginClick = () => {
    if (validate()) {
      navigate('./profile');
    }
  };
  return (
    <div className="bg" style={{backgroundImage: 'url("https://1.bp.blogspot.com/-7SccmKdnfXg/YE2xPTgsP_I/AAAAAAAAABk/Zk-RCXqlA7wlK5kYrBth0MnKCffyuDV1gCLcBGAsYHQ/s2000/neflixtv.jpg")', 
        backgroundSize: "100%",
        height:"100vh"
    }}>
        <div className="overlay"></div>
      <div className='logo'>
        <img src='https://pngimg.com/uploads/netflix/netflix_PNG25.png' width={148} />
      </div>
        <div className='container'>
            <div className='form'>
            <h1 className='h1-login'>เข้าสู่ระบบ</h1> 
                <div className='input-group'></div>
                <input type="text" placeholder="อีเมลหรือหมายเลขโทรศัพท์มือถือ"
                 value={email}
                 onChange={(e) => setEmail(e.target.value)}/>
                 {emailError && <p className="error"><img src={cancle} className='cancle'/>{emailError}</p>}
                <input type="password" placeholder="รหัสผ่าน"
                 value={password}
                 onChange={(e) => setPassword(e.target.value)}/>
                  {passwordError && <p className="error"><img src={cancle} className='cancle'/>{passwordError}</p>}
                  
                <button className="login-btn" onClick={handleLoginClick}>
                เข้าสู่ระบบ
                </button>
                <h3 className="h3">หรือ</h3>
                <button className="use-password-login-btn">ใช้รหัสสำหรับเข้าสู่ระบบ</button>
                <h3 className="h3-1">หากลืมรหัสผ่าน</h3>
            </div> 
            <div className="remember-me">
                <input type="checkbox" id="remember" />
                <label htmlFor="remember" className='remember-text'>จดจำข้อมูลของฉัน</label>
            </div>
            <div className="text">
                <h4 className="gray">
                หากยังไม่คุ้นกับ Netflix{" "}
                <a href="/signup" className="enroll">
                สมัครลงทะเบียนตอนนี้
                </a>
                </h4>
            </div>
            <div className="recaptcha-info">
                <h5 className="gray2">
                หน้านี้ได้รับการป้องกันโดย Google reCAPTCHA เพื่อตรวจสอบว่าคุณไม่ใช่บ็อต{" "}
                <a href="/more-info">ดูข้อมูลเพิ่มเติม</a>
            </h5>
            </div>
        </div>
        <div className="footer">
            <div className="footer-head-text">
              <h3>หากมีคำถาม โทร 1-800-012-294</h3>
            </div>
            <div className="footer-links">
              <div>
                <a href="/">คำถามที่พบบ่อย</a>
              </div>
              <div>
                <a href="/">ศูนย์ช่วยเหลือ</a>
              </div>
              <div>
                <a href="/">ข้อกำหนดการใช้งาน</a>
              </div>
              <div>
                <a href="/">ความเป็นส่วนตัว</a>
              </div>
              <div>
                <a href="/">การตั้งค่าคุกกี้</a>
              </div>
              <div>
                <a href="/">ข้อมูลบริษัท</a>
              </div>
            </div>
                <div className="footer-language">
                
                  <select>
                  <img src={translate} alt="translate"  />
                    <option value="th">ไทย</option>
                    <option value="en">English</option>
                  </select>
                </div>
          </div>
    </div>
  )
}

export default Login;
