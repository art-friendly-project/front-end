import Term from './Term';

const Terms = () => {
  return (
    <div>
      {titles.map((title, idx) => (
        <Term key={idx} title={title} idx={idx} />
      ))}
    </div>
  );
};

const titles = ['서비스 이용약관', '개인정보 처리방침', '위치정보 이용약관'];

export default Terms;
