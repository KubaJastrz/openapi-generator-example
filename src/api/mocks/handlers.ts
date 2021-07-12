import { rest } from 'msw';

export const handlers = [
  rest.get('/book/:id', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({}));
  }),
];
