import { useState, useEffect, useContext } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { petServiceFactory } from '../../services/petService';
import { useService } from '../../hooks/useService';
import { AuthContext } from "../../contexts/AuthContext";

export function Details() {
    const { userId, isAuthenticated } = useContext(AuthContext);
    const [username, setUsername] = useState('');
    const { petId } = useParams();
    const [pet, setPet] = useState({});
    const petService = useService(petServiceFactory);
    const navigate = useNavigate();

    useEffect(() => {
        petService.getOne(petId)
            .then(result => {
                setPet(result);
            })
    }, [petId])

    const isOwner = pet._ownerId === userId;

    const onDeleteClick = async () => {
        await petService.delete(pet._id);

        // TODO: delete from state

        navigate('/catalog');
    };
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
                                        <p></p>
                                        {isAuthenticated &&
                                            <div className="d-grid gap-4 d-md-block">
                                                <Link to={`/catalog/${pet._id}/edit`} className="btn btn-primary btn-xl">Edit</Link>
                                                <button className="btn btn-secondary btn-xl">Delete</button>
                                            </div>
                                        }
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