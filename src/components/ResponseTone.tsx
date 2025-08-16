'use client';

import { useState } from 'react';
import { Button } from './ui/button';

const ResponseTone = () => {
  const [selectedTone, setSelectedTone] = useState<string>('default');

  const handleToneSelect = (tone: string) => {
    setSelectedTone(tone);
  };

  return (
    <div>
      <div className="flex gap-2 pt-2">
        <Button
          variant={selectedTone === 'emotional' ? 'default' : 'outline'}
          onClick={() => handleToneSelect('emotional')}
        >
          Emotional 😭
        </Button>
        <Button
          variant={selectedTone === 'serious' ? 'default' : 'outline'}
          onClick={() => handleToneSelect('serious')}
        >
          Serious 😐
        </Button>
        <Button
          variant={selectedTone === 'funny' ? 'default' : 'outline'}
          onClick={() => handleToneSelect('funny')}
        >
          Funny 😂
        </Button>
        <Button
          variant={selectedTone === 'default' ? 'default' : 'outline'}
          onClick={() => handleToneSelect('default')}
        >
          Default 😊
        </Button>
      </div>
    </div>
  );
};

export default ResponseTone;
