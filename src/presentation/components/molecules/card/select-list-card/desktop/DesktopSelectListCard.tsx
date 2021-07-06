import React, { FunctionComponent as FC, ReactElement as RE } from 'react';
import { useIntl } from 'react-intl';
import InnerButtons from '../inner-buttons/InnerButtons';
import {
  StyledDesktopSelectListCard,
  StyledDesktopRowSelectListCard,
  okButtonStyles as ExternalOkButtonStyles,
  cancelButtonStyles as ExternalCancelButtonStyles,
} from './DesktopSelectListCard.styles';

interface Props {
  cancel?(): void;
  ok?(): void;
  renderOkButton?: boolean;
  renderCancelButton?: boolean;
  okButtonStyles?: Record<string, string>;
  cancelButtonStyles?: Record<string, string>;
  buttonContainerStyles?: Record<string, string>;
  children?: RE | RE[];
}

const DesktopSelectListCard: FC<Props> = ({
  cancel,
  ok,
  renderOkButton = true,
  renderCancelButton = true,
  okButtonStyles = {},
  cancelButtonStyles = {},
  buttonContainerStyles = {},
  children,
}: Props): RE => {
  const intl = useIntl();

  return (
    <StyledDesktopSelectListCard>
      {children}
      <StyledDesktopRowSelectListCard style={buttonContainerStyles}>
        {renderCancelButton && (
          <InnerButtons
            textStyles={ExternalCancelButtonStyles}
            buttonStyles={cancelButtonStyles}
            onClick={cancel}
          >
            {intl.formatMessage({
              id: 'filters.business.type.button.cancel',
            })}
          </InnerButtons>
        )}
        {renderOkButton && (
          <InnerButtons
            textStyles={ExternalOkButtonStyles}
            buttonStyles={okButtonStyles}
            onClick={ok}
          >
            {intl.formatMessage({
              id: 'filters.business.type.button.ok',
            })}
          </InnerButtons>
        )}
      </StyledDesktopRowSelectListCard>
    </StyledDesktopSelectListCard>
  );
};

export default DesktopSelectListCard;
