
const new_user ={
    id:100,
    first_name:'juma',
    last_name:'Qasimi'
}

fetch('https://reqres.in/api/users',{
    method:'POST',
    headers:{
        'Content-type':'Application/json',
    },
    body:JSON.stringify(new_user),

})
.then(res=> res.json())
.then(data=>console.log(data));




// GET data from api
fetch('https://reqres.in/api/users')
 .then(response=>
    {
        if(!response.ok){
            throw new Error('Problem!');
            return;
        }
        else{
        return response.json()
        }
    })
 .then(data=>console.log(data))
 .catch(err=>console.log(err));
 
// UPDATE DATA

const new_user_update ={
    id:1000,
    first_name:'Mohammad',
    last_name:'Qasimi'
}

fetch('https://reqres.in/api/users/1000',{
    method:'PUT',
    headers:{
        'Content-type':'Application/json',
    },
    body:JSON.stringify(new_user_update),

})
.then(res=> res.json())
.then(data=>console.log(data))
.catch(err=>console.log(err));

// DELETE


fetch('https://reqres.in/api/users/1000',{
    method:'DELETE'
})
.then(res=> {
   console.log('deleted!');
})

.then(data=>console.log(data))

.catch(err=>console.log(err));


// read product form API

