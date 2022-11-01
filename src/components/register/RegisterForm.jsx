import * as React from "react";
import { useForm } from "react-hook-form";
import "./styles.css";
import Register from "./Register";

function RegisterForm() {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      email: "",
      username: "",
      password: "",
      name: "",
      Datebirth: "",
      address: "",
    },
  });

  const onSent = (data) => {
    const user = {
      email: data.email,
      username: data.username,
      password: data.password,
      profile: {
        name: data.name,
        Datebirth: data.Datebirth,
        address: data.address,
      },
    };
    console.log(user);
  };

  return (
    <form onSubmit={handleSubmit(onSent)}>
      <Register />
      <input {...register("email", { required: true })} placeholder="Email" />
      <input
        {...register("username", { required: true })}
        placeholder="Username"
      />
      <input
        {...register("password", { minLength: 4 })}
        placeholder="Password"
        type="password"
      />
      <input
        {...register("name", { required: true })}
        placeholder="What's your name?"
      />
      <input
        type="date"
        {...register("Datebirth", { required: true })}
        placeholder="Date of Birth"
      />
      <input
        {...register("address", { required: true })}
        placeholder="Adress"
      />

      <button type="submit">Registrarse</button>
    </form>
  );
}

export default RegisterForm;
