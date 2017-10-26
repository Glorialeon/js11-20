function firstLast6(x){
    if((x[0] == 6)){
        return true;
    }
    if((x[x.length-1] == 6)){
        return true;
    }else{
        return false;
    }
}

function has_23(num1,num2){
    if((num1 || num2 === 2)){
        return true;
    }
    if((num1 || num2 === 3)){
        return true;
    }else{
        return false;
    }

}

function fix_23(x){
    if((x[0] === 2) && (x[1] === 3)){
        x[1] = 0;
    }
    if((x[1] === 2) && (x[2] === 3)){
        x[2] = 0;
    }
        return x;
}

function countYZ(str){
    str = str.toUpperCase();
    var count = 0;
    for(var i = 0; i< str.length; i++){
        if(str [i] == " "){
            if((str[i -1] == "Y")||(str [i - 1] == "Z")){
                count += 1;
            }
        }
    }
    if(str[str.length -1] == "Y" || str[str.length-1] == "Z"){
        count +=1
    }
    return count;

}

function endOther(str1, str2){
    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();
    if(str1.endsWith(str2)){
        return true;
    }
    if(str2.endsWith(str1)){
        return true;
    }
    return false;
}

function starOut(str){
    var str1 = " ";
    for(var i = 0; i < str.length; i++){
        if((str[i -1] != "*") && (str[i] != "*") && (str[i + 1] != "*")){
            str1 += str[i];
        }
    }
    return str1;

}


function getSandwich(str){
    var bread1 = str.indexOf("bread");
    var bread2 = str.lastIndexOf("bread");
    if((bread1 == bread2) || bread1 == -1){
        return "";
    }
    return str.substring(bread1 + 5, bread2);
}

function canBalance(array){
    sum1 = 0;
    sum2 = 0;
    for (var i = 0; i < array.length; i++){
        sum1 += array[i];
        for (var x = i + 1; x < array.length; x++){
            sum2 += array[x];
        }
        if (sum1 == sum2){
            return true;
        }
        sum2 = 0;
    }
    return false;
}

function tester() {
    document.getElementById("output").innerHTML = firstLast6([6, 3, 4]);
    document.getElementById("output1").innerHTML = has_23([5, 2]);
    document.getElementById("output2").innerHTML = fix_23([1, 2, 3]);
    document.getElementById("output3").innerHTML = countYZ("fez day");
    document.getElementById("output4").innerHTML = endOther("HiAbc", "abc");
    document.getElementById("output5").innerHTML = starOut("ab*cd");
    document.getElementById("output6").innerHTML = getSandwich("breadjambread");
    document.getElementById("output7").innerHTML = canBalance([1,1,1,2,1]);
    document.getElementById("output8").innerHTML = countClamps([1,1,2,1,1]);
    document.getElementById("output9").innerHTML = evenlySpaced(4,6,2);

}

function countClamps(array){
    var num = 0;
    for(var i = 0; i < array.length; i ++){
        if(array[i]== array[i -1] && array[i] !== array[i+1]){
            num += 1;
        }
    }
    return num;
}


function evenlySpaced(a,b,c){
    var arr = [a,b,c];
    console.log(arr);
    var orderedArray = arr.sort(function(a,b){return a-b});
    console.log(orderedArray);
    if((orderedArray[0] + orderedArray[2]) / 2 == orderedArray[1]){
        return true;
    }
    return false;
}





