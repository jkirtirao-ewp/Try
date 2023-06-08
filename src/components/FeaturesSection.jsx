import backgroundImgSrc from "../assets/charted-powerAi.png";
import card_1 from "../assets/Charted_finance.png";
import card_2 from "../assets/Charted_latest_career.png";


const FeaturesSection = () => {

    const sectionBgStyle = {
        background: `url(${backgroundImgSrc})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
    }; 

    return (
        <section className="featuresSection" style={sectionBgStyle}> 
        
            <div className="left">
                <h1>Leverage the </h1> 
                <h1>power of AI</h1>
                <h3>for your next career move</h3>
            </div>
            <div className="right">
                <div className="cards">
                    <img src={card_1} alt="" />
                    <img src={card_2} alt="" />
                    <img src={card_1} alt="" />
                </div>   
            </div>
            
        </section>
    );
};

export default FeaturesSection;

