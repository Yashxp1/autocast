import axios from 'axios';

type ApiResponse = {
  success: boolean;
  text: string;
  error?: string;
};

export async function generateScript(prompt: string): Promise<ApiResponse> {
  try {
    const res = await axios.post<ApiResponse>(`/api/script`, {
      prompt: prompt,
    });
    console.log(res.data);
    return res.data;
  } catch (error) {
    console.error('Error fetching llm request:', error);
    throw error;
  }
}
