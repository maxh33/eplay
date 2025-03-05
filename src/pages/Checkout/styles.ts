import styled from 'styled-components'
import { Colors } from '../../styles'

type InputGroupProps = {
  $maxWidth?: string
}

type RowProps = {
  $marginTop?: string
}

type TabButtonProps = {
  isActive?: boolean
}

export const Row = styled.div<RowProps>`
  display: flex;
  column-gap: 24px;
  margin-top: ${(props) => props.$marginTop || '0'};
  align-items: flex-end;
`

export const InputGroup = styled.div<InputGroupProps>`
  flex: auto;
  max-width: ${(props) => props.$maxWidth || 'auto'};

  label {
    display: block;
    margin-bottom: 8px;
    font-size: 14px;
  }
  input,
  select {
    height: 32px;
    width: 100%;
    padding: 0 8px;
    background-color: ${Colors.white};
    border: 1px solid ${Colors.white};

    &.error {
      border: 1px solid ${Colors.red};
    }
  }
`
export const TabButton = styled.button<TabButtonProps>`
  border-radius: 8px;
  font-size: 14px;
  font-weight: bold;
  color: ${Colors.white};
  background-color: ${(props) =>
    props.isActive ? Colors.green : Colors.black};
  height: 32px;
  padding: 0px 8px;
  border: none;
  margin-right: 16px;
  cursor: pointer;

  img {
    margin-right: 8px;
  }
`
