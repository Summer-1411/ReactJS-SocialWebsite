
import "./stories.scss"


const Stories = () => {

    const  currentUser  = {
        profilePic: "https://i.pinimg.com/originals/4d/ce/ce/4dceced768a7c6cf8be6b16618f7ee1d.jpg",
        name: "Tung"
    }

    //TEMPORARY
    const stories = [
        {
            id: 1,
            name: "Thao Bap",
            img: "https://ss-images.saostar.vn/pc/1676043149351/saostar-tngc8l9lrrpml6tt.jpg",
        },
        {
            id: 2,
            name: "Thao Bap",
            img: "https://ss-images.saostar.vn/pc/1676043149351/saostar-tngc8l9lrrpml6tt.jpg",
        },
        {
            id: 3,
            name: "Thao Bap",
            img: "https://ss-images.saostar.vn/pc/1676043149351/saostar-tngc8l9lrrpml6tt.jpg",
        },
        {
            id: 4,
            name: "Thao Bap",
            img: "https://ss-images.saostar.vn/pc/1676043149351/saostar-tngc8l9lrrpml6tt.jpg",
        },

    ];

    return (
        <div className="stories">
            <div className="story">
                <img src={"../upload/" + currentUser.profilePic} alt="" />
                <span>{currentUser.name}</span>
                <button>+</button>
            </div>
            {stories.map(story => (
                <div className="story" key={story.id}>
                    <img src={story.img} alt="" />
                    <span>{story.name}</span>
                </div>
            ))}
        </div>
    )
}

export default Stories