import TestFit from './TestFit';
import { type result } from './TestFitOrNotFit';
import TestNotFit from './TestNotFit';

interface testFitOrNotFitContents {
  active: boolean[];
  fit: result;
  notFit: result;
}

const TestFitOrNotFitContents = ({
  active,
  fit,
  notFit,
}: testFitOrNotFitContents) => {
  return (
    <>
      {active[0] ? (
        <TestFit title1={fit.title1} title2={fit.title2} image={fit.image} />
      ) : (
        <TestNotFit
          title1={notFit.title1}
          title2={notFit.title2}
          image={notFit.image}
        />
      )}
    </>
  );
};

export default TestFitOrNotFitContents;
