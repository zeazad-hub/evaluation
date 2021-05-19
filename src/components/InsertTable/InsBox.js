import React from 'react'
import { useDrop } from 'react-dnd'
import './insertStyle.css'
import Item from '../Item' 
import { Type } from '../Type'

function InsBox(props) {
    const [, drop] = useDrop({
        accept: [ Type.Product , Type.Country ],
        drop: (item, monitor) => props.dropFunc(item),
        collect: monitor => ({
            isOver: !!monitor.isOver()
        })
    }, []);

    return (
        <div 
            id={props.id}
            className={props.className}
            ref={drop}
        >
            <p>Insert Here</p>
            {props.countries.map((name, index) => {
                return (
                    <Item id={name} key={name} className='item' type={Type.Country} dragFunc={props.dragFunc}>{name}</Item>
                );
            })}

            {props.products.map((name, index) => {
                return (
                    <Item id={name} key={name} className='item' type={Type.Product} dragFunc={props.dragFunc}>{name}</Item>
                );
            })}
        </div>
    );
}
export default InsBox;