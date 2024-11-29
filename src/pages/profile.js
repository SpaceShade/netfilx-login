import "./profile.css"
import { useNavigate } from 'react-router-dom';
const Profile =()=>{
    const navigate = useNavigate();
    const handleMainClick = () => {
    navigate('./main-page');
    }
    return (
        <div class="container-profile">
        <h1 className="h1-profile">เลือกผู้ชม</h1>
        <div class="profiles">

            <div class="profile" onClick={handleMainClick}>
                <img src="https://bernardojachegou.github.io/mestre-codigos-frontend/assets/profile-pic-02.jpg" class="profile-icon"/>
                <p>Name1</p>
            </div>
            <div class="profile" onClick={handleMainClick}>
                <img src="https://wallpapers.com/images/thumbnail/netflix-profile-pictures-1400-x-1400-fbsjevohrqwsk8mu.webp" class="profile-icon"/>
                <p>Name2</p>
            </div>
            <div class="profile" onClick={handleMainClick}>
                <img src="https://wallpapers.com/images/thumbnail/netflix-profile-pictures-1000-x-1000-62wgyitks6f4l79m.webp" class="profile-icon"/>
                <p>Name3</p>
            </div>
            <div class="profile" onClick={handleMainClick}>
                <img src="https://wallpapers.com/images/high/netflix-profile-pictures-1000-x-1000-2fg93funipvqfs9i.webp" class="profile-icon"/>
                <p>Name4</p>
            </div>
            <div class="profile" onClick={handleMainClick}>
                <img src="https://wallpapers.com/images/high/netflix-profile-pictures-1000-x-1000-w3lqr61qe57e9yt8.webp" class="profile-icon"/>

                <p>Name5</p>
            </div>
        </div>
        <button class="manage-button">จัดการโปรไฟล์</button>
    </div>
  )
} 
export default Profile