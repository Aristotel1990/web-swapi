import { Alert, Spin } from 'antd';
import React, { useEffect } from 'react'

function DataPopulate({history}) {


    useEffect(() => {
       
        const timer = setTimeout(() => {
         history.push("/")}, 10000);
        return () => clearTimeout(timer);
      }, []);
    return (
        <div style={{padding:300}}>
            
    <Spin tip="Loading...">
    <Alert
      message="Database is refreshing"
      type="info"
    />
  </Spin>


        </div>
    )
}

export default DataPopulate
