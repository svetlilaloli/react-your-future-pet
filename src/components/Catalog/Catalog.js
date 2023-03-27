import { CatalogItem } from './CatalogItem/CatalogItem';

export function Catalog({
    pets
}) {
    return (
        <section className="page-section">
            <div className="container px-4 px-lg-5">
                <h2 className="text-center mt-0">Find your best friend</h2>
                <hr className="divider" />
                <div className="row gx-4 gx-lg-5 animals-dashboard">

                    {pets.map((pet) => <CatalogItem key={pet._id} {...pet} />)}

                </div>
            </div>
            {pets.length === 0 &&
                <div className="bg-primary py-5">
                    <div className="container px-4 px-lg-5">
                        <p className="text-center text-light">No pets yet</p>
                    </div>
                </div>}
        </section>
    );
}