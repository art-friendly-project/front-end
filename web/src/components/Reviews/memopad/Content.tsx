interface content {
  content: string;
}

const Content = ({ content }: content) => {
  return <span className="mt-[8%] whitespace-pre-wrap">{content}</span>;
};

export default Content;
