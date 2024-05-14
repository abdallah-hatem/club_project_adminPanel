export interface PermissonsDto {
  action: string;
  value: boolean;
  description: string;
  children: PermissonsDto[];
}

export interface UserDto {
  name: string;
  email: string;
  password: string;
  role: 'ADMIN' | 'USER';
}
