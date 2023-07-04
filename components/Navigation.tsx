import React from 'react';

const Navigation: React.FC = () => {
  return (
    <nav className="flex flex-col sm:flex-row gap-2 justify-between">
      <div className="mb-6 sm:mb-8 md:mb-12">
        <a href="/" className="text-decoration-none">
          <h1 className="font-header text-2xl font-light mb-2">Holden Halford</h1>
        </a>
        <div className="flex gap-2 text-sm">
          <p>
            <a className="underline" target="_blank" href="mailto:hello@holdenhalford.com?subject=Hey%20there!">Email</a>
          </p>
          <p>
            <a className="underline" target="_blank" href="https://twitter.com/holdenhalford">Twitter</a>
          </p>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
