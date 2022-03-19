const HelloWorld = ({myFunc, color}) => {
    return(
        <>
            <h1 style={{color: color}}>Hello World</h1>
            <button onClick={()=> myFunc()}>Change Color</button>
        </>
    )
}
export default HelloWorld