import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";


const PreviousSearches = ({searches}) => {
    return ( 
        <div className="previous-searches section">
        <h2>Previous searches</h2>
        <div className="previous-searches-container">
          {searches.map((item, index) => (
            <div
              key={index}
              style={{ animationDelay: index * 0.1 + "s" }}
              className="search-item"
            >
              {item}
            </div>
          ))}
        </div>
        <div className="search-box">
          <input type="text" placeholder="search..." />
          <button className="btn">
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>
      </div>
     );
}
 
export default PreviousSearches;