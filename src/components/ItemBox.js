import React from 'react'

function ItemBox(props) {
    const dropUpon = e => {
        e.preventDefault();
        
        const item_id = e.dataTransfer.getData("item_id");
        const item_type = e.dataTransfer.getData("item_type");
        const item = document.getElementById(item_id);

        if(props.type === item_type) {
            item.style.display = "block";
            e.target.appendChild(item);
        }
    }

    const dragOver = e => {
        e.preventDefault();
    }

    return (
        <div
            id={props.id}
            className={props.className}
            type={props.type}
            onDrop={dropUpon}
            onDragOver={dragOver}
        >
            { props.children }
        </div>
    )
}

export default ItemBox;