import { convertToCoreMessages, streamText } from 'ai';
import { google } from '@ai-sdk/google';

export const maxDuration = 60;

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    console.log('CHEGOU NA ROTA DE DETALHES DO CARRO -----------------------------');

    const systemMessage = `
      You are a mechanic assistant. Your job is to extract car model, make, year, and part name from the user's message.
      Only provide the extracted details in the following JSON format:
      {
        "carModel": "Car Model",
        "carMake": "Car Make",
        "carYear": "Year",
        "partName": "Car Part"
      }
    `;

    const result = await streamText({
      model: google('gemini-1.5-flash'),
      system: systemMessage,
      messages: convertToCoreMessages(messages),
    });

    // const response = await result.toDataStreamResponse();
    // const responseText = await response.text();
    
    // console.log('AI Response:', responseText);
    console.log('AI Response: xxxxxxxxxxxxxxxx', result);
    return result.toDataStreamResponse();

    // try {
    //   const extractedData = JSON.parse(responseText);
    //   return new Response(JSON.stringify(extractedData), {
    //     headers: { 'Content-Type': 'application/json' },
    //   });
    // } catch (error) {
    //   console.error('Failed to parse AI response:', responseText);
    //   return new Response('Failed to parse AI response.', { status: 500 });
    // }
  } catch (error) {
    console.error('Error in POST /api/cardetails:', error);
    return new Response('Failed to extract car details.', { status: 500 });
  }

  
}

