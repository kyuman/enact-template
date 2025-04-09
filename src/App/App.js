import { useState, useEffect, useCallback } from 'react'
import NotificationList from '../views/Main'
import NotificationDetail from '../views/NotificationDetail'
import { Panel } from '@enact/sandstone/Panels'
import ThemeDecorator from '@enact/sandstone/ThemeDecorator'
import NotificationService from '../service/notification';
import DeleteAll from '../views/DeleteAll';

const App = (props) => {
  const [notifications, setNotifications] = useState([])
  const [selectedNotification, setSelectedNotification] = useState(null)
  const [isPopupOpen, setIsPopupOpen] = useState(false)
  const [isDeleteAllOpen, setIsDeleteAllOpen] = useState(false)

  useEffect(() => {
    NotificationService.getNotifications().then(data => setNotifications(data))
  }, [])

  const handleSelectNotification = useCallback(notification => {
    setSelectedNotification(notification)
    setIsPopupOpen(true)
    NotificationService.createNotification(notification.message);
  }, [])

  const handleClosePopup = useCallback(() => {
    setIsPopupOpen(false)
  }, [])

  const handleOpenDeleteAll = useCallback(() => {
    setIsDeleteAllOpen(true)
  }, [])

  const handleCloseDeleteAll = useCallback(() => {
    setIsDeleteAllOpen(false)
  }, [])

  return (
    <div {...props}>
      <Panel>
        <NotificationList
          notifications={notifications}
          onSelect={handleSelectNotification}
		  onDeleteAll={handleOpenDeleteAll}
        />
      </Panel>
      <NotificationDetail
        notification={selectedNotification}
        open={isPopupOpen}
        onClose={handleClosePopup}
      />
	  <DeleteAll
        open={isDeleteAllOpen}
        onClose={handleCloseDeleteAll}
      />
    </div>
  )
}

export default ThemeDecorator(App)