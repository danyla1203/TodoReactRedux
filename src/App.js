import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import { createStore } from "redux";
import { Provider } from "react-redux";

import reducer from "./reducers/reducer";
import Home from "./components/Home";
import initialState from "./initalState";

const store = createStore(reducer, initialState);


function App() {
    return (
        <Provider store={ store }>
            <Router>

                <Route path="/">
                    <Home />
                </Route>

            </Router>
        </Provider>
    )
}

export default App;
