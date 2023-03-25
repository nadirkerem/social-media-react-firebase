interface UserAuth {
  username?: string;
  email: string;
  password: string;
  redirectTo?: string;
}

interface User extends UserAuth {
  id: string;
  avatar: string;
  createdAt: string;
  updatedAt?: string;
}
