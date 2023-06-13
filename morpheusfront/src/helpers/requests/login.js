import axios from "axios";

export const LoginRequest = async () => {
  try {
    const response = await axios.get("http://localhost:5000/login");
    return(response.data);
    } catch (error) {
      console.error("Erro ao efetuar login:", error);
    }
}
