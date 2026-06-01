async function registerStudent() {

    alert("Function Called");

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let course = document.getElementById("course").value;

    const response = await fetch(
        "http://65.0.95.93:3000/register",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name,
                email,
                course
            })
        }
    );

    const data = await response.json();

    document.getElementById("msg").innerHTML =
        data.message;
}