import { List, ListItem } from '@material-ui/core'
import '../UsersList/UsersList.css'

const LazyLoad = () => {
    return (
        <List
            component="nav"
            aria-label="secondary mailbox folders"
            id="user-list"
        >
            <ListItem button component="a" id="user-item">
                Loading...
            </ListItem>
        </List>
    )
}

export default LazyLoad
