import { useMutation, UseMutationResult } from '@tanstack/react-query';
import { UserCreationDto, UserDto } from '../dto/user.dto';
import apiClient from './common';

export const createUser = async (newUser: UserCreationDto): Promise<UserDto> => {
  const response = await apiClient.post<UserDto>('/users', newUser);
  return response.data;
};

export const useCreateUser = (): UseMutationResult<UserDto> => {
  return useMutation<UserDto, unknown, UserCreationDto>((params: UserCreationDto) => createUser(params));
};

export const deleteUser = async (email: string): Promise<void> => {
  const response = await apiClient.delete<void>(`/users/${email}`);
  return response.data;
};

export const useDeleteUser = (): UseMutationResult<void> => {
  return useMutation<void, unknown, string>((email: string) => deleteUser(email));
};
