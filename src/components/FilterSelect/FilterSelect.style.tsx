import styled from '@emotion/styled';
import { IoIosArrowDown } from 'react-icons/io';
import isPropValid from '@emotion/is-prop-valid';

interface ArrowProps {
  isShowOptions: boolean;
}

export const Option = styled.div`
  position: absolute;
  padding: 12px;
  border: 1px solid #dadada;
  background-color: #fff;
  animation: showOption 450ms ease-in-out forwards;
  user-select: none;

  @keyframes showOption {
    0% {
      transform: translateY(-20px);
      opacity: 0;
    }
    100% {
      transform: translateY(0px);
      opacity: 1;
    }
  }
`;

export const Select = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px 16px;
  margin-bottom: 4px;
  border: 1px solid #dadada;
  background-color: #fff;
  user-select: none;

  cursor: pointer;
  z-index: 2;
`;

export const Arrow = styled(IoIosArrowDown, {shouldForwardProp: prop => isPropValid(prop) && prop !== 'isShowOptions',})<ArrowProps>`
  width: 20px;
  height: 20px;
  transform: ${props => (props.isShowOptions ? 'rotateZ(180deg)' : 'rotateZ(0deg)')};
`;
