import { Link } from "react-router-dom";

export function CatalogItem({
    _id,
    name,
    image
}) {
    return (
        <div className="col-md-6 text-center w-25 mb-4">
            <div className="card w-100 h-100">
                <img className="card-img-top" src={image} alt="pet-image" />
                <div className="card-body d-flex flex-column">
                    <h3 className="card-title mt-auto">{name}</h3>
                    <Link className="btn btn-primary btn-xl mt-auto" to={`/catalog/${_id}`}>Details</Link>
                </div>
            </div>
        </div>
    );
}