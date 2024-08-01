import cloud from '../../assets/icons/cloud.png'
import *as styles from '../Weather/Weather.css'
export const Cloudy=()=>{
    return( 
        <div className="icons">
            <img src={cloud} alt="" id='cloudy'/>
        </div>
    )
}