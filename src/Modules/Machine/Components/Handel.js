function handle(str){
    if(parseInt(str)<10){
        return `0${str}`
    }
    return str
}
class Handle{
    constructor(){}
    ConvertDate=(str1,str2)=>{
        const arr1=str1.split('/').map(el=>handle(el));
        const arr2=str2.split(':');
        let date=arr1[0];
        let month=arr1[1];
        let year=arr1[2];
        let hours=arr2[0];
        let min=arr2[1];
        return `${year}${month}${date}${hours}${min}00`
    }
    ReturnDate=(str)=>{
        const year=str.substr(0,4);
        const month=handle(str.substr(4,2));
        const day=handle(str.substr(6,2));
        return `${day}-${month}-${year}`
    }
}
// function ConvertDate(str1,str2){
//     const arr1=str1.split('/').map(el=>handle(el));
//     const arr2=str2.split(':');
//     let date=arr1[0];
//     let month=arr1[1];
//     let year=arr1[2];
//     let hours=arr2[0];
//     let min=arr2[1];
//     return `${year}${month}${date}${hours}${min}00`
// }
export default Handle;