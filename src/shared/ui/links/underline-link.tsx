type UnderlineLinkProps = {
  text: string;
  onClick?: () => void;
};

export const UnderlineLink = ({ text, onClick }: UnderlineLinkProps) => {
  return (
    <a
      className={'hover:underline underline-offset-8 cursor-pointer'}
      onClick={onClick}>
      {text}
    </a>
  );
};
