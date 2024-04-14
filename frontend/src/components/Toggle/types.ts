export interface IToggleBox {
  $isActive?: boolean;
  onOff?: boolean;
  togglewidth?: string;
  onChangeInactive?: () => void;
  onChangeActive?: () => void;
  textActive?: string;
  textInactive?: string;
}
