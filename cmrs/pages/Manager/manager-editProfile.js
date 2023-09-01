import Layout from "../layout"
export default function EDIT(){
    return(
        <>
          <form>
        <Layout page="EDIT">
        <h1>Edit Profile Page</h1>
        <div>
        <label for="name">Name: </label>
        <input type="varchar" />
        </div>
        <br></br>
        <div>
        <label for="email">Email: </label>
        <input type="email" />
        </div>
        <br></br>
        <div>
        <label for="phone">Phone no: </label>
        <input type="number" />
        </div>
        <div>
        <br></br>
        <button type="submit">Edit</button>
        </div>

            </Layout>
        </form>
        </>
    )
}