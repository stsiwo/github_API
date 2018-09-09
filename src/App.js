import React, { Component } from 'react';
import RedditApp from "./components/RedditApp";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

const middlewares = [ thunk ]

const testCurrentTitle = 'test current title'
const initialTestState = {
  currentTitle: testCurrentTitle,
  redditPosts: {
    [testCurrentTitle]: {
      isFetching: false,
      didInvalidate: false,
      items: [ 
        {
          title: 'test title for specific post'
        },
        {
          title: 'test title for specific post'
        },
        {
          title: 'test title for specific post'
        }
      ],
      receivedAt: Date.now()
    }
  }
}
console.log(initialTestState)
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  initialTestState,
  composeEnhancers(
    applyMiddleware(...middlewares)
  )
)

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <RedditApp/>
      </Provider>
    );
  }
}

export default App;
