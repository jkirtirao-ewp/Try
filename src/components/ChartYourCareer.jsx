import bgImg from "../assets/charted-user-journey.png";
import path from "../assets/Charted_path_chart.png";

import "../styles/chartYourCareer.css"

const ChartYourCareer = () => {

    const sectionBgStyle = {
        background: `url(${bgImg})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
    }; 

    return (
        <section className="chartYourCareer" style={sectionBgStyle}>
            <div className="top">
                <h1>Chart Your Career</h1>
                <h4>In 4 simple steps</h4>
            </div>
            <div className="bottom">
                <div className="left">
                    <img src={path} alt="" />
                    <div className="buttons">
                        <button className="signIn">Sign In</button>
                        <button>Sign Up</button>
                    </div>
                </div>
                <div className="right">
                    hello
                </div>
            </div>
        </section>
    );
};

export default ChartYourCareer;