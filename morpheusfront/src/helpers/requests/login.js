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
    console.log(response.data);
    // Faça o tratamento necessário com a resposta do servidor
  } catch (error) {
    console.error("Erro ao efetuar login:", error);
    // Faça o tratamento necessário para exibir uma mensagem de erro ao usuário
  }
};
