function solution(n)
{
  const str = String(n)
  const mapfn = (arg) => Number(arg)
  const arr = Array.from(str, mapfn)

  const sum = arr.reduce((total, value) => total + value, 0);

  return sum;
}