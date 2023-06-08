// import graph_start from "./assets/graph-start.svg";
// import graph_end from "./assets/graph-end.svg";
import TopTitleSection from "./components/TopTitleSection";
import FeaturesSection from "./components/FeaturesSection";
import ChartYourCareer from "./components/ChartYourCareer";
import Review from "./components/Review";


// Importing Stylesheets
import "./styles/app.css";
import "./styles/topTitleSection.css";
import "./styles/featuresSection.css";



function App() {

  return (
      <div className="app">
        <TopTitleSection />
        <FeaturesSection />
        <ChartYourCareer />
        <Review />

      </div> 
  )
}

export default App
