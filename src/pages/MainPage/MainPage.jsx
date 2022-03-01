import { lazy, Suspense, useEffect, useState } from 'react'
import { Provider } from 'react-redux'
import Header from '../components/Header/Header'
import listContext from '../../contexts/listContext'
import { Container } from '@material-ui/core'
import getData from '../../utils/getData'
import './MainPage.css'
import store from '../../store/store'
import LazyLoad from '../components/LazyLoad/LazyLoad'

const MainPage = () => {
    const LazyUsersList = lazy(() =>
        import('../components/UsersList/UsersList')
    )
    const [list, setList] = useState([])

    useEffect(() => {
        const getStarted = async () => {
            const data = await getData()
            setList(data)
        }
        getStarted()
    }, [])

    return (
        <Provider store={store}>
            <listContext.Provider value={{ list, setList }}>
                <Container>
                    <div className="app-box">
                        <Header />
                        <Suspense fallback={<LazyLoad />}>
                            <LazyUsersList />
                        </Suspense>
                    </div>
                </Container>
            </listContext.Provider>
        </Provider>
    )
}

export default MainPage
