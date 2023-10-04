function solution(arr) {
    // 배열 요소의 합을 구합니다.
    const sum = arr.reduce((acc, currentValue) => acc + currentValue, 0);
    
    // 배열의 길이로 나누어 평균값을 계산합니다.
    const average = sum / arr.length;
    
    return average;
}