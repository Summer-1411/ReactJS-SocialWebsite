import Post from "../post/Post";
import "./posts.scss";

const Posts = () => {
    //TEMPORARY
    const posts = [
        {
            id: 1,
            name: "Tùng Lê",
            userId: 1,
            profilePic:
                "https://ss-ava.saostar.vn/fb1200png_2/pc/1676043149351/saostar-tngc8l9lrrpml6tt.jpg/fbsscover.png",
            desc: "Hôm nay trời thật đẹp",
            img: "https://cdn.hswstatic.com/gif/why-is-sky-blue.jpg",
        },
        {
            id: 2,
            name: "D.QAnh",
            userId: 2,
            profilePic:
                "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600",
            desc: "Mưa trôi cả bầu trời nắng",
        },
    ];

    return <div className="posts">
        {posts.map(post => (
            <Post post={post} key={post.id} />
        ))}
    </div>;
};

export default Posts;
