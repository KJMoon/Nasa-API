//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/
const img = document.querySelector('#img')


document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const choice = document.querySelector('input').value
  console.log(choice)

  const url = `https://api.nasa.gov/planetary/apod?api_key=6Na46lhS12slkjNN9Cb3kWGCWWNc636F5L2fUzW2&date=${choice}`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        if(data.media_type === 'image'){
            document.querySelector('img').src = data.hdurl
            document.querySelector('iframe').src = ''
        }else if(data.media_type === 'video'){
            document.querySelector('iframe').src = data.url
            document.querySelector('img').src = ''
        }

        document.querySelector('h3').innerText = data.explanation
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

