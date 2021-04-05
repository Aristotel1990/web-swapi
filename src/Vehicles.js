import React, { useEffect } from 'react'
import 'antd/dist/antd.css';
import { useStateValue } from "./StateProvider";
import { Button, Space, Table } from 'antd';
import axios from 'axios';
import ModalData from './ModalData';
import UnitVehicle from './UnitVehicle';

function Vehicles({history}) {
    const [{ vehicle }, dispatch] = useStateValue();

      const columns = [
          { title: 'Name', dataIndex: 'name', key: 'name' },
          { title: 'Model', dataIndex: 'model', key: 'model' },   
          { title: 'Count', dataIndex: 'count', key: 'count' },
          {
            title: 'Increment/Decrement Count',
            key: 'x',
            render: (record) => <Space><Button danger onClick={()=>onDec(record._id)}>DEC</Button>{" "}<Button type="primary" ghost onClick={()=>onInc(record._id)}>INC</Button> </Space>,
          },
          {
              title: 'Set Count',
              key: 'y',
              render: (record) => <ModalData path={"vehicles"}record={record} history={history}/>,
            },
            {
              title: 'More Info',
              key: 'z',
              render: (record) => <UnitVehicle record={record}/>,
            },
        ];
        async function onInc(id) {
          await axios.get(`http://localhost:3090/vehicles/${id}/inc_dec/?operator=inc`)
            dispatch({type:'INC_DEC_VEH',_id:id,inc:true})
        
        }
        async function onDec(id) {
          await axios.get(`http://localhost:3090/vehicles/${id}/inc_dec/?operator=dec`)
          
            dispatch({type:'INC_DEC_VEH',_id:id,inc:false})
          }
          
        useEffect(() => {
  
          async function getData(){
              const response = await axios.get('http://localhost:3090/vehicles');
              dispatch({type:'INSERT_DATA',itemVehic:response.data})
                  }
          getData()
        }, [])
  
  
      return (
        
      <div style={{padding:100}}>
      
      <Table
      columns={columns}
      title={() => <h2 style={{color:'#3e91ab' }}>VEHICLES</h2>}
      bordered
      size="small"
      pagination={{ position: [ 'bottomCenter']}}
      dataSource={vehicle}
      />
      </div>
      )
}

export default Vehicles
