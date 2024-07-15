function solution(answers) {
    const num1 = [1,2,3,4,5]
    const num2 = [2,1,2,3,2,4,2,5]
    const num3 = [3,3,1,1,2,2,4,4,5,5]
    
    const sum = [0, 0, 0];
    
    for (const [i,x] of answers.entries()){
        if (x === num1[i% num1.length] ){
            sum[0]++
        }
                if (x === num2[i% num2.length]){
            sum[1]++
        }
                if (x === num3[i% num3.length]){
            sum[2]++
        }  
    }

    const max = Math.max(...sum)
    const result = []
    
    for (const [y,z] of sum.entries()){
        if (z === max){
            result.push(y + 1)
        }
    }
    
    
	return result
}