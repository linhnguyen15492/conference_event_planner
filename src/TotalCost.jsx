import "./TotalCost.css";
import PropTypes from "prop-types";

const TotalCost = ({ totalCosts, ItemsDisplay }) => {
  const total_amount = totalCosts.venue + totalCosts.av + totalCosts.meals;
  console.log(total_amount);

  return (
    <div className="pricing-app">
      <div className="display_box">
        <div className="header">
          <p className="preheading">
            <h3>Total cost for the event</h3>
          </p>
        </div>
        <div>
          <h2 id="pre_fee_cost_display" className="price">
            ${total_amount}
          </h2>
          <ItemsDisplay />
        </div>
      </div>
    </div>
  );
};

TotalCost.propTypes = {
  totalCosts: PropTypes.shape({
    venue: PropTypes.number,
    av: PropTypes.number,
    meals: PropTypes.number,
  }).isRequired,
  ItemsDisplay: PropTypes.elementType.isRequired,
};

export default TotalCost;
