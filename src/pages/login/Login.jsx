
import { Link } from "react-router-dom";
import "./login.scss";

const Login = () => {

    const handleLogin = () => {
        console.log("Đăng nhập");
    };

    return (
        <div className="login">
            <div className="card">
                <div className="left">
                    <h1>Hello World.</h1>
                    <p>
                        Đăng nhập để trải nghiệm toàn bộ tính năng của website.
                    </p>
                    <span>Bạn chưa có tài khoản?</span>
                    <Link to="/register">
                        <button>Đăng ký</button>
                    </Link>
                </div>
                <div className="right">
                    <h1>Đăng nhập</h1>
                    <form>
                        <input type="text" placeholder="Username" />
                        <input type="password" placeholder="Password" />
                        <button onClick={handleLogin}>Đăng nhập</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
