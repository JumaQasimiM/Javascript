// Promiss
const content = document.getElementById("content1");
const content2 = document.getElementById("content2");

function ball1(ball2) {
  setTimeout(() => {
    try {
      if (true) {
        console.log("ball1");
        ball2(ball3);
      } else {
        throw new Error("Ball1 failed!");
      }
    } catch (error) {
      console.log(error);
    }
  }, 2000);
}

function ball2(ball3) {
    setTimeout(() => {
      try {
        if (true) {
          console.log("ball2");
          ball3();
        } else {
          throw new Error("Ball1 failed!");
        }
      } catch (error) {
        console.log(error);
      }
    }, 1000);
  }
  function ball3() {
    setTimeout(() => {
          console.log("ball3");
    }, 3000);
  }
  ball1(ball2);


//   Promiss



function first(){
    return new Promise((resolve,  reject)=>{
        if(true){
            resolve('Ok, Aless in Ordnung!')
        }
        else{
            reject('Ein False Passiert!')
        }

    });
}
function second(){
    return new Promise((resolve,  reject)=>{
        if(true){
            resolve('Ok 2, Aless in Ordnung!')
        }
        else{
            reject('Ein False Passiert!')
        }

    });
}


function tried(){
    return new Promise((resolve,  reject)=>{
        if(true){
            resolve('Ok 3, Aless in Ordnung!')
        }
        else{
            reject('Ein False Passiert!')
        }

    });
}



// first().then((msg)=>{
//     // wenn die function richtig ist.
//     console.log(msg);
//     return second();
// }).then((msg)=>{
//     console.log(msg);
//     return tried();
// }).then((msg)=>{
//     console.log(msg);
// })
// .catch((err)=>{
//     console.log(err);
// });


// Asyn / awit



async function execute(){
   try {
    console.log(await first())
    console.log(await second())
    console.log(await tried())
   } catch (error) {
    console.log(error)
   }
}

execute()



async function API(url){
    if(url){
         return url;
    }
   
}

API('www.google.com').then(
    function(value){console.log('OK URL ')}
        
    
);

const api_key = '';
const city = 'Kabul';
// const city = 'Stuttgart';
const api_url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`;

fetch(api_url
// ,{
    // this is for post data
    // method:'POST',
    // headers:{
    //     'Content-type':'Application/json',
    // }
    // ,
    // body:JSON.stringify({
    //     name:'juma',
    //     last_name:'Qasimi',
    // })
    // }
).then(res=>{
    if(!res.ok){
        throw new Error(`HTTP error! status:${res.status}`);
    }
    return res.json();
}).then(data=>{
    // console.log(data)

    console.log(data.name)
    console.log(data.main.temp+'°C')
    console.log(data.weather[0].description)
    // console.log(new Date(data.sys.sunrise*1000).toLocaleTimeString('en-US',{timeZone:'Asia/Kabul'}))
    // console.log(new Date(data.sys.sunset*1000).toLocaleTimeString('en-US',{timeZone:'Asia/Kabul'}))
    // console.log(new Date(data.sys.sunset*1000).toLocaleTimeString('en-US',{timeZone:'Europe/Berlin',hour12:false}))
    // console.log(new Date(data.sys.sunset*1000).toLocaleTimeString())
  
    content.textContent = 'Kabul Temp : '+ data.main.temp+'°C';
    content2.textContent = 'Kabul sky is : '+ data.weather[0].description;
}).catch(error=>console.log(error));




