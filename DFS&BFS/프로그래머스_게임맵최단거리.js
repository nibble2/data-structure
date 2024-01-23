function solution(maps) {
    const n = maps.length; // 행
    const m = maps[0].length; // 열
  
    function bfs(x, y) {
        const dx = [1, -1, 0, 0];
        const dy = [0, 0, 1, -1];
  
        const queue = [[x, y]];
        maps[x][y] = 2; // 시작점을 방문한 것으로 초기화
  
        while (queue.length !== 0) {
            const [x, y] = queue.shift();
  
            for (let i = 0; i < 4; i++) {
                const nextX = x + dx[i];
                const nextY = y + dy[i];
  
                if (nextX < 0 || nextX >= n || nextY < 0 || nextY >= m) continue;
                if (maps[nextX][nextY] === 0) continue;
  
                if (maps[nextX][nextY] === 1) {
                    maps[nextX][nextY] = maps[x][y] + 1;
                    queue.push([nextX, nextY]);
                }
            }
        }
  
        // 상대 팀 진영에 도착할 수 있는 경우 최단 거리 반환
        // 상대 팀 진영에 도착할 수 없는 경우 -1 반환
        return maps[n - 1][m - 1] > 1 ? maps[n - 1][m - 1] - 1 : -1;
    }
  
    return bfs(0, 0);
}
  

// // 테스트 케이스
// const maps1 = [[1,0,1,1,1],[1,0,1,0,1],[1,0,1,1,1],[1,1,1,0,1],[0,0,0,0,1]];
// const maps2 = [[1,0,1,1,1],[1,0,1,0,1],[1,0,1,1,1],[1,1,1,0,0],[0,0,0,0,1]];

// console.log(solution(maps1)); // 11
// console.log(solution(maps2)); // -1




// function solution(maps) {
//     const n = maps.length;
//     const m = maps[0].length;
  
//     // 너비 우선 탐색(BFS) 구현
//     function bfs(x, y) {
//         // 방향 벡터 (동, 서, 남, 북)
//         const dx = [1, -1, 0, 0];
//         const dy = [0, 0, 1, -1];
  
//         const queue = [[x, y]];
  
//         while (queue.length !== 0) {
//             const [x, y] = queue.shift();
  
//             // 4가지 방향에 대한 탐색
//             for (let i = 0; i < 4; i++) {
//                 const nx = x + dx[i];
//                 const ny = y + dy[i];
  
//                 // 맵 범위를 벗어난 경우 무시
//                 if (nx < 0 || nx >= n || ny < 0 || ny >= m) continue;
  
//                 // 벽인 경우 무시
//                 if (maps[nx][ny] === 0) continue;
  
//                 // 해당 노드를 처음 방문하는 경우에만 최단 거리 기록
//                 if (maps[nx][ny] === 1) {
//                     maps[nx][ny] = maps[x][y] + 1;
//                     queue.push([nx, ny]);
//                 }
//             }
//         }
  
//         // 상대 팀 진영에 도착할 수 있는 경우 최단 거리 반환, 그렇지 않으면 -1 반환
//         return maps[n - 1][m - 1];
//     }
  
//     const result = bfs(0, 0);
  
//     // 상대 팀 진영에 도착할 수 없는 경우
//     if (result === 1) {
//         return -1;
//     }
  
//     return result;
//   }
  
//   // 테스트 케이스
//   const maps1 = [[1,0,1,1,1],[1,0,1,0,1],[1,0,1,1,1],[1,1,1,0,1],[0,0,0,0,1]];
//   const maps2 = [[1,0,1,1,1],[1,0,1,0,1],[1,0,1,1,1],[1,1,1,0,0],[0,0,0,0,1]];
  
//   console.log(solution(maps1)); // 11
//   console.log(solution(maps2)); // -1