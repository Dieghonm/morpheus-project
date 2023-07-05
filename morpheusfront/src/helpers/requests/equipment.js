import axios from "axios";

export const equipmentRequest = async () => {
  try {
    const response = await axios.get("http://localhost:5000/equipment");
    return(response.data);
    } catch (error) {
      console.error("Erro ao efetuar login:", error);
    }
}