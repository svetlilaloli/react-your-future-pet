export function Edit ({
    pet,
    onChange,
    onSubmit
}){
    return (
        <section id="editPage">
            <form className="editForm" onSubmit={onSubmit}>
                <img src="./images/editpage-dog.jpg" alt="edit-dog" />
                <div>
                    <h2>Edit {pet.name}</h2>
                    <div className="name">
                        <label htmlFor="name">Name:</label>
                        <input name="name" id="name" type="text" value={pet.name} onChange={onChange} />
                    </div>
                    <div className="breed">
                        <label htmlFor="breed">Breed:</label>
                        <input name="breed" id="breed" type="text" value={pet.breed} onChange={onChange} />
                    </div>
                    <div className="Age">
                        <label htmlFor="age">Age:</label>
                        <input name="age" id="age" type="text" value={pet.age} onChange={onChange} />
                    </div>
                    <div className="weight">
                        <label htmlFor="weight">Weight:</label>
                        <input name="weight" id="weight" type="text" value={pet.weight} onChange={onChange} />
                    </div>
                    <div className="image">
                        <label htmlFor="image">Image:</label>
                        <input name="image" id="image" type="text" value={pet.image} onChange={onChange} />
                    </div>
                    <button className="btn" type="submit">Edit {pet.name}</button>
                </div>
            </form>
        </section>
    );
}