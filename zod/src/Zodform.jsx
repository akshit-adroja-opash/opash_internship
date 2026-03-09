import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import './Zodform.css'; 

const formSchema = z.object({
  name: z.string().min(3, "Minimum length is 3").max(20, "Maximum length is 20"),
  age: z.coerce.number().min(8, "Must be at least 8").max(80, "Must be under 80"), 
  password: z.string().min(5, "Minimum length is 5").max(20, "Maximum length is 20"),
  confirmPassword: z.string().min(5, "Minimum length is 5").max(20, "Maximum length is 20"),
  Email: z.string().email("Email is invalid")
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords must match",
  path: ["confirmPassword"],
});

function ZodForm() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(formSchema) 
  });

  function SubmitForm(data) {
    console.log(data);
  }

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit(SubmitForm)}>
        <div className="form-group">
          <label htmlFor="first">Name:</label>
          <input id="first" {...register('name')} />
          {errors.name && <span className="error-message">{errors.name.message}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="Email">Email:</label>
          <input id="Email" {...register('Email')} />
          {errors.Email && <span className="error-message">{errors.Email.message}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="Second">Age:</label>
          <input 
            id="Second" 
            type="number" 
            {...register('age', { valueAsNumber: true })} 
          />
          {errors.age && <span className="error-message">{errors.age.message}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="third">Password:</label>
          <input type="password" id="third" {...register('password')} />
          {errors.password && <span className="error-message">{errors.password.message}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="confirm">Confirm Password:</label>
          <input type="password" id="confirm" {...register('confirmPassword')} />
          {errors.confirmPassword && <span className="error-message">{errors.confirmPassword.message}</span>}
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ZodForm;
