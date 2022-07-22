export const VisibilityControl = ({ isChecked, setshowCompleted, cleanTasks }) => {

    const handleDelete = () => {
        if (window.confirm('Are you sure you want to delet it?')) {
            cleanTasks()
        }
    }

    return (
        <div className="d-flex justify-content-between bg-secondary text-white text-center p-2 border-secondary">
           <div className="form-check form-switch">
           <input
                className="form-check-input"
                type="checkbox"
                checked={isChecked}

                onChange={(e) => setshowCompleted(e.target.checked)} /> {""}

            <label >Show Tasks Done</label>

           </div>

            <button onClick={handleDelete} className='btn btn-danger btn-sm'>
                Clear

            </button>




        </div>



    )
}