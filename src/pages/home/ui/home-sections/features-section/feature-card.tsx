type FeatureCardProps = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

export const FeatureCard = ({ title, description, icon }: FeatureCardProps) => {
  return (
    <article
      className={
        'flex flex-col items-center justify-center gap-[16px] border border-gray-200 rounded-xl p-[24px] shadow-sm'
      }>
      <span className={'bg-gray-300 p-[10px] rounded-full'}>{icon}</span>
      <h2 className={'text-[20px] font-bold'}>{title}</h2>
      <p className={'text-gray-500 text-center'}>{description}</p>
    </article>
  );
};
