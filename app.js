const btnEl = document.querySelector('button')
const idEl = document.getElementById('idAdvice')
const h2El = document.querySelector('h2')

btnEl.addEventListener('click', async ()=>{
    const url = new URL('https://api.adviceslip.com/advice')
    const response = await fetch(url)
    const data = await response.json()

    const feed = new Promise((resolve, reject)=>{
        if (response.ok) {
            resolve('Success')
        } else {
            reject('Reject')
        }
    })

    feed.then((success)=>{
        idEl.innerText = data.slip.id
        h2El.innerText = data.slip.advice
        console.log(success)
    }).catch((error)=>{
        console.log('Error: ', error)
    })
})