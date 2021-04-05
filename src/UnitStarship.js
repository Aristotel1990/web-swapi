import { Button, Drawer } from 'antd';
import React, { useState } from 'react'

function UnitStarship({record}) {
    const [visible, setVisible] = useState(false);

    const showDrawer = () => {
        setVisible(true);
      };
    
      const onClose = () => {
        setVisible(false);
      };
    return (
        <>
        <Button type="gost" onClick={showDrawer}>
          More info
        </Button>
        <Drawer
          title={record.name}
          placement="right"
          width={520}
          closable={false}
          onClose={onClose}
          visible={visible}
        >
          <div>
          <p><strong>Model : </strong> {record.model}</p>
          <p><strong>Manufacturer: </strong>{record.manufacturer}</p>
          <p><strong>Cost_in_credits: </strong>  {record.cost_in_credits}</p>
          <p><strong>Length: </strong>  {record.length}</p>
          <p><strong>Max_atmosphering_speed: </strong>  {record.max_atmosphering_speed}</p>
          <p><strong>Crew: </strong>   {record.crew}</p>
          <p><strong>Passengers: </strong>  {record.passengers}</p>
          <p><strong>Cargo_capacity: </strong>    {record.cargo_capacity}</p>
          <p><strong>Consumables: </strong>  {record.consumables}</p>
          <p><strong>Hyperdrive_rating:  </strong> {record.hyperdrive_rating}</p>
          <p><strong>MGLT: </strong>    {record.MGLT}</p>
          <p><strong>Starship_class: </strong>    {record.starship_class}</p>
          <p><strong>Created: </strong>    {record.created}</p>
          <p><strong>Edited: </strong> {record.edited}</p>
          <p><strong>Url: </strong>    {record.url}</p>
          <p><strong>Count: </strong>   {record.count}</p>
          </div>
        </Drawer>
      </>
    )
}

export default UnitStarship
