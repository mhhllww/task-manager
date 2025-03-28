type RoundedSpanProps = {
  text: string;
};

export const RoundedSpan = ({ text }: RoundedSpanProps) => {
  return (
    <span
      className={'w-fit px-3 py-1 rounded-lg bg-black text-white text-[14px]'}>
      {text}
    </span>
  );
};
