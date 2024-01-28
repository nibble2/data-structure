function averageOfLevels(root) {
    function bfs(index) {
        const result = [];

        while(root.length !== 0) {
            let sum = 0;
            let searchIndex = 0;
            
            for(i = 0; i <= index; i++ ) {
                const emptyNum = root.shift();

                if(emptyNum === null) {
                    sum += 0
                } else {
                    sum += emptyNum;
                    searchIndex++;
                }
            }

            if(searchIndex === 1) {
                result.push(sum);
            } else {
                result.push(sum / searchIndex);
            }
            index ++;
            index = (index*2) -1;
        }


        return result;
    }

    return bfs(0);
};

console.log(averageOfLevels([3,9,20,null,null,15,7]));