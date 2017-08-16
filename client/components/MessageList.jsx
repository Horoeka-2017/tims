import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

import LoadMessages ed
}

function mapStateToProps (state) {
  return {
    messages: state.messages
  }
}

export default connect(mapStateToProps)(MessageList)
