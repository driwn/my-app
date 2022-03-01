import { Grid, ListItem, Typography } from '@material-ui/core'
import Avatar from '@material-ui/core/Avatar'
import { useState } from 'react'
import ModalUser from '../Modals/ModalUser/ModalUser'
import './UserItem.css'

const UserItem = ({ user }) => {
    const [open, setOpen] = useState(false)
    return (
        <ListItem
            button
            component="a"
            id="user-item"
            onClick={() => {
                setOpen((prev) => !prev)
            }}
        >
            <ModalUser user={user} open={open} clsoe={() => setOpen(false)} />
            <Grid container spacing={1}>
                <Grid item xs={1}>
                    <Avatar src={user.picture.thumbnail} />
                </Grid>
                <Grid item xs={11} container spacing={2}>
                    <Grid item xs={12} id="user_dis">
                        <Typography>
                            {user.name.title}. {user.name.first}{' '}
                            {user.name.last}
                        </Typography>
                    </Grid>
                    <Grid item xs={12} className="phone" id="user_dis">
                        {user.phone}
                    </Grid>
                </Grid>
            </Grid>
        </ListItem>
    )
}

export default UserItem
