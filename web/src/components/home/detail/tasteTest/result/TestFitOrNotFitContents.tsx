import TestFit from './TestFit';
import { type mbti } from './TestFitOrNotFit';
import TestNotFit from './TestNotFit';

interface testFitOrNotFitContents {
  active: boolean[];
  fits: mbti[];
  notFits: mbti[];
}

const TestFitOrNotFitContents = ({
  active,
  fits,
  notFits,
}: testFitOrNotFitContents) => {
  return (
    <>
      {active[0]
        ? fits.map((fit) => (
            <TestFit
              key={fit.title2}
              title1={fit.title1}
              title2={fit.title2}
              image={fit.image}
            />
          ))
        : notFits.map((notFit) => (
            <TestNotFit
              key={notFit.title2}
              title1={notFit.title1}
              title2={notFit.title2}
              image={notFit.image}
            />
          ))}
    </>
  );
};

export default TestFitOrNotFitContents;
