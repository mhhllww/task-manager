const listItems = [
  {
    title: 'Create Your Workspace',
    description:
      'Sign up and set up your team workspace in less than 2 minutes.',
  },
  {
    title: 'Add Your Tasks',
    description:
      'Create tasks, set deadlines, and assign them to team members.',
  },
  {
    title: 'Track Progress',
    description:
      'Monitor task completion, track time, and view team productivity.',
  },
  {
    title: 'Analyze & Improve',
    description:
      'Use reports and insights to optimize workflows and boost efficiency.',
  },
];

export const List = () => {
  return (
    <ol className={'flex flex-col justify-center gap-[32px]'}>
      {listItems.map((item, index) => (
        <li key={index} className={'flex gap-4'}>
          <span
            className={
              'h-8 w-8 flex justify-center items-center rounded-full font-semibold bg-black text-white'
            }>
            {index + 1}
          </span>
          <div className={'w-full'}>
            <h3 className={'text-xl font-bold'}>{item.title}</h3>
            <p className={'text-gray-500 text-[16px]'}>{item.description}</p>
          </div>
        </li>
      ))}
    </ol>
  );
};
