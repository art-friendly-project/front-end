interface withdrawalConfirmContent {
  title: string;
  content: string;
}

const WithdrawalConfirmContent = ({
  title,
  content,
}: withdrawalConfirmContent) => {
  return (
    <div className="flex flex-col px-4 py-6 mb-6 rounded-lg bg-gray-00">
      <span className="mb-4 text-Body3 text-gray-110">{title}</span>
      <p className="text-Body2-M text-gray-80">{content}</p>
    </div>
  );
};

export default WithdrawalConfirmContent;
