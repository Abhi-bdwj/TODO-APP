const ListItem = (props) => {
    const { tasks, onDelete } = props;
  
    return (
      <div>
        <ul>
          {tasks.map((task, index) => {
            return (
              <li
                key={index}
                className="m-2 p-3 flex justify-between items-center bg-blue-300 rounded shadow-md"
              >
                <p className="flex-1 mr-4">{task}</p>
  
                <button
                  onClick={() => onDelete(task)}
                  className="bg-red-600 text-white rounded-md px-3 py-1 hover:bg-red-700 cursor-pointer"
                >
                  Delete
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    );
  };
  
  export default ListItem;
  