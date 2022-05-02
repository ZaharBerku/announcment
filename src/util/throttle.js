

function throttle (dispatch, func, ms){
    let isThrottled = false;
    let savedArgs = null;
    let savedThis = null;
    function wrapper() {
        if(isThrottled){
            savedArgs = arguments;
            savedThis = this;
            return;
        }

    dispatch(func.apply(this, arguments));

    isThrottled = true;

    setTimeout(()=>{
        isThrottled = false;
        if(savedArgs){
            wrapper.apply(savedThis, savedArgs);
            savedThis = savedArgs = null;
        }
    },ms);
}
    return wrapper;
}

export default throttle;