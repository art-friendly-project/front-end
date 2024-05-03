interface content {
  content: string;
}

const Content = ({ content }: content) => {
  return <span className="mt-10 whitespace-pre-wrap">{content}</span>;
};

export default Content;
