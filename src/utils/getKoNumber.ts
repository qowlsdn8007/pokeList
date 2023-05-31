// 천, 만 단위 한글로 환산 유틸 함수
export const getKoNumber = (num: number) => {
  const koUnits = ['천', '만'];

  const num10000 = Math.floor(num / 10000);
  const num1000 = Math.floor((num - num10000 * 10000) / 1000);
  const num100 = num - num10000 * 10000 - num1000 * 1000;

  let answer = '';
  if (num10000 > 0) {
    answer += `${num10000}${koUnits[1]}`;
  }
  if (num1000 > 0) {
    answer += `${num1000}${koUnits[0]}`;
  }
  if (num100 > 0) {
    answer += `${num100}`;
  }
  return answer;
};
