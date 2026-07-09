export const validateWaitlistField = (
  field: string,
  value: string
) => {

  switch(field){

    case "name":

      if(!value.trim()){
        return "Full name is required";
      }

      if(value.trim().length < 2){
        return "Enter a valid name";
      }

      return "";


    case "email":

      if(!value.trim()){
        return "Email is required";
      }

      if(
        !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
      ){
        return "Enter a valid email";
      }

      return "";


    case "phone":

      if(!value.trim()){
        return "Mobile number is required";
      }

      if(!/^[6-9]\d{9}$/.test(value)){
        return "Enter valid 10 digit mobile number";
      }

      return "";


    case "company":

      if(!value.trim()){
        return "Company name is required";
      }

      return "";


    case "website":

      if(!value){
        return "";
      }


      try{

        new URL(
          value.startsWith("http")
          ? value
          : `https://${value}`
        );

        return "";

      }
      catch{

        return "Enter valid website";

      }


    case "revenue":

      if(!value){
        return "Select revenue range";
      }

      return "";


    case "stage":

      if(!value){
        return "Select startup stage";
      }

      return "";


    default:
      return "";

  }

};