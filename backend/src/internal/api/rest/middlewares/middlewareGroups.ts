import { requireRolesMiddleware } from './requireRoles';
import { authMiddleware } from './auth';
import { UserRole } from '@/internal/domain/user';

export const baseMiddlewareGroup = [
    authMiddleware,
    requireRolesMiddleware([UserRole.ADMIN, UserRole.REDACTOR]),
];
