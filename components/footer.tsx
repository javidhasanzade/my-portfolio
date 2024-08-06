import React from "react";

export default function Footer() {
  return (
    <footer className="px-4 text-center text-gray-500">
      <small className="mb-2 block text-xs">
        &copy; 2024 Javid Hasanzade. All rights reserved.
      </small>
      <p className="text-xs">
        <span className="font-semibold">About this website:</span> built with
        React & NextJS (App router, Server actions), Typescript, Tailwind CSS,
        Framer Motion, React Email & Resend, Vercel Hosting.
      </p>
    </footer>
  );
}
