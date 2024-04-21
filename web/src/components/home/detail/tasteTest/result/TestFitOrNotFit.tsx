import { useState } from 'react';
import TestFitOrNotFitMenu from './TestFitOrNotFitMenu';
import TestFitOrNotFitContents from './TestFitOrNotFitContents';
import { mbtiType } from 'assets/data/tasteTestData';

interface testFitOrNotFit {
  mbti: mbti;
}

export interface mbti {
  title1: string;
  title2: string;
  explain: string;
  fit: string[];
  notFit: string[];
  image: string;
}

const TestFitOrNotFit = ({ mbti }: testFitOrNotFit) => {
  const [active, setActive] = useState([true, false]);
  const fits = mbti.fit.map((m) => mbtiType[m]);
  const notFits = mbti.notFit.map((m) => mbtiType[m]);

  return (
    <div className="flex flex-col items-center mb-16">
      <TestFitOrNotFitMenu active={active} setActive={setActive} />
      <TestFitOrNotFitContents active={active} fits={fits} notFits={notFits} />
    </div>
  );
};

export default TestFitOrNotFit;
