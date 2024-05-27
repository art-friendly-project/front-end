import { useAppSelector } from 'hooks';
import { selectTasteTest } from 'store/modules/tasteTest';

interface mbti {
  ei: string[];
  ns: string[];
  ft: string[];
  pj: string[];
}

const testResult = () => {
  let result = '';

  const Result = useAppSelector(selectTasteTest);

  const mbti: mbti = {
    ei: [],
    ns: [],
    ft: [],
    pj: [],
  };

  Result.forEach((result, i) => {
    if (i === 0 || i === 1 || i === 4) {
      if (result === 0) mbti.ei.push('E');
      else mbti.ei.push('I');
    }

    if (i === 3 || i === 10 || i === 11) {
      if (result === 0) mbti.ns.push('N');
      else mbti.ns.push('S');
    }

    if (i === 6 || i === 7 || i === 8) {
      if (result === 0) mbti.ft.push('F');
      else mbti.ft.push('T');
    }

    if (i === 2 || i === 5 || i === 9) {
      if (result === 0) mbti.pj.push('P');
      else mbti.pj.push('J');
    }
  });

  for (const key in mbti) {
    if (key === 'ei') {
      if (
        mbti[key].filter((type) => type === 'E').length >
        mbti[key].filter((type) => type === 'I').length
      ) {
        result += 'E';
      } else {
        result += 'I';
      }
    }
    if (key === 'ns') {
      if (
        mbti[key].filter((type) => type === 'N').length >
        mbti[key].filter((type) => type === 'S').length
      ) {
        result += 'N';
      } else {
        result += 'S';
      }
    }
    if (key === 'ft') {
      if (
        mbti[key].filter((type) => type === 'F').length >
        mbti[key].filter((type) => type === 'T').length
      ) {
        result += 'F';
      } else {
        result += 'T';
      }
    }

    if (key === 'pj') {
      if (
        mbti[key].filter((type) => type === 'P').length >
        mbti[key].filter((type) => type === 'J').length
      ) {
        result += 'P';
      } else {
        result += 'J';
      }
    }
  }

  return { result };
};

export default testResult;
