import styles from './Details.module.css';
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { petServiceFactory } from '../../services/petService';
import { useService } from '../../hooks/useService';
import { useAuthContext } from "../../contexts/AuthContext";
import { usePetContext } from "../../contexts/PetContext";
import { DeleteModal } from "./Delete/DeleteModal";

export function Details() {
    const [open, setOpen] = useState(false);
    const { isAuthenticated } = useAuthContext();
    const { petId } = useParams();
    const { onDeleteSubmit } = usePetContext();
    const [pet, setPet] = useState({});
    const petService = useService(petServiceFactory);
    const navigate = useNavigate();

    useEffect(() => {
        petService.getOne(petId)
            .then(result => {
                setPet(result);
            })
    }, [petId])

    const handleCancel = () => setOpen(false);
    const handleOpen = () => setOpen(true)
    const handleConfirm = () => {
        onDeleteSubmit(pet._id);
        setOpen(false);
    }

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={`${styles.row} ${styles.text}`}>
                    <div className={styles.col}>
                        <div className={styles.card}>
                            <div className={`${styles.row} ${styles.g0}`}>
                                <div className={styles.colLg5}>
                                    <img src={pet.image} alt={pet.name} className={styles.imgFluid} />
                                </div>
                                <div className={styles.colLg7}>
                                    <div className={styles.cardBody}>
                                        <h3 className={styles.h3}>Details</h3>
                                        <p>{pet.name}</p>
                                        <p>{pet.breed}</p>
                                        <p>{pet.age}</p>
                                        <p>{pet.weight}</p>
                                        <p>{pet.summary}</p>
                                        <div className={styles.buttonGroup}>
                                            {isAuthenticated &&
                                                <>
                                                    <Link to={`/catalog/${pet._id}/edit`} className={`${styles.btn} ${styles.btnPrimary}`}>Edit</Link>
                                                    <button className={`${styles.btn} ${styles.btnSecondary}`} onClick={handleOpen}>Delete</button>
                                                    {open && <DeleteModal onCancel={handleCancel} onConfirm={handleConfirm} />}
                                                </>
                                            }
                                            <button className={`${styles.btn} ${styles.btnSecondary}`} type="submit" onClick={() => navigate('/catalog')}>Back</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}