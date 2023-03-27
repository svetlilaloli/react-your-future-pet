import { Link } from "react-router-dom";

export function CatalogItem({
    id,
    name,
    image
}) {
    return (
        <div className="col-lg-3 col-md-6 text-center">
            <div className="card">
                <img className="card-img-top" src={image} alt="pet" />
                <div className="card-body">
                    <h3 className="card-title">{name}</h3>
                    <Link className="btn btn-primary btn-xl" to={`/catalog/${id}`}>Details</Link>
                </div>
            </div>
        </div>
    );
}