'use client';

import { useEffect, useState } from 'react';
import { PopupButton } from 'react-calendly';

const CalendlyWidget = () => {
  const [rootElem, setRootElem] = useState<HTMLElement | null>(null);

  useEffect(() => {
    setRootElem(document.body);
  }, []);

  if (!rootElem) return null;

  return (
    <div className="space-y-4">
      {/* Multiple custom buttons that open Calendly modal */}
      <PopupButton
        url="https://calendly.com/sulemandevofficial"
        rootElement={rootElem}
        text="Book Session (Style 1)"
        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
      />

      <PopupButton
        url="https://calendly.com/sulemandevofficial"
        rootElement={rootElem}
        text="Book Session (Style 2)"
        className="border border-blue-600 text-blue-600 px-4 py-2 rounded hover:bg-blue-100"
      />

      <PopupButton
        url="https://calendly.com/sulemandevofficial"
        rootElement={rootElem}
        text="Book Session (Style 3)"
        className="bg-purple-600 text-white px-4 py-2 rounded-full hover:bg-purple-700"
      />
    </div>
  );
};

export default CalendlyWidget;
