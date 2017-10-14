'use strict';

import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../actions';

import QuickMenu from '../components/sidebar/QuickMenu';

const SidebarContainer = (props) => {
  return (
    <div className="sidebar">
      <QuickMenu />
    </div>
  )
}

function mapStateToProps(state) {
  return {
    loading: false
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect()(SidebarContainer)
