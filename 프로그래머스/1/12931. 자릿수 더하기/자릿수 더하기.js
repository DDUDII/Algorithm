function solution(n)
{
 const arr = n.toString().split('');

  const sum = arr.reduce((total, value) => total + Number(value), 0);

  return sum;
}