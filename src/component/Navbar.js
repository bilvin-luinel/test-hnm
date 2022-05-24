import React from 'react'
import { useNavigate } from 'react-router-dom';

const Navbar = ({ authenticate, setAuthenticate }) => {

    const menuList = ["남성", "여성", "유아", "H&M", "HOT", "NEW", "Sale"];

    const navigate = useNavigate();

    const goToLogin = () => {
        navigate("/login");
    }
    const goToMain = () => {
        navigate("/");
    }
    const logout = () => {
        setAuthenticate(false);
        navigate("/");
    }
    const search = (e) => {
        if (e.key === "Enter") {
            let keyword = e.target.value;
            navigate(`/?q=${keyword}`);
        }
    }

    return (
        <div>
            <div className="login-text-area">
                <div className="login-text" onClick={authenticate==false?goToLogin:logout}>{authenticate == true ? "로그아웃" : "로그인"}</div>
            </div>
            <div className="logo-area"><img className="logo" onClick={goToMain} src="https://blog.kakaocdn.net/dn/Yt80C/btqDeJAYUBo/JQbTuukRladq2AUOeqgiEK/img.jpg" /></div>
            <ul className="menu-list">
                {menuList.map((item) => (<li>{item}</li>))}
            </ul>
            <div className="search-area">
                <input className="search-box" type="text" placeholder='제품 검색' onKeyPress={(e)=>search(e)}/>
            </div>
        </div>

    )
}

export default Navbar