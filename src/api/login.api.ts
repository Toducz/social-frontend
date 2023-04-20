import { useMutation, UseMutationResult } from '@tanstack/react-query';
import { LoginRequestDto, LoginResponseDto } from '../dto/login.dto';
import apiClient from './common';

export const login = async (params: LoginRequestDto): Promise<LoginResponseDto> => {
  const response = await apiClient.post<LoginResponseDto>('/login', params);
  return response.data;
};

export const useLogin = (): UseMutationResult<LoginResponseDto> => {
  return useMutation<LoginResponseDto, unknown, LoginRequestDto>((params: LoginRequestDto) => login(params));
};
