interface content {
  body: string;
}

const Content = ({ body }: content) => {
  return <span className="mt-[8%] whitespace-pre-wrap">{body}</span>;
};

export default Content;
