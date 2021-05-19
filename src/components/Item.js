import React from 'react'
import { useDrag } from 'react-dnd'

function Item(props) {
    const [, drag] = useDrag({
        type: props.type,
        item: () => {
            const item = {
                type: props.type,
                id: props.id
            }
            return item;
        },
        end: (item, monitor) => {
            if(monitor.didDrop()) {
                props.dragFunc(item);
            }
        },
        collect: monitor => ({
            isDragging: !!monitor.isDragging()
          })
    },[]);


    /* const dragIt = e => {
        const target = e.target;

        e.dataTransfer.setData('item_id', target.id);
        e.dataTransfer.setData('item_type', props.type);
        e.dataTransfer.setData('name', props.id);
        
        setTimeout(() => {
            target.style.display = "none";
        }, 0);
    }

    const moveOver = e => {
        e.stopPropagation();
    } */

    return (
        <div
            id={props.id}
            className={props.className}
            ref={drag}
            type={props.type}
            draggable="true"
        >
            { props.children }
        </div>
    )
}

export default Item;
/* export default DragSource([Type.Country, Type.Product], )(Item); */