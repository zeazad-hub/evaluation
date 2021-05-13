import React from 'react'

function Item(props) {
    const dragIt = e => {
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
    }

    return (
        <div
            id={props.id}
            className={props.className}
            type={props.type}
            draggable="true"
            onDragStart={dragIt}
            onDragOver={moveOver}
        >
            { props.children }
        </div>
    )
}

export default Item;