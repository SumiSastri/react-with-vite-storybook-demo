
interface Props {}

function TrafficLights(props: Props) {
    const {} = props

    return (
        <div>
<div
style={{background:'red', borderRadius: '50%', width: '5%', height: '3em', padding: '1em', margin: '1%'}}
  ></div>
  <div
  style={{background:'yellow', borderRadius: '50%', width: '5%', height: '3em', padding: '1em', margin: '1%'}}
  ></div>
    <div
      style={{background:'green', borderRadius: '50%', width: '5%', height: '3em', padding: '1em', margin: '1%'}}
  ></div>
        </div>
        
    )
}

export default TrafficLights
