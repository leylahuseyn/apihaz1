const btn = document.querySelector('.btn')
btn.addEventListener('click', function(){
    fetch('https://646da3fa9c677e23218a2d12.mockapi.io/students',{
        method: 'POST',
        headers: {
            'Content-Type':'application/json'
        },
        body:JSON.stringify({
            name : document.querySelector('#name').value,
            surname : document.querySelector('#surname').value,
            age : document.querySelector('#age').value,
            profilimage : document.querySelector('#profilimage').value,
        })
    }).then(res=>{
        if(res.ok){
            alert('elave olundu');
            document.querySelector('#name').value ='';
            document.querySelector('#surname').value ='';
            document.querySelector('#age').value ='';
            document.querySelector('#profilimage').value ='';
        }
        else{
            console.log('error');
        }
    }).catch(()=>console.log('error'))
})