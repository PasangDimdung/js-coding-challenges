async function getUserDetails(){
    try {
        var result = await fetch("/").then(res => res.json());
        console.log(result);

    } catch (error) {
        console.log("Failed.");
    }
}


getUserDetails();