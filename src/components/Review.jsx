import backgroundImg from "../assets/review-bg.avif";

import "../styles/review.css";


const Review = () => {

    const sectionBgStyle = {
        background: `url(${backgroundImg})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
    }; 

    return (
        <section className="review" style={sectionBgStyle}> 
            <div className="top">
                <h1>What others have achieved</h1>
                <h4>with Charted AI</h4>
            </div>
            <div className="bottom">

            </div>
        </section>
    );
};

export default Review;

