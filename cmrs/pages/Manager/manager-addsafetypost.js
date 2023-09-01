import Layout from "../layout"
export default function SafetyPost(){
    return(
        <>
        <form>
        <Layout page="SafetyPost">
        <h1>SafetyPost Page</h1>
        <div>
        <label for="id">Id: </label>
        <input type="number" />
        </div>
        <br></br>
        <div>
        <label for="safetypost">Safety Post: </label>
        <input type="varchar" />
        </div>
        <div>
            <br></br>
        <button type="submit">Post</button>
        </div>

            </Layout>
        </form>
        </>
    )
}