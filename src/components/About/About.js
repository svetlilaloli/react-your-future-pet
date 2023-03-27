import { Link } from 'react-router-dom';

export function About() {
    return (
        <section className="page-section bg-primary" id="about">
            <div className="container px-4 px-lg-5">
                <div className="row gx-4 gx-lg-5 justify-content-center">
                    <div className="col-lg-8 text-center">
                        <h2 className="text-white mt-0">We've got what you need!</h2>
                        <hr className="divider divider-light" />
                        <p className="text-white-75 mb-4">Dogs, cats, small animals, even birds. Our staff and our volunteers care for these lost, abandoned or injured creatures, restore them to health, bring back their confidence and rehabilitate them. It's a worthwhile and often upsetting task as some of these creatures have been badly treated or seriously injured, but seeing a frightened and cowering dog change into the loving and playful creature it was born to be is a delight.</p>
                        <Link className="btn btn-light btn-xl" to="/catalog">Find your best friend!</Link>
                    </div>
                </div>
            </div>
        </section>
    );
}