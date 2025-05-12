import {
  BarChart3,
  Bell,
  Calendar,
  CheckCircle,
  Clock,
  Users,
} from 'lucide-react';

export const CARDS = [
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
