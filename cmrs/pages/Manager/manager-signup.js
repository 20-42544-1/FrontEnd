import Layout from "../layout"
export default function REG(){
    return(
        <>
          <form>
        <Layout page="REG">
        <h1>Registration Page</h1>
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
        <button type="submit">SIGN UP</button>
        </div>

            </Layout>
        </form>
        </>
    )
}