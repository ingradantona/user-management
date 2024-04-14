import { Toggle, ToggleContainer } from './styles';
import { IToggleBox } from './types';

export function ToggleBox({
  onOff,
  togglewidth,
  onChangeActive,
  onChangeInactive,
  textActive,
  textInactive,
}: IToggleBox) {
  return (
    <ToggleContainer>
      <Toggle $isActive={onOff === true} togglewidth={togglewidth}>
        <button onClick={onChangeActive}>{!textActive ? 'Ativos' : textActive} </button>
      </Toggle>
      <Toggle $isActive={onOff === false} togglewidth={togglewidth}>
        <button onClick={onChangeInactive}>{!textActive ? 'Inativos' : textInactive}</button>
      </Toggle>
    </ToggleContainer>
  );
}
