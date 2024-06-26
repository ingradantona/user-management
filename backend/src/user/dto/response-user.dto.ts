class UserResponseDto {
  user_id: number;
  user_name: string;
  user_surname: string;
  user_email: string;
  user_status: boolean;
  profile: {
    profile_id: number;
    profile_name: string;
  };
}
