    const bottom = document.querySelector('.bottom-input');
    const email = document.querySelector('.email-input');
    const error = document.querySelector('.error');
    const validate = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
    
    bottom.addEventListener( 'click', (e) => {
        e.preventDefault();
        if(validate.test(email.value)){
            error.style.display = 'none'
        }else{
            error.style.display = 'flex'
        }
    })