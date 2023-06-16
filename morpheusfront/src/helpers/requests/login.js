import axios from "axios";

export const LoginRequest = async () => {
  try {
    const response = await axios.get("http://localhost:5000/login");
    return(response.data);
    } catch (error) {
      console.error("Erro ao efetuar login:", error);
    }
}

export const newLogin = async (name, email) => {
  try {
    const response = await axios.post("http://localhost:5000/login", {
      name,
      email,
    });
     return response.data;
  } catch (error) {
    console.error("Erro ao efetuar login:", error);
  }
};
