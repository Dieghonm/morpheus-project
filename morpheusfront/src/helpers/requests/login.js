import axios from "axios";

export const LoginRequest = async (param) => {
  const {username, email} = param
  console.log(param);

    try {
      const response = await axios.post("http://localhost:5000/login", {
        username,
        email,
      });
      return(response.data.user, response.data.email);
    } catch (error) {
      console.error("Erro ao efetuar login:", error);
      // Faça o tratamento necessário para exibir uma mensagem de erro ao usuário
    }
}
