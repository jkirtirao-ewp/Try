import video_src from "../assets/charted-background-video.mp4";

const TopTitleSection = () => {
    return (
        <section className="topTitleSection">
            <div className="videoContainer">
                <video className="video" autoPlay={true} muted={true} loop={true} playsInline={true}>
                   <source src={video_src} type="video/mp4" />
                </video>
            </div>
            <div className="topTitleSectionContent">
                <h2><span>Chart</span> your career</h2>
                <h2>with future-ready skills</h2>

                <p>Make data driven career moves with AI-enabled skill assessments & career pathways.</p>
                <div className="signInUpBtns">
                    <button className="signUp">Sign Up</button>
                    <button className="signIn">Sign In</button>
                </div>
            </div>
        </section>
    );
};

export default TopTitleSection;