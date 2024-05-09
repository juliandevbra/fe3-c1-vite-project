import Counter from "./Counter"
import CardStyles from '../Styles/Card.module.css'

console.log(CardStyles)

const Card = ({item}) => {
    // console.log(item)
    return( 
        <div className={CardStyles.cardContainer}>
            <img src={item.img} alt="" className={CardStyles.cardImg} />
            <h4>{item.tipo}</h4>
            <h4>{item.precio}</h4>
            {/* <Counter/> */}
        
        </div>
    )
}

export default Card
