import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import * as petService from '../../services/petService';

export function Details() {
    const [pet, setPet] = useState({});
    const { petId } = useParams();
    useEffect(() => {
        petService.getOne(petId)
            .then(result => {
                setPet(result);
            })
    }, [petId])
    return (
        <section className="page-section vh-75">
            <div className="container py-5 h-75">
                <div className="row d-flex justify-content-center align-items-center h-75">
                    <div className="col col-xl-10">
                        <div className="card" style={{ borderRadius: '1rem' }}>
                            <div className="row g-0">
                                <div class="col-md-6 col-lg-5 d-none d-md-block">
                                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp"
                                        alt="login form" class="img-fluid" style={{ borderRadius: '1rem 0 0 1rem' }} />
                                </div>
                                <div className="col-md-6 col-lg-7 d-flex align-items-center">
                                    <div class="card-body px-4 p-lg-5">
                                        <h3 className="mb-3 pb-3">Details</h3>
                                        <p>Name</p>
                                        <p>Breed</p>
                                        <p>Age</p>
                                        <p>Weight</p>
                                        <p>Description</p>
                                        <p>Adopting an animal is a really great and rewarding way of finding your new pet as rescue animals are special and have so much love and devotion to give to a new owner. All the animals at Ard Jerkyll are given a full MOT before they are re-homed so they are ready to start their new life with all the advantages we – and you – can give them.

Vaccinated, microchipped wormed and neutered
Examined by a vet and treated as required
Assessed by an experienced member of our team to determine what type of training and education they need
Given an individual training plan depending on their needs
Given an individual profile to help match them with their new owner
We’d love you to come and see us. Visitors are welcome to walk around the site, cattery and small animal section during our animal visiting hours, that’s 1 to 4 every day, except for Thursdays. We do, however, operate restricted viewing of the dogs to minimise their stress levels.</p>
                                        <div class="d-grid gap-4 d-md-block">
                                            <Link to="./edit" className="btn btn-primary btn-xl">Edit</Link>
                                            <Link to="./remove" className="btn btn-secondary btn-xl">Delete</Link>
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