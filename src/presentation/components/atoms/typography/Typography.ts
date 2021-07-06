import { FunctionComponent as FC, ReactElement as RE, ReactNode } from 'react';
import Title from './title/Title';
import Subtitle from './subtitle/Subtitle';
import Paragraph from './paragraph/Paragraph';
import Span from './span/Span';

interface SubProps {
  beforeText?: string;
  afterText?: string;
  children: string | string[] | ReactNode;
  styles?: Record<string, string>;
}

interface Props {
  Title: FC<SubProps>;
  Subtitle: FC<SubProps>;
  Paragraph: FC<SubProps>;
  Span: FC<SubProps>;
}

const Typography: Props = (): void | RE => {};

Typography.Title = Title;
Typography.Subtitle = Subtitle;
Typography.Paragraph = Paragraph;
Typography.Span = Span;

export default Typography;
