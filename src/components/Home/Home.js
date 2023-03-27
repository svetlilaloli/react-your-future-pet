import { Link } from 'react-router-dom';

export function Home (){
    return (
        <header className="masthead">
            <div className="container px-4 px-lg-5 h-100">
                <div className="row gx-4 gx-lg-5 h-100 align-items-center justify-content-center text-center">
                    <div className="col-lg-8 align-self-end">
                        <h1 className="text-white font-weight-bold">Your Favorite Place for Adorable Buddies</h1>
                        <hr className="divider" />
                    </div>
                    <div className="col-lg-8 align-self-baseline">
                        <p className="text-white-75 mb-5">Shelters are full!</p>
                        <p className="text-white-75 mb-5">Help pets find a new home!</p>
                        <Link className="btn btn-primary btn-xl" to="/about">Find Out More</Link>
                    </div>
                </div>
            </div>
        </header>
    );
}