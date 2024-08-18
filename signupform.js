URL = "http://localhost:9002/api/v1/actor/register-user"
const form = document.querySelector('form')

form.addEventListener('submitInput', async (e)=> {
    e.preventDefault();
    const email = document.getElementById('emailInput').value;
    const password = document.getElementById('passwordInput').value;
    const phoneNumber = document.getElementById('phoneNumberInput').value;
    const userName = document.getElementById('userNameInput').value;
    

    try{
        const response = await fetch("/", 
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({email:email, password:password, phoneNumber:phoneNumber, userName:userName})
            });

            if(response.ok){
                const result = await response.text();
                alert('User registration successful');
                console.log(result)
            }
            else {
                const err = await response.text();
                alert(err)
                console.error(err)
            }
    } catch (error){
        alert(error.message);
    }
})


