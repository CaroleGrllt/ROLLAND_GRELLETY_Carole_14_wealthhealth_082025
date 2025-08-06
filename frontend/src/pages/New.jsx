import Form from "../components/Form"

export default function New() {
    return(
        <div className="new-container">
            <div className="new-container-title">
                <h2>Create a new employee record</h2>
            </div>
            <div className="form-container">
                <Form />
            </div>
        </div>
    )
}