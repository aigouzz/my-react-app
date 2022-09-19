import Modal from './Tips.js'

function Tips(props) {
    return (
        <>
        {props.title ? (
            <Modal>
                <div className='modal-tips-text'>{props.title}</div>
                <i onClick={props.onClose}>x</i>
            </Modal>
        ) : ''}
        </>
    );
}

export default Tips;