function solution(n) {
    for (let x = 2; x <= n; x++) {
        if (n % x === 1) {
            return x;
        }
    }
    return -1; // 찾지 못한 경우 -1을 반환
}
