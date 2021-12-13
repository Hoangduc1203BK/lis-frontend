import React from 'react';
import { Route, Switch } from 'react-router-dom';
import FormExam from './Components/FormExam/FormExam.js'

function Exam(){
    return (
        <div className="Exam">
            <Switch>
                <Route component={FormExam} />
            </Switch>
        </div>
    )
}

export default Exam