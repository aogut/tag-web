import React, { PropTypes } from 'react';

import styles from './styles.css';


function Number(props) {
  return (
    <div {...props}>
      <div>
        Numeral: {props.numeral}
      </div>
      <div>
        Unit: {props.unit}
      </div>
      <div>
        Tags: {props.tags}
      </div>
    </div>
  );
}

//Number.propTypes = {
//};

export default Number;
