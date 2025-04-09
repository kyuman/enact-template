import Alert from "@enact/sandstone/Alert";
import BodyText from "@enact/sandstone/BodyText";
import Button from "@enact/sandstone/Button";

const DeleteAll = ({ open, onClose }) => {
  return (
    <Alert title="Delete All" open={open}>
      <BodyText size="small">
        전체 알림을 삭제하시겠습니까?
      </BodyText>
      <buttons>
        <Button onClick={onClose}>예</Button>
        <Button onClick={onClose}>아니오</Button>
      </buttons>
    </Alert>
  );
};


export default DeleteAll;