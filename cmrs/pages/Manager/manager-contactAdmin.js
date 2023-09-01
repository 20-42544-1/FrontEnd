import Layout from "../layout"
export default function CONTACT(){
    return(
        <>
        <form>
        <Layout page="CONTACT">
        <h1>Contact Admin Page</h1>
        <div>
        <label for="email">Email: </label>
        <input type="email" />
        </div>
        <br></br>
        <div>
        <label for="text">Text: </label>
        <input type="varchar" />
        </div>
        <div>
            <br></br>
        <button type="submit">Send</button>
        </div>

            </Layout>
        </form>
        </>
    )
}