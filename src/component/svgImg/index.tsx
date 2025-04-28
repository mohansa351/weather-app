import React from 'react'
import Svg, { G, Path, Defs, ClipPath, Ellipse, Circle, LinearGradient, Stop, Mask, Pattern, Image, Use, Rect, SvgProps } from "react-native-svg"
import { COLORS } from '../../style'


const SearchIcons = (props: any) => {
    return (
      <Svg
        width={20}
        height={20}
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <Path
          d="M8 14c1.667 0 3.083-.583 4.25-1.75C13.417 11.083 14 9.667 14 8c0-1.667-.583-3.083-1.75-4.25C11.083 2.583 9.667 2 8 2c-1.667 0-3.083.583-4.25 1.75C2.583 4.917 2 6.333 2 8c0 1.667.583 3.083 1.75 4.25C4.917 13.417 6.333 14 8 14zm10.6 6l-5.675-5.675A7.928 7.928 0 018 16c-2.233 0-4.125-.775-5.675-2.325C.775 12.125 0 10.233 0 8c0-2.233.775-4.125 2.325-5.675C3.875.775 5.767 0 8 0c2.233 0 4.125.775 5.675 2.325C15.225 3.875 16 5.767 16 8a7.928 7.928 0 01-1.675 4.925L20 18.6 18.6 20z"
          fill="#000"
        />
      </Svg>
    )
  }
  
  const SmallLocationIcon = (props: any) => {
    return (
      <Svg
        width={15}
        height={18}
        viewBox="0 0 15 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <Path
          d="M7.2 9c.495 0 .919-.176 1.271-.529C8.824 8.12 9 7.695 9 7.2c0-.495-.176-.919-.529-1.271A1.733 1.733 0 007.2 5.4c-.495 0-.919.176-1.271.529A1.733 1.733 0 005.4 7.2c0 .495.176.919.529 1.271C6.28 8.824 6.705 9 7.2 9zm0 6.615c1.83-1.68 3.187-3.206 4.073-4.579.885-1.372 1.327-2.591 1.327-3.656 0-1.635-.521-2.974-1.564-4.016C9.994 2.32 8.715 1.8 7.2 1.8c-1.515 0-2.794.521-3.836 1.564C2.32 4.406 1.8 5.745 1.8 7.38c0 1.065.443 2.284 1.327 3.656.886 1.373 2.243 2.899 4.073 4.579zM7.2 18c-2.415-2.055-4.219-3.964-5.411-5.726C.596 10.51 0 8.88 0 7.38c0-2.25.724-4.043 2.171-5.377C3.62.667 5.295 0 7.2 0c1.905 0 3.581.667 5.029 2.002C13.676 3.338 14.4 5.13 14.4 7.38c0 1.5-.596 3.131-1.789 4.894C11.42 14.036 9.615 15.945 7.2 18z"
          fill="#909090"
        />
      </Svg>
    )
  }

const CrossBorderIcon = (props: SvgProps) => (
    <Svg
      width={56}
      height={56}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G filter="url(#a)">
        <Circle
          cx={37.828}
          cy={30}
          r={14.571}
          transform="rotate(90 37.828 30)"
          fill="#fff"
        />
        <Path
          d="M23.191 38.55a.866.866 0 0 1-1.21-.34 18 18 0 1 1 6.48 7.054.866.866 0 0 1-.237-1.234c.284-.408.844-.506 1.267-.245a16.2 16.2 0 1 0-5.949-6.477c.224.444.08.993-.351 1.242Z"
          fill="#102B58"
        />
      </G>
      <G clipPath="url(#b)" fill="#000">
        <Rect
          x={42.267}
          y={23.835}
          width={2.604}
          height={14.754}
          rx={1.302}
          transform="rotate(45 42.267 23.835)"
        />
        <Rect
          x={31.835}
          y={25.676}
          width={2.604}
          height={14.754}
          rx={1.302}
          transform="rotate(-45 31.835 25.676)"
        />
      </G>
      <Defs>
        <ClipPath id="b">
          <Path fill="#fff" transform="translate(26 15.6)" d="M0 0h24v24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
  
export {
    SearchIcons,CrossBorderIcon,SmallLocationIcon
}