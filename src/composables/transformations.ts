import moment from "moment";

export function dateFormat(date:string){
    if(date==null){
        return "--"
    }
    return moment(date).format("DD/MM/YYYY")
}