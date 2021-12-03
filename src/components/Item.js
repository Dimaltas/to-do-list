export const Item = ({ item, addHandler, deleteHandler }) => {
    return (
        // <li onClick={handleCLick}>
        //     <p>{item}</p>
        //     <button onClick={() => handleClick(item)}>Add</button>
        //     <button onClick={() => handleDelete(item)}>Remove</button>
        // </li>
        <li className={`itemWrapper ${item.checked ? "checked" : ""}`}>
            <div className="content">
                <p>{item.value}</p>
                <p className="date">{item.date.toLocaleString()}</p>
            </div>
            <div className="actions">
                <input type="checkbox" checked={item.checked} onChange={addHandler} />
                <button onClick={deleteHandler}>🗑</button>
            </div>
        </li>
    )    
}