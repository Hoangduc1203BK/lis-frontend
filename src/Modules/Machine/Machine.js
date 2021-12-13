import {Route, Switch} from 'react-router-dom';
import FormMachine from './Components/FormMachine';
import Image from './Components/Image'
function Machine(){
    return(
        
        <div className="Machine">
            <Switch>
                <Route path={"/app/machine/image"} exact component={Image}/>
                <Route path={""} component={FormMachine}/>
            </Switch>
        </div>
    )
}
export default Machine;