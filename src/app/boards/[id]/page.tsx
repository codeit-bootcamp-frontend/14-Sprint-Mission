'use Client'

import BoardDescription from './BoardDescription'
import BoardCommentList from './BoardCommentList'
import ItemsNavVar from '../../../components/domain/Nav/ItemsNavVar'
import styles from './BoardId.module.scss'

const BoardId = () => {
  return (
    <div>
      <ItemsNavVar isItemsPage={false} isBoardsPage={true} />

      <div className={styles['bone']}>
        <BoardDescription />
        <BoardCommentList />
      </div>
    </div>
  )
}

export default BoardId
