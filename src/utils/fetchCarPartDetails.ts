import axios from "axios";

export async function fetchCarPartDetails(carModel?: string, carYear?: string, partName?: string) {
    const apiUrl = `http://localhost:3334/check-car-parts`; // Local API endpoint
  
    try {
      const response = await axios.post(apiUrl, {
        carModel,
        carYear,
        carPart: partName,
      }, {
        headers: {
          'Content-Type': 'application/json',
        }
      });
  
      console.log('API Response:', response.data);
      return response.data;  // Assuming the API returns JSON data
    } catch (error) {
      console.error("Error fetching car part details:", error);
      return null;
    }
  }