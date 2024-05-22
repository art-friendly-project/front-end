interface title {
  title: string;
}

const Title = ({ title }: title) => {
  return <span className="text-Subhead text-gray-110">{title}</span>;
};

export default Title;
