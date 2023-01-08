let demo_text = document.getElementById('demo')
let posts = document.querySelector('.posts')

demo_text.innerHTML = 'Demo'
console.log(demo_text);

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(Response => {
        return Response.json()
    })
    .then(data => {
        for ( let post of data){
            console.log(post)
            posts.innerHTML += `
                <div class="post">
                    <h1>${post.title}</h1>
                </div>
            `
        }
    })
    .catch(err => {
        console.log(err)
    })

let num = [1,2,3,4]
let get_num = num.map( (value, index) =>{
    return value*2
})    
console.log(num)
console.log(get_num)