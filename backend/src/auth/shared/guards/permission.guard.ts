import { CanActivate, ExecutionContext, mixin, Type, UnauthorizedException } from '@nestjs/common';
import { isArray } from 'class-validator';
import { AccessProfile } from 'src/shared/Enums';

export function PermissionGuard(permission: string): Type<CanActivate> {
  class PermissionGuardMixin implements CanActivate {
    async canActivate(context: ExecutionContext) {
      const request = context.switchToHttp().getRequest<any>();
      const profile: string = request?.user.profile_name;

      if (profile === AccessProfile.ADMIN || profile === permission) {
        return true;
      }

      throw new UnauthorizedException('Usuário não está autorizado');
    }
  }
  return mixin(PermissionGuardMixin);
}
