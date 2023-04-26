import { ActionDto } from './action.dto';

export type GameDto = {
  id: string;
  name: string;
  description: string;
  ownerUserId: string;
  creationDate: string;
  startDate: string;
  endDate: string;
  actions: ActionDto[];
};
