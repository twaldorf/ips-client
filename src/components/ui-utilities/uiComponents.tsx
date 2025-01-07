import { buttonAction, buttonActionWrapper } from "../../styles/buttons";
import { borderRadius, lightBorder } from "./globalParameters";

export const Box = ({ children, style }) => {
  return (
    <div style={ { ...boxStyle, ...style } }>
      { children }
    </div>
  )
}

const boxStyle = {
  borderRadius: borderRadius,
  border: lightBorder,
  padding: '2rem',
}

export const ActionButtonWrapper = ({children, style}) => {
  return (
    <div style={ {...buttonActionWrapper, ...style} }>
      {children}
    </div>
  )
}