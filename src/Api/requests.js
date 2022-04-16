export async function getUsers () {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        return response.json()
    } catch (err) {
        console.log(err);
    }
} 