interface Props {}

function Circle(props: Props) {
    const {} = props

    return (
<div
 style={{background:'red', borderRadius: '50%', width: '5%', height: '3em', padding: '1em', margin: '1%'}}
  >Circle</div>        
    )
}

export default Circle