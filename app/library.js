module.exports = {

 findMinMax: function (arr){
    var min = arr[0];
    var max = arr[0];

    for(var i = 1; i < arr.length; i++){
        if (min > arr[i]){
            min = arr[i];
        }
        else if(max < arr[i]){
            max = arr[i];
        }
    }

    if (min == max){
        return [min];
    }
    else{
        return [min, max];
    }

    
} 
}
