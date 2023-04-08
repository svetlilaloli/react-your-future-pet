import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { petServiceFactory } from '../../services/petService';
import { useService } from '../../hooks/useService';
import { useAuthContext } from "../../contexts/AuthContext";
import { usePetContext } from "../../contexts/PetContext";
import { DeleteModal } from "../Delete/DeleteModal";

export function Details() {
    const [showDelete, setShowDelete] = useState(false);
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

    const handleClose = () => setShowDelete(false);
    const handleShow = () => setShowDelete(true)
    const handleSubmitDelete = () => {
        onDeleteSubmit(pet._id);
        setShowDelete(false);
    }

    return (
        <section className="page-section bg-primary vh-75">
            <div className="container py-5 h-75">
                <div className="row d-flex justify-content-center align-items-center h-75">
                    <div className="col col-xl-10">
                        <div className="card" style={{ borderRadius: '1rem' }}>
                            <div className="row g-0">
                                <div className="col-md-6 col-lg-5 d-none d-md-block">
                                    <img src={pet.image} alt="pet image" className="img-fluid" style={{ borderRadius: '1rem 0 0 1rem' }} />
                                </div>
                                <div className="col-md-6 col-lg-7 d-flex align-items-center">
                                    <div className="card-body px-4 p-lg-5">
                                        <h3 className="mb-3 pb-3">Details</h3>
                                        <p>{pet.name}</p>
                                        <p>{pet.breed}</p>
                                        <p>{pet.age}</p>
                                        <p>{pet.weight}</p>
                                        <p>{pet.summary}</p>
                                        <div className="d-grid gap-4 d-md-block">
                                            {isAuthenticated &&
                                                <>
                                                    {/* <div className="d-grid gap-4 d-md-block"> */}
                                                    <Link to={`/catalog/${pet._id}/edit`} className="btn btn-primary btn-xl">Edit</Link>
                                                    <button className="btn btn-secondary btn-xl" onClick={handleShow}>Delete</button>
                                                    {/* </div> */}
                                                    <DeleteModal show={showDelete} onClose={handleClose} onSubmitDelete={handleSubmitDelete} />
                                                </>
                                            }
                                            <button className="btn btn-secondary btn-xl" type="submit" onClick={() => navigate(-1)}>Back</button>
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