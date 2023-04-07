import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

export function DeleteModal({
    show,
    onClose,
    onSubmitDelete
}) {
    return (
        <Modal show={show} onHide={onClose}>
            <Modal.Header closeButton>
                <Modal.Title>Delete pet</Modal.Title>
            </Modal.Header>
            <Modal.Body>Are you sure you want to delete the pet?</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary"onClick={onClose}>Close</Button>
                <Button variant="primary" onClick={onSubmitDelete}>Delete</Button>
            </Modal.Footer>
        </Modal>
    );
}