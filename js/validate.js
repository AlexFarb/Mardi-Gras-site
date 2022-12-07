const noError = document.getElementById('noError');
const enterbtn = document.getElementById('enterbtn');
enterbtn.addEventListener('click', () => {
    let userContact = {
        firstName: document.getElementById('input1'),
        lastName: document.getElementById('input2'),
        userEmail: document.getElementById('input3'),
        comment: document.getElementById('input4'),
    }
    if ((userContact.firstName.value).length <= 2) {
        input1_text.innerHTML = `<span style= "color: red;"> Your First name is incorrect </span>`;
        return 0;
    }
    else {
        input1_text.innerHTML = `<span style= "color: #8CBF3F;"> Name: </span>`;
    };
    if ((userContact.lastName.value).length <= 2) {
        input2_text.innerHTML = `<span style= "color: red;"> Your Last name is incorrect </span>`;
        return 0;
    }
    else {
        input2_text.innerHTML = `<span style= "color: #8CBF3F;"> Last name: </span>`;
    }

    if (((userContact.userEmail.value).indexOf('@') === -1
        || (userContact.userEmail.value).length < 8
        || (userContact.userEmail.value).indexOf('.com') === -1)) {
        input3_text.innerHTML = `<span style= "color: red;"> Your Email is incorrect </span>`;
        return 0;
    }
    else {
        input3_text.innerHTML = `<span style= "color: #8CBF3F;"> Email address: </span>`;
    }
    if ((userContact.comment.value).length <= 5) {
        input4_text.innerHTML = `<span style= "color: red;"> Please write your comment / Question </span>`;
        return 0;
    } else {
        input4_text.innerHTML = `<span style= "color: #8CBF3F;"> Question / Comments </span>`;
        noError.innerHTML = `<span style= "color: green;"> Thanks for your time, we will try to reply as soon as possible</span>`;
        setTimeout(() => document.getElementById("myForm").submit(), 2500);
    }

});

