import Layout from "../layout"
export default function LOGIN(){
    return(
        <>
        <form>
        <Layout page="LOGIN">
        <h1>Login Page</h1>
        <div>
        <label for="id">Id: </label>
        <input type="number" />
        </div>
        <br></br>
        <div>
        <label for="password">Password: </label>
        <input type="password" />
        </div>
        <div>
            <br></br>
        <button type="submit">Login</button>
        </div>

            </Layout>
        </form>
        </>
    )
}