export interface Interest {
  id: string;
  title: string;
  category: string;
  icon: string;
  progress: number; // 0-100
  description: string;
  createdAt: string;
  updatedAt: string;
}

export interface InterestCategory {
  id: string;
  name: string;
  color: string;
}

