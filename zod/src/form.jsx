import { useForm } from "react-hook-form";

function Form(){
    const { register, handleSubmit , formState: {errors} } = useForm();

    function SubmitForm(data){
        console.log(data);
    }

    console.log("Render");

    return(
        <form onSubmit={handleSubmit(SubmitForm)}>
        <div>
            <label htmlFor="first">Name:</label>              
            <input id="first" {...register('name' , {
                required:"name can't be empty"
            })} />
            {errors.name && <span>{errors.name.message}</span>}

        </div>
          <div>
            <label htmlFor="Second">Age:</label>              
            <input id="Second" {...register('age',
                {
                    min:{
                        value:10,
                        message: "Minimum age should be 10"
                    },
                    max:{
                        value:80,
                        message: "Maximum age should be 80"
                    }
                }
            )} />
             {errors.age && <span>{errors.age.message}</span>}


        </div>
          <div>
            <label htmlFor="third">Password:</label>              
            <input type="password" id="third" {...register('password',
                 {
                    minLength:{
                        value:6,
                        message: "Minimum Length of password should be 5"
                    },
                    maxLength:{
                        value:12,
                        message: "Maximum Lenght of password should be 12"
                    }
                }
            )} />
            {errors.password && <span>{errors.password.message}</span>}


        </div>
        <button>submit</button>
        </form>
    )

}
export default Form;