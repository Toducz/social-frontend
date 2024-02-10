export type LoginRequestDto = {
  email: string;
  password: string;
};

export type LoginResponseDto = {
  idToken: string;
};

export type UserRegistrationDto = {
  email: string;
  password: string;
  phoneNumber: string;
  displayName: string;
};
