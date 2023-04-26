import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { GameDto } from '../dto/game.dto';
import apiClient, { AbstractQueryParams } from './common';

export type GameQueryParams = AbstractQueryParams & {
  sortBy?: 'creationDate' | 'name';
  own?: boolean;
  active?: boolean;
};

export const findAllGames = async (params: GameQueryParams): Promise<GameDto[]> => {
  const response = await apiClient.get<GameDto[]>('/games', { params });
  return response.data;
};

export const useAllGames = (params: GameQueryParams = { sortBy: 'creationDate' }): UseQueryResult<GameDto[]> => {
  return useQuery<GameDto[]>(['games', params], () => findAllGames(params));
};
