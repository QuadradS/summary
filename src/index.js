import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import App from './App'

import {createBrowserHistory} from 'history'
import {applyMiddleware, createStore} from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './rootReducer'
import {Provider} from 'react-redux'

const history = createBrowserHistory()
const store = createStore(rootReducer(), applyMiddleware(thunk))

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App history={history}/>
        </BrowserRouter>
    </Provider>, document.getElementById('root'))
