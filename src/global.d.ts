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

interface Post {
  id: string;
  text: string;
  uid: string;
  createdAt: number;
  updatedAt?: string;
  likes: string[];
}

interface Comment {
  id: string;
  uid: string;
  text: string;
  postID: string;
  date: number;
}
