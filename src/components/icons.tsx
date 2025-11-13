import type { SVGProps } from "react";

export const Icons = {
  Java: (props: SVGProps<SVGSVGElement>) => (
    <svg {...props} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><path fill="#f44336" d="M15 15h18v18H15z" /><path fill="#fff" d="M29 30h-5v-3h5v-3h-5v-3h5v-3h-5a3 3 0 0 0-3 3v9a3 3 0 0 0 3 3h5z" /><path fill="#5d4037" d="M22 17h-5v3h5v3h-5v3h5v3h-5a3 3 0 0 1-3-3v-9a3 3 0 0 1 3-3h5z" /></svg>
  ),
  Python: (props: SVGProps<SVGSVGElement>) => (
    <svg {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M14.5 14.25h-5v-3h5V8.5h-5V3H15v5.5h-1.5v2.75H15v3zM9.5 9.75h5v3h-5v2.75h5V21H9v-5.5h1.5V12.5H9v-2.75z" fill="#FFD43B" /><path d="M14.5 14.25h-5v-3h5V8.5h-5V3H15v5.5h-1.5v2.75H15v3z" fill="#FFE066" /><path d="M9.5 9.75h5v3h-5v2.75h5V21H9v-5.5h1.5V12.5H9v-2.75z" fill="#306998" /></svg>
  ),
  Cpp: (props: SVGProps<SVGSVGElement>) => (
    <svg {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M14.5 7.5c.3 0 .5.2.5.5v2h2c.3 0 .5.2.5.5s-.2.5-.5.5h-2v2c0 .3-.2.5-.5.5s-.5-.2-.5-.5v-2h-2c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h2v-2c0-.3.2-.5.5-.5m5 0c.3 0 .5.2.5.5v2h2c.3 0 .5.2.5.5s-.2.5-.5.5h-2v2c0 .3-.2.5-.5.5s-.5-.2-.5-.5v-2h-2c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h2v-2c0-.3.2-.5.5-.5M12.9 2.6c-.2-.1-.4 0-.5.2l-7 11c-.1.2 0 .4.2.5l3.5 1.7c.1 0 .1.1.2.1l-.1-.1 3.4 1.7c.1.1.2.1.3.1s.2 0 .3-.1l7-3.5c.2-.1.3-.3.2-.5l-3.5-9c-.1-.2-.3-.3-.5-.2l-3.5 1.8zM10.1 14l-3-1.5 5.2-8.3 2.6 1.3z" fill="hsl(var(--primary))"/></svg>
  ),
};
