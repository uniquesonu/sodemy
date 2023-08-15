import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto py-8">
      <h2 className="text-2xl font-bold mb-4">Most of the student choose sodemy to build <span className='text-slate-400'>in-demand</span> carrer skills.</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className='flex flex-col text-md font-normal gap-1'>
            <p>sodemy Business</p>
            <p>Teach on sodemy</p>
            <p>About us</p>
            <p>Contact us</p>
          </div>
          <div className='flex flex-col text-md font-normal gap-1'>
            <p>Carrer</p>
            <p>Blog</p>
            <p>Help and support</p>
          </div>
          <div className='flex flex-col text-md font-normal gap-1'>
            <p>Terms</p>
            <p>privacy policy</p>
            <p>Cookies Settings</p>
            <p>Sitemap</p>
            <p>Accessibility statement</p>
          </div>
        </div>
        <div className='mt-4 flex items-center'>
      <h2 className="text-2xl font-bold mr-auto">sodemy</h2>
      <p>© 2023 sodemy, Inc.</p>
      </div>


      </div>
    </footer>
  );
};

export default Footer;
