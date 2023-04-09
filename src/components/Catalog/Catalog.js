import { CatalogItem } from './CatalogItem/CatalogItem';
import {usePetContext} from '../../contexts/PetContext';

export function Catalog() {
    const { pets } = usePetContext();
    
    return (
        <section className="page-section bg-primary">
            <div className="container px-4 px-lg-5">
                <h2 className="text-white text-center mt-0">Find your best friend</h2>
                <hr className="divider divider-light" />
                <div className="row gx-4 gx-lg-5">

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