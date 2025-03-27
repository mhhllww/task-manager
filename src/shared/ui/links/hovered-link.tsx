type HoveredLinkProps = {
  text: string;
  onClick?: () => void;
};

export const HoveredLink = ({ text, onClick }: HoveredLinkProps) => {
  return (
    <a
      className={'cursor-pointer text-[14px] text-gray-500 hover:text-gray-800'}
      onClick={onClick}>
      {text}
    </a>
  );
};
