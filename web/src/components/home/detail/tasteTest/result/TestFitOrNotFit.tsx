import { useState } from 'react';
import TestFitOrNotFitMenu from './TestFitOrNotFitMenu';
import TestFitOrNotFitContents from './TestFitOrNotFitContents';
import changeMbtiToIdx from 'utils/changeMbtiToIdx';
import { tasteTestType } from 'assets/data/tasteTestData';

interface testFitOrNotFit {
  result: result;
}

export interface result {
  id: number;
  type: string;
  title1: string;
  title2: string;
  explain: string;
  fit: string;
  notFit: string;
  image: string;
}

const TestFitOrNotFit = ({ result }: testFitOrNotFit) => {
  const [active, setActive] = useState([true, false]);

  const fitIdx = changeMbtiToIdx(result.fit);
  const notFitIdx = changeMbtiToIdx(result.notFit);
  const fit = tasteTestType[fitIdx];
  const notFit = tasteTestType[notFitIdx];

  return (
    <div className="flex flex-col items-center">
      <TestFitOrNotFitMenu active={active} setActive={setActive} />
      <TestFitOrNotFitContents active={active} fit={fit} notFit={notFit} />
    </div>
  );
};

export default TestFitOrNotFit;
