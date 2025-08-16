import { auth } from '@/auth';
import { GoogleGenAI } from '@google/genai';
import { NextRequest, NextResponse } from 'next/server';

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export async function POST(req: NextRequest) {
  try {
    const session = await auth();
    if (!session?.user || !session) {
      return NextResponse.json({ message: 'Unauthorised' }, { status: 401 });
    }

    const { prompt } = await req.json();

    const res = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        systemInstruction:
          'You are a podcast script generator. Always output scripts in this format:\n\nHost 1 (Name): Opening line\n\nHost 2 (Name): Response\n\nHost 1 (Name): Next line\n\nHost 2 (Name): Response\n\n...continue natural back-and-forth...\n\n[Transition Music Plays Briefly]\n\nGuidelines:\n- Keep it conversational, natural, and easy to read aloud.\n- Alternate clearly between Host 1 and Host 2.\n- Avoid narration or explanations—only script the dialogue and stage directions (like [Intro Music Fades Out]).\n- Do not include extra commentary, summaries, or instructions—only the final script in the above format.',
      },
    });

    return NextResponse.json({ text: res.text });
  } catch (error) {
    console.error('Error generating script:', error);
    return NextResponse.json(
      { error: 'Failed to generate script' },
      { status: 500 }
    );
  }
}
