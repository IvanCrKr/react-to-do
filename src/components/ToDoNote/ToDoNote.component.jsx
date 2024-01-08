import './_ToDoNote.style.scss';

const ToDoNote = (props) => {
    
    return (
        <div className='note my-2 p-2'>
            <div className='note-container'>
                <div className='note-checked ms-2 me-3'>
                    <input type='checkbox' className='form-check-input' checked={props.done} onChange={props.handleChecked}/>
                </div>
                <div className='note-content'>
                    <div className='note-title row'>
                        <div className='col-md-8'>
                            {props.title}
                        </div>
                        <div className='col-md-4 text-end px-3'>
                            <span>{props.deadline}</span>
                        </div>
                    </div>
                    <span>{props.description}</span>
                </div>
            </div>
        </div>
    )
};

export default ToDoNote;