import { Modal } from 'antd';


//Code for antdesign modal, creating once and access by getting props from every component
const CustomModal = ({ open, title, onCancel, onOk, footer, body, width }) => {
  return (
    <Modal
      open={open}
      title={title}
      width={width}
      onCancel={onCancel}
      onOk={onOk}
      centered
      footer={footer}
    >
      {body}
    </Modal>
  );
};

export default CustomModal;
