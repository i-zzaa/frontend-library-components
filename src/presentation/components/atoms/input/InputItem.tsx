import Text from '@/presentation/components/atoms/typography/Typography';
import React, {
  FunctionComponent as FC,
  ReactElement as RE,
  useState,
} from 'react';

import {
  spanValidator,
  StyledInputContainer,
  StyledInput,
  StyledLabel,
  lebelStyles as ls,
  StyledItemContainer,
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
}: Props): RE => {
  const { Span } = Text;
  const [temporaryItemType, setTemporaryItemType] = useState(itemType);

  return (
    <StyledItemContainer>
      <StyledLabel>
        <Span styles={labelStyles}>{labelName}</Span>
      </StyledLabel>
      <StyledInputContainer>
        <StyledInput
          id={inputID}
          type={temporaryItemType}
          name={inputName}
          placeholder={placeholder}
          value={inputValue}
          onChange={onChangeInput}
        />
        {itemType === 'password' && (
          <PasswordItemVisibility
            itemType={temporaryItemType}
            setItemType={setTemporaryItemType}
          />
        )}
      </StyledInputContainer>
      {errors && <Span styles={spanValidator}>{errors}</Span>}
    </StyledItemContainer>
  );
};

export default FormItem;
