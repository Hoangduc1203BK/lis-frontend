import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import AppHeader from '../AppHeader/AppHeader';
import Exam from '../../../Modules/Exam/Exam';
// import ListCustomer from '../../../Modules/Customer/Components/ListCustomer';

class App extends React.Component {
    render() {
        const { path } = this.props.match;
        return (
            <div className="App">
                <AppHeader></AppHeader>
                <Switch>
                    <Route path={`${path}/exam`} component={Exam} />
                    {/* <Route path={`${path}/customer`} component={ListCustomer} /> */}
                </Switch>
            </div>
        );
    }
}

export default withRouter(App);