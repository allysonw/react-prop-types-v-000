import React from 'react';
import ReactDOM from 'react-dom';

import PropTypes from 'prop-types';

export default class Order extends React.Component {

  render() {
    return (
      <div className="order">
        <ul>
          <li>{this.props.cone ? 'Cone' : 'Cup'}</li>
          <li>{this.props.size}</li>
          <li>{this.props.scoops.length} scoops: {this.props.scoops.join(', ')}</li>
          <li>Ordered by {this.props.orderInfo.customerName} at {this.props.orderInfo.orderedAt}.</li>
        </ul>
      </div>
    );
  }
}

Order.defaultProps = {
  cone: true,
  size: 'regular'
};

Order.propTypes = {
  cone: PropTypes.bool,
  size: PropTypes.string,

  //scoops: PropTypes.arrayOf(PropTypes.string).isRequired,
  scoops: scoopChecker,

  orderInfo: PropTypes.shape({
    customerName: PropTypes.string.isRequired,
    orderedAt: PropTypes.number.isRequired
  })
}

// make sure that it has at least one scoop
function scoopChecker(props, propName, componentName) {
  if (props[propName].length < 1) {
    return new Error(
      'Invalid prop `' + propName + '` supplied to' +
      ' `' + componentName + '`. Validation failed.'
    );
  }
}

ReactDOM.render(
  (
    <div>
      <Order />
    </div>
  ),
  document.getElementById('global')
);
