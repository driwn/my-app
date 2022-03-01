import { List } from '@material-ui/core'
import { useContext, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import UserItem from '../UserItem/UserItem'
import './UsersList.css'
import listContext from '../../../contexts/listContext'
import sortList from '../../../utils/sortList'
import LazyLoad from '../LazyLoad/LazyLoad'
import filterList from '../../../utils/filterList'

const UsersList = () => {
    const dispatcher = useDispatch()
    const data = useContext(listContext)
    const currentPage = useSelector((state) => state.page.page)
    const filter = useSelector((state) => state.filter)
    const currentList = useSelector((state) => state.list.list)
    const filteredList = useSelector((state) => state.filteredList.filteredList)

    useEffect(() => {
        const effect = async () => {
            const newList = await sortList(filteredList, filter, currentPage)
            dispatcher({ type: 'SET_LIST', payload: newList })
        }
        effect()
    }, [filteredList, currentPage])

    useEffect(() => {
        const effect = async () => {
            const newFiltList = await filterList(data.list, filter)
            dispatcher({ type: 'SET_FILTERED_LIST', payload: newFiltList })
        }
        effect()
    }, [filter])
    if (!currentList) {
        return <LazyLoad />
    }
    return (
        <List
            component="nav"
            aria-label="secondary mailbox folders"
            id="user-list"
        >
            {currentList.map((user) => {
                return <UserItem user={user} />
            })}
        </List>
    )
}

export default UsersList
