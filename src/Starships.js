import React, { useEffect } from 'react'
import 'antd/dist/antd.css';
import { useStateValue } from "./StateProvider";
import { Button, Table, Space } from 'antd';
import axios from 'axios';
import ModalData from './ModalData';
import UnitStarship from './UnitStarship';

function Starships( {history}) {
 

    const [{ starship }, dispatch] = useStateValue();

  
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
            render: (record) => <ModalData  path={"starships"} history={history} record={record}/>,
          },
          {
            title: 'More Info',
            key: 'y',
            render: (record) =><UnitStarship record={record}/> } , 
      ];


  
     async function onInc(id) {
       try {
        await axios.get(`https://server-swawpi.herokuapp.com/starships/${id}/inc_dec/?operator=inc`)
        dispatch({type:'INC_DEC_STA',_id:id,inc:true})
      
       } catch (error) {
        dispatch({type:'ERRORE',payload:"Invalid count in body"})

       }
       
      } 
      async function onDec(id) {
        await axios.get(`https://server-swawpi.herokuapp.com/starships/${id}/inc_dec/?operator=dec`)
        
          dispatch({type:'INC_DEC_STA',_id:id,inc:false})
        }
        
      
      useEffect(() => {

        async function getData(){
            const response = await axios.get('https://server-swawpi.herokuapp.com/starships');
            dispatch({type:'INSERT_DATA',itemStar:response.data})
            console.log(response.data)
                }
        getData()
      }, [])


    return (
    <div style={{padding:100}}>
      <div style={{background:"white"}} >
      <Table
    bordered
    size="small"
    pagination={{ position: [ 'bottomCenter']}}
    columns={columns}
    dataSource={starship}
    />
      </div>
    
    </div>
    )
}

export default Starships
