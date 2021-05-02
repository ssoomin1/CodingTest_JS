function solution(clothes){
    let answer=1;
    let obj_c={};
    for(let c of clothes){
        if(obj_c[c[1]]){
            obj_c[c[1]]++;
        }else{
            obj_c[c[1]]=1;
        }
    }
    console.log(obj_c);

    for(let key in obj_c){
        answer*=obj_c[key]+1;
    }
    return answer-1;
}

console.log(solution([["yellowhat", "headgear"], ["bluesunglasses", "eyewear"], ["green_turban", "headgear"]]));
console.log(solution([["crowmask", "face"], ["bluesunglasses", "face"], ["smoky_makeup", "face"]]));