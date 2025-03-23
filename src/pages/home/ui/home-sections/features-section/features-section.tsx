import {
  BarChart3,
  Bell,
  Calendar,
  CheckCircle,
  Clock,
  Users,
} from 'lucide-react';

import { RoundedSpan } from '../../../../../shared/ui';

import { FeatureCard } from './feature-card.tsx';

const cards = [
  {
    title: 'Time Tracking',
    description:
      'Track time spent on tasks automatically or manually to improve productivity and billing accuracy.',
    icon: <Clock />,
  },
  {
    title: 'Task Management',
    description:
      'Create, assign, and organize tasks with deadlines, priorities, and custom statuses.',
    icon: <Calendar />,
  },
  {
    title: 'Team Collaboration',
    description:
      'Work together seamlessly with shared workspaces, comments, and file attachments.',
    icon: <Users />,
  },
  {
    title: 'Reports & Analytics',
    description:
      'Gain insights with customizable reports on productivity, time usage, and project progress.',
    icon: <BarChart3 />,
  },
  {
    title: 'Notifications',
    description:
      'Stay updated with customizable alerts for task assignments, deadlines, and mentions.',
    icon: <Bell />,
  },
  {
    title: 'Goal Tracking',
    description:
      'Set and monitor progress towards personal and team objectives with visual indicators.',
    icon: <CheckCircle />,
  },
];

export const FeaturesSection = () => {
  return (
    <section className={'p-[128px_145px] w-full bg-gray-100'}>
      <article className={'flex flex-col items-center gap-[8px] text-center'}>
        <RoundedSpan text={'Features'} />
        <h1 className={'text-[36px] font-bold tracking-tighter'}>
          Everything You Need to Stay Organized
        </h1>
        <p className={'text-[20px] text-gray-500'}>
          TaskManager combines powerful features with an intuitive interface to
          help you manage work effectively.
        </p>
        <div
          className={'max-w-[64rem] py-[48px] mx-auto grid gap-6 grid-cols-3'}>
          {cards.map((card, index) => (
            <FeatureCard
              key={index}
              title={card.title}
              description={card.description}
              icon={card.icon}
            />
          ))}
        </div>
      </article>
    </section>
  );
};
