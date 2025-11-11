
let words="this this this is a test this is fun"
//this: 4 is: 2 a: 1 test: 1 fun: 1

let wordArr=words.split(" ");


function wordCount(arr){
    let countMap={};
    for(let word of wordArr){
        
        console.log(countMap[word]);

        if(typeof(countMap[word])==="undefined"){
            countMap[word]=1;
        }
        else{
            countMap[word]=countMap[word]+1;
        }

    }
    return countMap;
}





console.log(wordCount(wordArr));
