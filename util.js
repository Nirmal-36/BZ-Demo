function LCS(s1, s2, n, m) {
    if(n === 0 || m === 0) {
        return 0;
    }

    if(s1[n-1] === s2[m-1]) {
        return 1 + LCS(s1, s2, n-1, m-1);
    }
    else {
        return Math.max(LCS(s1, s2, n, m-1), LCS(s1, s2, n-1, m));
    }
}



export const getLCS = ((req, res) => {
    const {s1, s2} = req.query;
    
    let ans = LCS(s1, s2, s1.length, s2.length);
    res.send(ans.toString());
});

function subsetSum(A, n, sum) {
    if(sum === 0) {
        return 1;
    }

    if(sum < 0 || n <= 0) {
        return 0;
    }

    const L = subsetSum(A, n-1, sum - A[n-1]);
    const R = subsetSum(A, n-1, sum);

    return L || R;
};

export const getSubsetSum = ((req, res) => {
    const {A, sum} = req.query;
    const ans = subsetSum(A, A.length, sum);
    if(ans === 1) {
        res.send("True");
    }
    else {
        res.send("False");
    }
})


export {
    LCS,
    subsetSum
};
