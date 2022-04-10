import Svg, { Path, Circle} from 'react-native-svg'

export default (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={props.size} height={props.size} fill="currentColor" class="bi bi-check-circle" viewBox="0 0 16 16">
    <Circle fill={props.color} cx="8" cy="8" r="8" />
    <Path fill={props.fill} d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
    <Path fill={props.fill} d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"/>
  </Svg>
)