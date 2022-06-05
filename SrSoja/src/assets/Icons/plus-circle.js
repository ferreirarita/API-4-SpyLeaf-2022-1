import Svg, { Path, Circle } from "react-native-svg";
import stylesVar from '../../styles/stylesVar'

export default (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="currentColor"
    viewBox="0 0 16 16"
  >
    <Circle fill={stylesVar.iconAdd.color} cx="8" cy="8" r="8" />
    <Path
      fill={stylesVar.icon.color}
      d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
    />
    <Path
      fill={stylesVar.icon.color}
      d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"
    />
  </Svg>
);