import styles from './DeleteModel.module.css';

export function DeleteModal({
    onCancel,
    onConfirm
}) {
    return (
        <>
            <div className={`${styles.fade} ${styles.modalBackdrop} ${styles.show}`}></div>
            <div className={`${styles.fade} ${styles.modal} ${styles.show}`} tabIndex="-1" role="dialog" 
                aria-hidden="true" style={{paddingRight: '17px', display: 'block'}}>
                <div className={styles.modalDialog} role="document">
                    <div className={styles.modalContent}>
                        <div className={styles.modalHeader}>
                            <h5 className={styles.modalTitle} id="exampleModalLabel">Delete pet</h5>
                            <button type="button" className={styles.btnClose} onClick={onCancel}></button>
                        </div>
                        <div className={styles.modalBody}>
                            Are you sure you want to delete the pet?
                        </div>
                        <div className={styles.modalFooter}>
                            <button type="button" className={`${styles.btn} ${styles.btnSecondary}`} onClick={onCancel}>Cancel</button>
                            <button type="button" className={`${styles.btn} ${styles.btnPrimary}`} onClick={onConfirm}>Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}