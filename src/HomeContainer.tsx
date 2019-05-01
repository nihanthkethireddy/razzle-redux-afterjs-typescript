import React from 'react';
import { connect } from 'react-redux';

import Home from './Home';

const mapStateToProps = (state: any) => {
  console.log(state, 'STATE');
  return {
    counter: state.counter
  };
};

function mapDispatchToProps(dispatch: any) {
  console.log(dispatch, 'DISPATCH');
  console.log('HITHITHIT');
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
