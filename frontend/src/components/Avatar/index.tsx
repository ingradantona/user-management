import { MuiAvatar } from './styles';
import { AvatarProps } from './types';

export default function Avatar({ name }: AvatarProps) {
  return <MuiAvatar>{name}</MuiAvatar>;
}
