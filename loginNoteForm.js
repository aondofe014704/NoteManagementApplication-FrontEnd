const loginform = document.querySelector('#loginform')

loginform.addEventListener('submit', async (e) => {
    e.preventDefault();

    const email =  document.getElementById('loginEmai').value;
    const password = document.getElementById('loginPassword').value;
    try {
        const response = await fetch("/", {
            method: 'POST',
            headers: {
                'content-Type': "application/json"
            },
            body: JSON.stringify({email:email, password:password})
        });
        if(response.ok){
            const result = await response.text();
            alert("sucessful response")
            console.log(result);
        }
        else {
            const error = await response.error();
            alert(error)
            console.error(error);
        }
    }catch (error){
        alert(error.message);
    }
})
