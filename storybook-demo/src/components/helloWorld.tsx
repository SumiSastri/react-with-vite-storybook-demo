interface Props {}

function HelloWorld(props: Props) {
    const {} = props

    return (
        <div>Hello World - the app is on
            <p>{import.meta.env.VITE_API_URL}</p>
            </div>
    )
}

export default HelloWorld
