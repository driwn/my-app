import {
    Box,
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    Modal,
    Typography,
} from '@material-ui/core'

const ModalUser = ({ user, open, close }) => {
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 300,
        bgcolor: 'background.paper',
        border: '1px solid #000',
        boxShadow: 24,
        borderRadius: '5px',
        p: 0,
    }
    return (
        <Modal
            open={open}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            onClose={close}
            onClick={close}
        >
            <Box sx={style}>
                <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="340"
                            image={user.picture.large}
                            alt={user.name.first}
                        />
                        <CardContent>
                            <Typography
                                gutterBottom
                                variant="h5"
                                component="div"
                            >
                                {user.name.title}. {user.name.first}{' '}
                                {user.name.last}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Phone: {user.phone}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Email: {user.email}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Location: {user.location.country},{' '}
                                {user.location.state}, {user.location.city}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Box>
        </Modal>
    )
}

export default ModalUser
