interface introtext {
  title: string;
  body: string;
}

const IntroText = ({ title, body }: introtext) => {
  return (
    <>
      <p className="text-center text-Headline text-gray-110">{title}</p>
      <p className="mt-2 text-center whitespace-pre-line text-Body2-M text-gray-70">
        {body}
      </p>
    </>
  );
};

export default IntroText;
