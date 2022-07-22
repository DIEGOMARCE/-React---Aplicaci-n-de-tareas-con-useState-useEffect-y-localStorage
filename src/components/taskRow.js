export const TaskRow = ({ tasks, toggleTask }) => {
    return (
        <tr >
            <td className="d-flex justify-content-between">
                {tasks.name}
                <input type="checkbox"
                    checked={tasks.done}
                    onChange={() => toggleTask(tasks)}
                />
            </td>
        </tr>



    )

}