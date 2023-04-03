exports.getDate = function(){

const today = new Date();

    const options = {
        dataStyle: "full",
        day: "2-digit",
        month: "long",
        weekday: "long"
    };
    return today.toLocaleString("en-US", options);
    
}
exports.getDay = function(){

    const today = new Date();
    
        const options = {
            weekday: "long"
        };
        return today.toLocaleString("en-US", options);
        
    }