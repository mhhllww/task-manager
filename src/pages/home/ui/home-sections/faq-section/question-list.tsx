const questions = [
  {
    question: 'Is there a limit to how many team members I can add?',
    answer:
      "There's no limit to team size on any plan. You pay per user, so you can add as many team members as you need and scale as your team grows.",
  },
  {
    question: 'Can I import tasks from another tool?',
    answer:
      'Yes, TaskManager supports importing tasks from popular tools like Asana, Trello, Jira, and more. Our import wizard makes migration simple.',
  },
  {
    question: 'What kind of support do you offer?',
    answer:
      'All plans include email support. Professional plans and above include priority support with faster response times. Enterprise plans include a dedicated account manager.',
  },
];

export const QuestionList = () => {
  return (
    <ul className={'max-w-3xl mx-auto flex flex-col gap-6 py-12'}>
      {questions.map((question, index) => (
        <li
          key={index}
          className={'rounded-lg border border-gray-200 p-6 shadow-sm'}>
          <h3 className={'text-xl font-bold'}>{question.question}</h3>
          <p className={'mt-2 text-gray-500'}>{question.answer}</p>
        </li>
      ))}
    </ul>
  );
};
