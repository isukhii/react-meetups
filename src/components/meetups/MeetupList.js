import classes from './MeetupList.module.css'
import MeetupItem from './MeetupItems'

function MeetupList(props) {
    return (
        <ul className={classes.list}>
            {props.meetups.map((meetup) => (
                <MeetupItem key={meetup.id} id={meetup.id} image={meetup.image} title={meetup.title}
                    meetup={meetup} />
            ))}
        </ul>
    )
}

export default MeetupList;