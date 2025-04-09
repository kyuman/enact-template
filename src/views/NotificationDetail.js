import { useState, useEffect } from "react";
import Alert from "@enact/sandstone/Alert";
import BodyText from "@enact/sandstone/BodyText";
import Button from "@enact/sandstone/Button";
import memService from "../service/mem";

const NotificationDetail = ({ notification, open, onClose }) => {
  const [unitList, setUnitList] = useState([])
  useEffect(() => {
    console.log("@@@ getUnitList")
    memService.getUnitList(data => {
      console.log('getUnitList : ', data)
      setUnitList(data?.unitList)
    })
  }, [])
  return (
    <Alert title={notification?.title} open={open}>
      <BodyText size="small">
        {notification?.date}에 받은 메시지 입니다.
      </BodyText>
      <BodyText>{notification?.message}</BodyText>
      <BodyText>{unitList.join(', ')}</BodyText>
      <buttons>
        <Button onClick={onClose}>닫기</Button>
      </buttons>
    </Alert>
  );
};

export default NotificationDetail;