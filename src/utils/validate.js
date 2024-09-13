

//  Email Password Validation using Regex   
export const validate = (email, password, name) => {
    const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email) ;
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password) ;
    // const isNameValid = /^[A-Za-z]+([ A-Za-z'-]+)*$/.test(name) ;
    const isNameValid = /^[A-Za-z]+([A-Za-z '-]+)*$/.test(name);
    if(!isEmailValid) return " Invalid Email " ;
    if(!isPasswordValid) return "Invalid Password" ;
    if(!isNameValid) return "Name not complete " ;

    //  If its valid then simply return null, means there is nothing to return everything is right . 
    return null ;  
}


