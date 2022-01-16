import * as React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import {funky} from 'react-syntax-highlighter/dist/cjs/styles/prism';

const CodeBlock = ({ className, children }) => {
    let lang = 'text'; // default monospaced text
    if (className && className.startsWith('lang-')) {
        lang = className.replace('lang-', '');
    }
    return (
        <SyntaxHighlighter language={lang} style={funky} wrapLongLines>
            {children}
        </SyntaxHighlighter>
    );
}

// markdown-to-jsx uses <pre><code/></pre> for code blocks.
export default function HighlightedPreBlock({ children, ...rest }) {
    if ('type' in children && children['type'] === 'code') {
        return CodeBlock(children['props']);
    }
    return <pre {...rest}>{children}</pre>;
};