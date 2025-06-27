import React, { useEffect } from 'react';
import Prism from 'prismjs';
import 'prismjs/components/prism-jsx';
import 'prismjs/themes/prism-tomorrow.css';

interface CodeBlockProps {
  code: string;
  language?: string;
}

export const CodeBlock: React.FC<CodeBlockProps> = ({ code, language = 'jsx' }) => {
  useEffect(() => {
    Prism.highlightAll();
  }, [code]);

  return (
    <div className="relative">
      <pre className="!bg-gray-900 dark:!bg-gray-950 !text-gray-100 rounded-lg overflow-x-auto text-sm">
        <code className={`language-${language}`}>
          {code}
        </code>
      </pre>
    </div>
  );
};