import React, { FC } from 'react';
import { TextInputProps as TextInputBaseProps } from 'react-native';
import styled from '@emotion/native';
import {
  borders,
  color,
  layout,
  space,
  typography,
  textStyle,
  BorderProps,
  FlexProps,
  ColorProps,
  LayoutProps,
  SpaceProps,
  TextStyleProps,
  TypographyProps,
} from 'styled-system';
import { Icon } from 'react-native-elements';
import { Container } from '../Container';
import { Text } from '../Text';
import { colors } from '../../styles';

interface TextInputProps extends TextInputBaseProps {
  /** An optional header label to render about the input */
  topLabel?: string;
  icon?: Icon;
}

type ComponentProps = TextInputProps &
  ColorProps &
  SpaceProps &
  TextStyleProps &
  TypographyProps &
  BorderProps &
  LayoutProps &
  FlexProps;

const Wrapper = styled(Container)`
  ${layout};
  ${props =>
    props.grow &&
    `
      flex: 1;
    `}
`;
const InnerWrapper = styled(Container)`
  ${borders};
`;

const TopLabel = styled(Text)``;

const Input = styled.TextInput`
  ${color};
  ${space};
  ${textStyle};
  ${typography};
`;

// NOTE: for layout and dimensioning of TextInput, wrap it in a Container
export const TextInput: FC<ComponentProps> = ({
  topLabel,
  icon,
  multiline,
  borderColor,
  borderRadius,
  ...inputProps
}) => (
  <Wrapper grow={multiline}>
    {topLabel ? <TopLabel>{topLabel}</TopLabel> : null}
    <InnerWrapper borderRadius={borderRadius} borderColor={borderColor}>
      {icon ? icon : null}
      <Input
        autoCapitalize="none"
        underlineColorAndroid={colors.transparent}
        selectionColor={colors.primary}
        multiline={multiline}
        {...inputProps}
      />
    </InnerWrapper>
  </Wrapper>
);

// grow to the full width of its parent container
Wrapper.defaultProps = {
  width: '100%',
  grow: false,
  my:1,
};

TopLabel.defaultProps = {
  color: colors.gray,
  fontSize: 2,
  my: 0.5,
  bg: colors.transparent,
  minHeight: 40,
};

InnerWrapper.defaultProps = {
  flexDirection: 'row',
  bg: colors.white,
  borderWidth: 1,
  borderColor: colors.black,
  minHeight: 40,
  paddingLeft: 10,
  alignItems: 'center',
};

TextInput.defaultProps = {
  p: 2,
  textAlignVertical: 'center',
  width: '100%',
};
