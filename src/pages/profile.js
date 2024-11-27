import "./profile.css"
const Profile =()=>{
    return (
        <div class="container">
        <h1>เลือกผู้ชม</h1>
        <div class="profiles">
            <div class="profile">
                <div class="profile-icon blue"></div>
                <p>Name1</p>
            </div>
            <div class="profile">
                <div class="profile-icon red"></div>
                <p>Name2</p>
            </div>
            <div class="profile">
                <div class="profile-icon white">
                </div>
                <p>Name3</p>
            </div>
            <div class="profile">
                <div class="profile-icon green"></div>
                <p>Name4</p>
            </div>
            <div class="profile">
                <div class="profile-icon yellow"></div>
                <p>Name5</p>
            </div>
        </div>
        <button class="manage-button">จัดการโปรไฟล์</button>
    </div>
  )
} 
export default Profile