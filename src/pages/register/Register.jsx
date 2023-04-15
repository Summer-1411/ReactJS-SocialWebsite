import { Link } from "react-router-dom";
import "./register.scss";

const Register = () => {
    return (
        <div className="register">
            <div className="card">
                <div className="left">
                    <h1>Summer Social</h1>
                    <p>
                        Đăng ký để tham gia vào mạng xã hội này.
                    </p>
                    <span>Bạn đã có tài khoản?</span>
                    <Link to="/login">
                        <button>Đăng nhập</button>
                    </Link>
                </div>
                <div className="right">
                    <h1>Đăng ký</h1>
                    <form>
                        <input type="text" placeholder="Username" />
                        <input type="email" placeholder="Email" />
                        <input type="password" placeholder="Password" />
                        <input type="text" placeholder="Name" />
                        <button>Đăng ký</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;
