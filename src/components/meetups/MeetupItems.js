import classes from './MeetupItems.module.css'
import Card from '../ui/card'

function MeetupItem(props) {
    return (
        <Card>
            <li className={classes.item}>
                <div className={classes.image}>
                    <img src={props.image} alt={props.title} />
                </div>
                <div className={classes.content}>
                    <h3>{props.meetup.title}</h3>
                    <address>{props.meetup.address}</address>
                    <p>{props.meetup.description}</p>
                </div>
                <div className={classes.actions}>
                    <button>To fav</button>
                </div>
            </li>
        </Card>
    )
}

export default MeetupItem;