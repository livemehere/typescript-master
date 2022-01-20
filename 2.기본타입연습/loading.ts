
type SuccessState = {
    state:'success';
    response:{
        body:string;
    }
}
type FailState = {
    state:'fail';
    reson:string;
}

type LoadingState ={
    state:'loading';
}

type ResourceLoadState = LoadingState |SuccessState | FailState;

function printLoginState(obj:ResourceLoadState):void{
    if(obj.state =='success'){
        console.log(obj.response.body);
    }else
    if(obj.state =='fail'){
        console.log(obj.reson);
    }else
    if(obj.state =='loading'){
        console.log('👀 loading...');
    }else{
        throw new Error("object type is fail!");
    }

}


printLoginState({state:'loading'});
printLoginState({state:'success',response:{body:"loaded"}});
printLoginState({state:'fail',reson:'no network'});
