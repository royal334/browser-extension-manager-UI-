import {Switch} from './ui/switch'

type ToggleProps={
     isActive: boolean
     onToggle: () => void;
}
function Toggle(props:ToggleProps) {
  return (
     <Switch checked={props.isActive} onCheckedChange={props.onToggle} className='data-[state=checked]:bg-red-500 cursor-pointer' />
  )
}

export default Toggle