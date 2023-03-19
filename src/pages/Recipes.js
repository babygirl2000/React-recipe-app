import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Recipes = () => {
  const searches = [
    "pizza",
    "burger",
    "cookies",
    "juice",
    "biriyani",
    "salad",
    "ice cream",
    "lasagne",
    "pudding",
    "soup",
  ];

  return (
    <div className="previous-searches section">
      <h2>Previous searches</h2>
      <div className="previous-searches-container">
        {searches.map((item,index) =>(
            <div key={index} style={{animationDelay: index * 0.1 + "s"}} className="search-item">{item}</div>
        ) )}
      </div>
      <div className="search-box">
        <input type="text" placeholder="search..." />
        <button className="btn">
            <FontAwesomeIcon icon={faSearch}/>
        </button>
      </div>
    </div>
  );
};

export default Recipes;
