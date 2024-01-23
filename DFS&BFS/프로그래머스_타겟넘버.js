function solution(numbers, target) {
    let answer = 0;
  
    function dfs(count, sum) {
      if (count === numbers.length) { // 모든 array를 다 계산 했는지 확인
        if (target === sum) {
          answer++;
        }
        return;
      }
   
      dfs(count + 1, sum + numbers[count]);
      dfs(count + 1, sum - numbers[count]);
      // 전부 더하는 12번재 함수가 끝나고 나서, 13번째 들어갈 때 count: 4, sum: 4
      // [1,1,1,1,1]에서 index 0~3까지 전부다 더해진 sum + (-numbers[4])인 상태가 된다.
    }
  
    dfs(0, 0);
  
    return answer;
}

console.log(solution([1, 1, 1, 1, 1], 3)); // 5
console.log(solution([4, 1, 2, 1], 4));    // 2