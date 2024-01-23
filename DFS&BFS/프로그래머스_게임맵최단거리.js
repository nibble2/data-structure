function solution(maps) {
  const n = maps.length; // 행
  const m = maps[0].length; // 열

  // 너비 우선 탐색(BFS) 구현
  function bfs(x, y) {
      // 방향 벡터 (동, 서, 남, 북)
      const dx = [1, -1, 0, 0];
      const dy = [0, 0, 1, -1];

      // 시작점을 방문한 것으로 초기화
      maps[x][y] = 2;
      const queue = [[x, y]];

      while (queue.length !== 0) {
          const [x, y] = queue.shift();

          // 4가지 방향에 대한 탐색
          for (let i = 0; i < 4; i++) {
              const nextX = x + dx[i];
              const nextY = y + dy[i];

              // 맵 범위를 벗어난 경우 무시
              if (nextX < 0 || nextX >= n || nextY < 0 || nextY >= m) continue;

              // 벽인 경우 무시
              if (maps[nextX][nextY] === 0) continue;

              // 방문 가능한 곳이라면 최단 거리 기록
              if (maps[nextX][nextY] === 1) {
                  maps[nextX][nextY] = maps[x][y] + 1; // 현재 노드까지 이동하는데 걸린 단계 수
                  queue.push([nextX, nextY]);
              }
          }
      }

      // 상대 팀 진영에 도착할 수 있는 경우 최단 거리 반환, 그렇지 않으면 -1 반환
      return maps[n - 1][m - 1] - 1; // 시작점을 2로 설정했으므로 결과에서 1을 뺌
  }

  const result = bfs(0, 0);

  // 상대 팀 진영에 도착할 수 없는 경우
  if (result === 1) {
      return -1;
  }

  return result;
}

// 테스트 케이스
const maps1 = [[1,0,1,1,1],[1,0,1,0,1],[1,0,1,1,1],[1,1,1,0,1],[0,0,0,0,1]];
const maps2 = [[1,0,1,1,1],[1,0,1,0,1],[1,0,1,1,1],[1,1,1,0,0],[0,0,0,0,1]];

console.log(solution(maps1)); // 11
console.log(solution(maps2)); // -1