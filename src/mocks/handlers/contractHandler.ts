import { rest } from "msw";

const baseUrl = "http://localhost:5000";

export const CONTRACTS = [
  {
    company: "Marius Bodvin A/S",
    contractId: "1234558",
    periodEnd: "2020-06-01T01:01:00Z",
    periodStart: "2019-06-01T01:01:00Z",
    scheduledForRenewal: true,
    negotiationRenewalDate: "2020-05-01T01:01:00z",
  },
  {
    company: "Tarjei Romtveit A/S",
    contractId: "12345589",
    periodEnd: "2021-07-01T01:01:00Z",
    periodStart: "2018-06-01T01:01:00Z",
    scheduledForRenewal: true,
    negotiationRenewalDate: "2021-06-01T01:01:00z",
  },
];

export const contractHandler = [
  rest.get(`${baseUrl}/contracts`, (req, res, ctx) => {
    return res(ctx.json(CONTRACTS));
  }),

  rest.put(`${baseUrl}/contracts/:id`, (req, res, ctx) => {
    return CONTRACTS.find((c) => c.contractId === req.params.id)
      ? res(ctx.status(200))
      : res(ctx.status(404));
  }),
];
