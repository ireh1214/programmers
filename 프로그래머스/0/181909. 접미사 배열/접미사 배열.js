function solution(my_string) {
    const answer = [my_string];
    let x = my_string
    
    while (x.length > 0) {
        x = x.slice(1);
        if (x.length > 0) { 
            answer.push(x);
        }
    }
  
    return answer.sort()
}


