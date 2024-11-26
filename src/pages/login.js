import React from 'react';
import "./login.css";

function Login() {
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
            <h1>เข้าสู่ระบบ</h1> 
                <div className='input-group'></div>
                <input type="text" placeholder="อีเมลหรือหมายเลขโทรศัพท์มือถือ"/>
                <input type="password" placeholder="รหัสผ่าน"/>
                <button className="login-btn" >
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
                <h5 className="gray">
                หน้านี้ได้รับการป้องกันโดย Google reCAPTCHA เพื่อตรวจสอบว่าคุณไม่ใช่บ็อต{" "}
                <a href="/more-info">ดูข้อมูลเพิ่มเติม</a>
            </h5>
            </div>
        </div>
        <div className='footer'>
            <div className='footer-head-text'>
            <h3>หากมีคำถาม โทร 1-800-012-294</h3>
            </div>
            <div className='footer-text'>
            <h5>คำถามที่พบบ่อย</h5>
            <h5>ศูนย์ช่วยเหลือ</h5>
            <h5>ข้อกำหนดการใช้งาน</h5>
            <h5>ความเป็นส่วนตัว</h5>
            <h5>การตั้งค่าคุกกี้</h5>
            <h5>ข้อมูลบริษัท</h5>
            </div>
        </div>
    </div>
  )
}

export default Login
