import withdrawalConfirmInfo from 'assets/data/WithdrawalConfirmInfo';
import WithdrawalConfirmContent from './WithdrawalConfirmContent';

const WithdrawalConfirmContentList = () => {
  return (
    <div className="flex flex-col mt-10 w-9/10">
      {withdrawalConfirmInfo.map((info, idx) => (
        <WithdrawalConfirmContent
          key={idx}
          title={info.title}
          content={info.content}
        />
      ))}
    </div>
  );
};

export default WithdrawalConfirmContentList;
