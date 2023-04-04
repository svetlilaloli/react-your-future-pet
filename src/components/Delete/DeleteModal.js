import { Modal, Button } from 'react-bootstrap';

export function DeleteModal({
    show,
    onDeleteSubmit,
    onDeleteCancel,
}) {
    return (
        <div className="modal show" style={{ display: 'block', position: 'initial' }}>
            <Modal.Dialog show={show} onEscapeKeyDown={onDeleteCancel} onBlur={onDeleteCancel}>
                <Modal.Header closeButton onHide={onDeleteCancel}>
                    <Modal.Title>Delete</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Are you sure you want to delete the pet?</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={onDeleteCancel}>Cancel</Button>
                    <Button variant="primary" onClick={onDeleteSubmit}>Delete</Button>
                </Modal.Footer>
            </Modal.Dialog>
        </div>
    );
}