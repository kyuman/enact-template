import { Header, Panel } from "@enact/sandstone/Panels";
import Scroller from "@enact/sandstone/Scroller";
import Item from "@enact/sandstone/Item";
import Icon from "@enact/sandstone/Icon";
import Button from "@enact/sandstone/Button";

const NotificationList = ({ notifications, onSelect, onDeleteAll }) => {

  return (
    <Panel>
      <Header
        title="알림 목록"
        subtitle={`${notifications.length} 개의 알림`}
      />
      <Button style={{ marginLeft: 'auto', width: 100, display: 'block', marginBottom: 30 }} onClick={onDeleteAll}>Delete All</Button>
      <Scroller>
        {notifications.map((notification) => (
          <Item
            key={notification.id}
            slotBefore={<Icon>alert01</Icon>}
            slotAfter={<Icon>trash</Icon>}
            label={notification.date}
            //eslint-disable-next-line
            onClick={() => onSelect(notification)}
          >
            {notification.title}
          </Item>
        ))}
      </Scroller>
    </Panel>
  );
};

export default NotificationList;