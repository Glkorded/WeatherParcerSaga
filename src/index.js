import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import Root from './view/layouts/Root/Root'
import store from './modules/store'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Root />
    </BrowserRouter>
  </Provider>,

  document.getElementById('root'),
)
