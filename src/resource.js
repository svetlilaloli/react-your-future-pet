
function App() {
  return (
    <div id="box">
      {/* <!--Navigation--> */}
    <header>
        <nav>
            <section className="logo">
                <img src="./images/logo.png" alt="logo" />
            </section>
            <ul>
                {/* <!--Users and Guest--> */}
                <li><a href="#">Home</a></li>
                <li><a href="#">Dashboard</a></li>
                {/* <!--Only Guest--> */}
                <li><a href="#">Login</a></li>
                <li><a href="#">Register</a></li>
                {/* <!--Only Users--> */}
                <li><a href="#">Create Postcard</a></li>
                <li><a href="#">Logout</a></li>
            </ul>
        </nav>
    </header>

    <main id="content">
        {/* <!--Welcome Page--> */}
        <section className="welcome-content">
            <article className="welcome-content-text">
                <h1>We Care</h1>
                <h1 className="bold-welcome">Your Pets</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
            </article>
            <article className="welcome-content-image">
                <img src="./images/header-dog.png" alt="dog" />
            </article>
        </section>

        {/* <!--Login Page--> */}
        <section id="loginPage">
            <form className="loginForm">
                <img src="./images/logo.png" alt="logo" />
                <h2>Login</h2>

                <div>
                    <label htmlFor="email">Email:</label>
                    <input id="email" name="email" type="text" placeholder="steven@abv.bg" defaultValue="" />
                </div>

                <div>
                    <label htmlFor="password">Password:</label>
                    <input id="password" name="password" type="password" placeholder="********" defaultValue="" />
                </div>

                <button className="btn" type="submit">Login</button>

                <p className="field">
                    <span>If you don't have profile click <a href="#">here</a></span>
                </p>
            </form>
        </section>

        {/* <!--Register Page--> */}
        <section id="registerPage">
            <form className="registerForm">
                <img src="./images/logo.png" alt="logo" />
                <h2>Register</h2>
                <div className="on-dark">
                    <label htmlFor="email">Email:</label>
                    <input id="email" name="email" type="text" placeholder="steven@abv.bg" defaultValue="" />
                </div>

                <div className="on-dark">
                    <label htmlFor="password">Password:</label>
                    <input id="password" name="password" type="password" placeholder="********" defaultValue="" />
                </div>

                <div className="on-dark">
                    <label htmlFor="repeatPassword">Repeat Password:</label>
                    <input id="repeatPassword" name="repeatPassword" type="password" placeholder="********" defaultValue="" />
                </div>

                <button className="btn" type="submit">Register</button>

                <p className="field">
                    <span>If you have profile click <a href="#">here</a></span>
                </p>
            </form>
        </section>

        {/* <!--Dashboard--> */}
        <section id="dashboard">
            <h2 className="dashboard-title">Services for every animal</h2>
            <div className="animals-dashboard">
                <div className="animals-board">
                    <article className="service-img">
                        <img className="animal-image-cover" src="./images/cat2.jpg" alt="cat"/>
                    </article>
                    <h2 className="name">Athena</h2>
                    <h3 className="breed">American Curl</h3>
                    <div className="action">
                        <a className="btn" href="#">Details</a>
                    </div>
                </div>

                <div className="animals-board">
                    <article className="service-img">
                        <img className="animal-image-cover" src="./images/dog2.jpg" alt="dog" />
                    </article>
                    <h2 className="name">Apollo</h2>
                    <h3 className="breed">Pug</h3>
                    <div className="action">
                        <a className="btn" href="#">Details</a>
                    </div>
                </div>

                <div className="animals-board">
                    <img className="animal-image-cover" src="./images/guinea-pig.jpg" alt="guinea-pig" />
                    <h2 className="name">Chibi</h2>
                    <h3 className="breed">Teddy guinea pig</h3>
                    <div className="action">
                        <a className="btn" href="#">Details</a>
                    </div>
                </div>

                <div className="animals-board">
                    <article className="service-img">
                        <img className="animal-image-cover" src="./images/Shiba-Inu.png" alt="Shiba-Inu" />
                    </article>
                    <h2 className="name">Max</h2>
                    <h3 className="breed">Shiba Inu</h3>
                    <div className="action">
                        <a className="btn" href="#">Details</a>
                    </div>
                </div>
                {/* <!--If there is no pets in dashboard--> */}
                <div>
                    <p className="no-pets">No pets in dashboard</p>
                </div>
            </div>
        </section>

        {/* <!--Create Page--> */}
        <section id="createPage">
            <form className="createForm">
                <img src="./images/cat-create.jpg" alt="cat-create"/>
                <div>
                    <h2>Create PetPal</h2>
                    <div className="name">
                        <label htmlFor="name">Name:</label>
                        <input name="name" id="name" type="text" placeholder="Max" />
                    </div>
                    <div className="breed">
                        <label htmlFor="breed">Breed:</label>
                        <input name="breed" id="breed" type="text" placeholder="Shiba Inu" />
                    </div>
                    <div className="Age">
                        <label htmlFor="age">Age:</label>
                        <input name="age" id="age" type="text" placeholder="2 years" />
                    </div>
                    <div className="weight">
                        <label htmlFor="weight">Weight:</label>
                        <input name="weight" id="weight" type="text" placeholder="5kg" />
                    </div>
                    <div className="image">
                        <label htmlFor="image">Image:</label>
                        <input name="image" id="image" type="text" placeholder="./image/dog.jpeg" />
                    </div>
                    <button className="btn" type="submit">Create Pet</button>
                </div>
            </form>
        </section>

        {/* <!--Edit Page--> */}
        <section id="editPage">
            <form className="editForm">
                <img src="./images/editpage-dog.jpg" alt="edit-dog"/>
                <div>
                    <h2>Edit PetPal</h2>
                    <div className="name">
                        <label htmlFor="name">Name:</label>
                        <input name="name" id="name" type="text" defaultValue="Max" />
                    </div>
                    <div className="breed">
                        <label htmlFor="breed">Breed:</label>
                        <input name="breed" id="breed" type="text" defaultValue="Shiba Inu" />
                    </div>
                    <div className="Age">
                        <label htmlFor="age">Age:</label>
                        <input name="age" id="age" type="text" defaultValue="2 years" />
                    </div>
                    <div className="weight">
                        <label htmlFor="weight">Weight:</label>
                        <input name="weight" id="weight" type="text" defaultValue="5kg" />
                    </div>
                    <div className="image">
                        <label htmlFor="image">Image:</label>
                        <input name="image" id="image" type="text" defaultValue="./image/dog.jpeg" />
                    </div>
                    <button className="btn" type="submit">Edit Pet</button>
                </div>
            </form>
        </section>

        {/* <!--Details Page--> */}
        <section id="detailsPage">
            <div className="details">
                <div className="animalPic">
                    <img src="./images/Shiba-Inu.png" alt="Shiba-Inu" />
                </div>
                <div>
                    <div className="animalInfo">
                        <h1>Name: Max</h1>
                        <h3>Breed: Shiba Inu</h3>
                        <h4>Age: 2 years</h4>
                        <h4>Weight: 5kg</h4>
                        <h4 className="donation">Donation: 0$</h4>
                    </div>
                    {/* <!-- if there is no registered user, do not display div--> */}
                    <div className="actionBtn">
                        {/* <!-- Only for registered user and creator of the pets--> */}
                        <a href="#" className="edit">Edit</a>
                        <a href="#" className="remove">Delete</a>
                        {/* <!--(Bonus Part) Only for no creator and user--> */}
                        <a href="#" className="donate">Donate</a>
                    </div>
                </div>
            </div>
        </section>
    </main>

    <footer>Pet Care 2022©</footer>
    </div>
  );
}

export default App;
