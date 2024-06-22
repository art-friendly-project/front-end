interface detailModalContent {
  title: string;
  content: string;
}

const DetailModalContent = ({ title, content }: detailModalContent) => {
  return (
    <div className="flex flex-col mb-6">
      <span className="mb-2 text-Body2">{title}</span>
      <p className="leading-relaxed whitespace-pre-wrap text-Body2-M">
        {content}
      </p>
    </div>
  );
};

export default DetailModalContent;
