// Refactor for variant
// interface Props {}
interface Props  {
    variant?: "blue"|'green' | 'yellow'| 'red'
}

function Circle({variant = "blue"}: Props) {
    const {} = variant

    return (
<div
 style={{
 background:variant, 
 borderRadius: '50%',
 width: '5%', 
 height: '3em', 
 padding: '1em', 
 margin: '1%'}}
  />        
    )
}

export default Circle