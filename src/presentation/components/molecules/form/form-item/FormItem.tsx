import Text from '@/presentation/components/atoms/typography/Typography';
import React, { FunctionComponent as FC, ReactElement as RE } from 'react';
import { spanValidator, StyledInput, StyledLabel } from './FormItem.styles';

export interface Props {
  labelName?: string;
  itemType?: string;
  inputName?: string;
  placeholder?: string;
  inputValue?: string | number;
  onChangeInput?(e: React.ChangeEvent<HTMLInputElement>): void;
  errors?: string;
}

const FormItem: FC<Props> = ({
  labelName,
  itemType,
  inputName,
  placeholder,
  inputValue,
  onChangeInput,
  errors,
}: Props): RE => {
  const { Span } = Text;

  return (
    <>
      <StyledLabel>{labelName}</StyledLabel>
      <StyledInput
        type={itemType}
        name={inputName}
        placeholder={placeholder}
        value={inputValue}
        onChange={onChangeInput}
      />
      {errors && <Span styles={spanValidator}>{errors}</Span>}
    </>
  );
};

export default FormItem;
