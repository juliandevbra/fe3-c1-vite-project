import Counter from "./Counter"

const Card = (props) => {
    console.log(props)
    return( 
        <div>
            {props.children}
            <Counter/>
        </div>
    )
}

export default Card
