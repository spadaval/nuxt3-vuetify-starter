import type { IncomingMessage, ServerResponse } from 'http';

export default async (req: IncomingMessage, res: ServerResponse) => {
  return [
    {
      title: 'Blargh',
      description: 'blargh',
      priority: 1,
    },
  ];
};
