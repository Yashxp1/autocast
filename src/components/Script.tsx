'use client';
import { generateScript } from '@/lib/generateScript';
import { useRef, useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { ArrowDownToLine } from 'lucide-react';

const Script = () => {
  const [loading, setLoading] = useState(false);
  const [text, setText] = useState<string>('');
 

  const scriptRef = useRef<HTMLInputElement>(null);

  const handleScript = async () => {
    const topic = scriptRef.current?.value;

    if (!topic?.trim()) {
      alert('Please enter a topic');
      return;
    }

    setLoading(true);
    try {
      const res = await generateScript(topic.trim());
      setText(res.text);

      if (scriptRef.current) {
        scriptRef.current.value = '';
      }
    } catch (error) {
      console.error('Error --> ', error);
    } finally {
      setLoading(false);
    }
  };

 

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="w-[50%] flex gap-2">
        <Input placeholder="Enter a topic" ref={scriptRef} />
        <Button variant="outline" disabled={loading} onClick={handleScript}>
          {loading ? 'Autocasting...' : 'Autocast'}
        </Button>
      </div>
    
      {text && (
        <div className=" rounded-lg pt-2 overflow-hidden flex justify-center items-center">
          <div className="w-[70%] border-2 rounded-lg">
            <div className=" px-6 py-3 flex justify-between">
              <h3 className="font-semibold text-lg">Generated Script:</h3>
              <span className="border rounded-full p-2">
                <ArrowDownToLine size={18}/>
              </span>
            </div>
            <div className="p-6 max-h-96 overflow-y-auto">
              <p className="whitespace-pre-wrap leading-relaxed">{text}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Script;
