import { MACHINE_URL } from "../../../Constances/const";
import { Http } from "../../../Helper/Http";
class MachineService{
    constructor(){}
    getImage(start,end){
        return Http.get(MACHINE_URL+`/filter?begin=${start}&end=${end}`)
    }
}
const Service = new MachineService();
export default Service;
