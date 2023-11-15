// Refactor for variant - which is used in the style object
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
 width: '20px', 
 height: '20px', 
 padding: '1em', 
 margin: '1%'}}
  />        
    )
}

export default Circle