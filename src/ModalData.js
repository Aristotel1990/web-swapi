import React, { useState } from 'react';
import 'antd/dist/antd.css';
import { Modal, Button ,Form, InputNumber} from 'antd';
import { useStateValue } from "./StateProvider";
import axios from 'axios';
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 14,
  },
};
const validateMessages = {
  required: '${label} is required!',
  types: {
    text: '${label} is not a valid email!',
    number: '${label} is not a valid number!',
  }
};

function ModalData({record,history,path}) {
  const {_id,count,name}=record;
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [{}, dispatch] = useStateValue();

  const showModal = () => {
    setIsModalVisible(true);
  };

   
  const onFinish = (values) => {
    try {
      axios.post(`https://server-swawpi.herokuapp.com/${path}/${_id}/set`,values);
      dispatch({
         type: 'UPDATE_DATA',
         itemm: values,
         _id:_id,
         path:path
       })
       history.push(`/${path}`)
       setIsModalVisible(false);
    } catch (e) {
      dispatch({type:'ERRORE',payload:"Invalid count in body"})

    }
      
      };

  const handleCancel = () => {
    history.push(`/${path}`)

    setIsModalVisible(false);
  };
    return (
        <>
      
          <Button  type="primary" onClick={showModal}>
            Edit
          </Button>
          
          <Modal  title={record.name} visible={isModalVisible} onCancel={handleCancel} onOk={()=> setIsModalVisible(false)}>
          <Form  {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
          <Form.Item
            name={'name'}
            label="Name"
           initialValue={name}
           >
            <fieldset >{name}</fieldset>
          </Form.Item>
          <Form.Item
            label="Info"
           >
            <fieldset >Total count is {count}</fieldset>
          </Form.Item>
         
          <Form.Item name={'count'} 
          label="Set Count"
          initialValue={count}>
        <InputNumber  defaultValue={count} min={0} />
          </Form.Item>


          <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>

        </Form>
          </Modal>
         
        
        </>
      );
    };
export default ModalData
