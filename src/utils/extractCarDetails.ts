// import { useChat } from "ai/react";

// export function extractCarDetails(userMessage: string) {
//   // Regular expressions to extract possible car-related information
//   const yearMatch = userMessage.match(/\b(19|20)\d{2}\b/);  // Matches years like 1997, 2005, etc.
//   const carYear = yearMatch ? yearMatch[0] : null;

//   // Extract car manufacturer and model by focusing on proper nouns (capitalized words after common keywords)
//   const modelRegex = /(honda|toyota|ford|chevrolet|renault|civic|corolla|crx|jetta|camry|golf|clio|megane)/i;
//   const carModel = (userMessage.match(modelRegex) || [null])[0];

//   // Extract car part by looking for common parts keywords or phrases like "door panel", "engine", etc.
//   const partRegex = /(door panel|engine|brake pads|headlight|rearview mirror|bumper|tire|windshield)/i;
//   const partName = (userMessage.match(partRegex) || [null])[0];

//   // Return the extracted data
//   return { carModel, carYear, partName };
// }
// const {
//   messages,
//   input,
//   handleInputChange,
//   handleSubmit,
//   isLoading,
//   setMessages,
// } = useChat({ api: "api/carDetails",
//   initialMessages: [],
// });

// const CAR_DETAILS_API = '/api/carDetails';
// const CHAT_API = 'api/chat';
// const CONTENT_TYPE_JSON = 'application/json';

// export const extractCarDetailsWithAI = async (userMessage: string) => {
//   try {
//     // Send the user's message to the chat API
//     setMessages([{
//       role: 'user', content: userMessage,
//       id: ""
//     }]);

//     // Wait for the response from the chat API
//     // Assuming messages is updated with the response
//     const latestMessage = messages[messages.length - 1];
    
//     // If there's no message yet, wait for it
//     if (!latestMessage || latestMessage.role !== 'assistant') {
//       throw new Error('No response from AI.');
//     }

//     let responseText = latestMessage.content;

//     // Log raw response text for debugging
//     console.log('Raw AI Response:', responseText);

//     // Clean up the response text
//     responseText = responseText
//       .replace(/```json|```/g, '') // Remove code block delimiters
//       .replace(/^\s+|\s+$/g, '')  // Remove leading and trailing whitespace
//       .replace(/\n\s+/g, '\n');   // Remove newlines with leading spaces

//     // Log cleaned response text for debugging
//     console.log('Cleaned AI Response:', responseText);

//     // Parse the cleaned text
//     const parsedData = JSON.parse(responseText);

//     // Log and validate the parsed data
//     console.log('Extracted Data from AI:', parsedData);

//     if (!parsedData.carModel || !parsedData.carMake || !parsedData.carYear || !parsedData.partName) {
//       console.warn('AI returned incomplete car details.');
//     }

//     return parsedData;
//   } catch (error) {
//     console.error('Error in extractCarDetailsWithAI:', error);
//     throw error;
//   }
// };


export function extractPriceDetailsFromMessage(message: string) {
  const regex = /Do you want the price for (.*?), (.*?), (.*?), (.*?)\?/;
  const match = message.match(regex);
  
  console.log("Extracting DATA +++++++ ");

  if (match) {
    console.log("MATCHED MET MET MET MET ", match);
    const [, partName, carModel, carMake, carYear] = match;
    return { carModel, carMake, carYear, partName };
  }

  return null;
}



