import { Box, Grid, Toolbar } from '@material-ui/core'
import ThemeSwitch from '../../ThemeSwitch/ThemeSwitch'
import CountSelector from '../Selectors/CountSelector/CountSelector'
import FilterSelector from '../Selectors/FilterSelector/FilterSelector'
import GenderSelector from '../Selectors/GenderSelector/GenderSelector'
import PageSelector from '../Selectors/PageSelector/PageSelector'
import Time from '../Time/Time'
import './Header.css'

const Header = () => {
    return (
        <Toolbar id="tool-bar">
            <Grid container spacing={2}>
                <Grid item xs={5}>
                    <Time />
                </Grid>
                <Grid item xs={6}></Grid>
                <Grid item xs={1}>
                    <Box>
                        <ThemeSwitch />
                    </Box>
                </Grid>
                <Grid item xs={1}>
                    <GenderSelector />
                </Grid>
                <Grid item xs={4}>
                    <PageSelector />
                </Grid>
                <Grid item xs={3}>
                    <CountSelector />
                </Grid>
                <Grid item xs={3}>
                    <FilterSelector />
                </Grid>
            </Grid>
        </Toolbar>
    )
}

export default Header
