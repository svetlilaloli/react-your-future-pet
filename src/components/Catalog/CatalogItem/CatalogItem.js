import { Link } from "react-router-dom";

export function CatalogItem({
    _id,
    name,
    image
}) {
    return (
        <div className="col-lg-3 col-md-6 text-center" style={{width: '18rem', height: '20rem'}}>
            <div className="card">
                <img className="card-img-top" src={image} alt="pet" />
                <div className="card-body">
                    <h3 className="card-title">{name}</h3>
                    <Link className="btn btn-primary btn-xl" to={`/catalog/${_id}`}>Details</Link>
                </div>
            </div>
        </div>
    );
}