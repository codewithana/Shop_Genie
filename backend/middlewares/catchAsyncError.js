export const catchAsyncError=(callfunction)=>{
    return (req,res,next)=>{
        Promise.resolve(callfunction(req,res,next)).catch(next);
    }
}