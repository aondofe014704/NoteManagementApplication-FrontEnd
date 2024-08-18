URL = "http://localhost:8080/api/v1/notes/add-note"
const updateNote = document.querySelector('#updateNote')

updateNote.addEventListener('submit', async (e) => {
    e.preventDefault();
    const newTitle = document.getElementById('newTitle').value;
    const newContent = document.getElementById('newContent').value;

    try{
        const response = await fetch(URL, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({newTitle: newTitle, newContent: newContent})
        });
        if(response.statusCode === 200){
            const result = await response.text();
            alert('Note updated successfully');
            console.log(result);
        } else{
                const error = await response.text();
                alert(error);
                console.error(error);
        }
    }catch (error){
        alert(error.message);
    }
})
