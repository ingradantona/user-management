import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const User = createParamDecorator((data: unknown, ctx: ExecutionContext) => {
  const { user } = ctx.switchToHttp().getRequest();

  return {
    user_id: user.user_id,
    user_email: user.user_email,
    user_name: user.user_name,
  };
});
