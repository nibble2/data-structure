class TreeNode {
    constructor(val = 0, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

function averageOfLevels(root) {
    let result = [];
    let queue = [root];

    while (queue.length > 0) {
        let levelLength = queue.length;
        let sum = 0;
        
        for (let i = 0; i < levelLength; i++) {
            let currentNode = queue.shift();
            sum += currentNode.val;
            
            if (currentNode.left) queue.push(currentNode.left);
            if (currentNode.right) queue.push(currentNode.right);
        }
        result.push(sum / levelLength);
    }

    return result;
}

// 테스트 케이스
const root1 = new TreeNode(3);
root1.left = new TreeNode(9);
root1.right = new TreeNode(20, new TreeNode(15), new TreeNode(7));

const root2 = new TreeNode(3);
root2.left = new TreeNode(9, new TreeNode(15), new TreeNode(7));
root2.right = new TreeNode(20);

console.log(averageOfLevels(root1)); // [3.00000,14.50000,11.00000]
console.log(averageOfLevels(root2)); // [3.00000,14.50000,11.00000]
