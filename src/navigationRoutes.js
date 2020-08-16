import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import MainContent from './silversys/maincontent';
import AddNewProperty from './silversys/newProperty';
import EditProperty from './silversys/editProperty';

import MyProperty from './silversys/myProperty';
import MyResponse from './silversys/myResponse';
import ContactUs from './silversys/contactUs';

const NavigationRoutes = () => {
    return (
        // <Router history={browserHistory}>
        <Router>
            <Switch>
                <Route path="/newProperty" component={AddNewProperty} />
                <Route path="/editProperty" component={EditProperty} />
                <Route path="/myproperty" component={MyProperty} />
                <Route path="/myResponse" component={MyResponse} />
                <Route path="/contactUs" component={ContactUs} />
                <Route path="/detailedPage" component={ContactUs} />
                <Route path="/" component={MyProperty}>
                    {/* <Route path="about" component={About} />
                <Route path="contact" component={Contact} /> */}
                </Route>
            </Switch>
        </Router>
    )
}

export default NavigationRoutes