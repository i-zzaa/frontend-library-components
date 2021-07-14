import React, { FunctionComponent as FC, ReactElement as RE, useState } from 'react';
import Text from '../typography/Typography';

import {
  spanValidator,
  StyledInputContainer,
  StyledInput,
  StyledLabel,
  lebelStyles as ls,
  StyledItemContainer,
  StyledIcon,
  StyledDisabledIcon,
} from './InputItem.styles';
import PasswordItemVisibility from './password-item-visibility/PassowordItemVisibility';

export interface Props {
  labelStyles?: Record<string, string>;
  inputID?: string;
  labelName?: string;
  itemType?: string;
  inputName?: string;
  placeholder?: string;
  inputValue?: string | number;
  onChangeInput?(e: React.ChangeEvent<HTMLInputElement>): void;
  errors?: string;
  iconLeft?: RE | null;
  disabled?: boolean;
}

const FormItem: FC<Props> = ({
  labelStyles = ls,
  inputID,
  labelName,
  itemType = 'text',
  inputName,
  placeholder,
  inputValue,
  onChangeInput,
  errors,
  iconLeft = null,
  disabled = false,
  ...props
}: Props): RE => {
  const { Span } = Text;
  const [temporaryItemType, setTemporaryItemType] = useState(itemType);

  return (
    <StyledItemContainer>
      <StyledLabel>
        <Span styles={labelStyles}>{labelName}</Span>
      </StyledLabel>
      <StyledInputContainer {...props}>
        {iconLeft && !disabled && <StyledIcon icon={iconLeft} />}
        {iconLeft && disabled && <StyledDisabledIcon icon={iconLeft} />}

        <StyledInput
          id={inputID}
          type={temporaryItemType}
          name={inputName}
          placeholder={placeholder}
          value={inputValue}
          onChange={onChangeInput}
          disabled={disabled}
          {...props}
        />
        {itemType === 'password' && (
          <PasswordItemVisibility itemType={temporaryItemType} setItemType={setTemporaryItemType} />
        )}
      </StyledInputContainer>
      {errors && <Span styles={spanValidator}>{errors}</Span>}
    </StyledItemContainer>
  );
};

export default FormItem;
