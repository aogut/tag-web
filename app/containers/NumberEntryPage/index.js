import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import NumberEntryForm from 'components/NumberEntryForm';

class NumberEntryPage extends React.Component { // eslint-disable-line react/prefer-stateless-function

  handleSavingNumbers(numbers) {
    console.log('handleSavingNumbers');
    console.log(numbers.map(e => e.numeral + '/tags: '+ e.tags));
    this.onSavingNumbers(numbers);
  }

  render() {
    return (
      <div>
        <h1>Number Entry Page</h1>
        <NumberEntryForm onSave={this.handleSavingNumbers} />
        <div>
          {}
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    // changeRoute: (url) => dispatch(push(url)),
    onSavingNumbers: (numbers) => dispatch(saveNumbers(numbers)),
    dispatch,
  };
}

// const mapStateToProps = createStructuredSelector({
// });


function mapStateToProps(state) {
  const props = {};
  return props;
}

// Wrap the component to inject dispatch and state into it
export default connect(mapStateToProps, mapDispatchToProps)(NumberEntryPage);
