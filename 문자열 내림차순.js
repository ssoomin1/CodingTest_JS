'use strict';
//문자를 큰 것부터 작은순으로 정렬 
//영문 대소문자로만 구성, 소문자>대문자
function solution(s){
    let answer='';
    let newString=s.split('');
    let temp;
    for(let i=0;i<newString.length-1;i++){
        for(let j=i+1;j<newString.length;j++){
            if(newString[i]<newString[j]){
                temp=newString[i];
                newString[i]=newString[j];
                newString[j]=temp;
            }
        }
    }

    answer=newString.join('');
    return answer;
}

//출력: gfedcbZ
console.log(solution("Zbcdefg"));