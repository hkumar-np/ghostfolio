import { Provider, Role, Subscription } from '@prisma/client';

export interface AdminUser {
  accountCount: number;
  activityCount: number;
  country: string;
  createdAt: Date;
  dailyApiRequests: number;
  engagement: number;
  id: string;
  lastActivity: Date;
  name?: string;
  email?: string;
  provider: Provider;
  role: Role;
  subscription?: Subscription;
}
