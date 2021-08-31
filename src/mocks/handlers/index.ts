import { contractHandler } from "./contractHandler";

/* This handle is not singleton. States get destroy per request. */

export const handlers = [...contractHandler];
