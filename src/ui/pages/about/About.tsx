const About = () => {
  return (
    <div className='w-full  m-h-[90vh] flex flex-col gap-4 p-4 bg-gray-900 text-gray-100 overflow-auto'>
      {/* Window Controls Header */}
      <div className='bg-gray-800 px-4 py-2 flex justify-between items-center drag-region'>
        <div className='flex items-center space-x-2 no-drag'>
          <svg
            className='w-5 h-5 text-cyan-400'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M13 10V3L4 14h7v7l9-11h-7z'
            />
          </svg>
          <span className='font-medium'>About FoxHeight</span>
        </div>
        <div className='flex space-x-2 no-drag'>
          <button
            className='w-3 h-3 rounded-full bg-gray-500 hover:bg-gray-400 transition'
            // onClick={() => window.electron?.minimize()}
          />
          <button
            className='w-3 h-3 rounded-full bg-gray-500 hover:bg-yellow-400 transition'
            // onClick={() => window.electron?.maximize()}
          />
          <button
            className='w-3 h-3 rounded-full bg-gray-500 hover:bg-red-500 transition'
            // onClick={() => window.electron?.close()}
          />
        </div>
      </div>

      {/* Main Content */}
      <div className='p-8 max-w-4xl mx-auto'>
        <div className='flex items-center mb-8'>
          <div className='w-16 h-16 bg-cyan-500 rounded-lg flex items-center justify-center mr-4'>
            <svg
              className='w-10 h-10 text-white'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M13 10V3L4 14h7v7l9-11h-7z'
              />
            </svg>
          </div>
          <div>
            <h1 className='text-3xl font-bold'>react + electron</h1>
            {/* <p className='text-gray-400'>
              Version {window.electron?.appVersion || "1.0.0"}
            </p> */}
          </div>
        </div>

        <div className='mb-8'>
          <h2 className='text-xl font-semibold mb-4 text-cyan-400'>
            react + electron + tailwind + vite
          </h2>
          <p className='text-gray-300 mb-4'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis
            voluptatem perspiciatis doloremque amet consequuntur velit expedita
            omnis dolorem fugiat animi aliquam magnam dignissimos et placeat
            explicabo, exercitationem maiores illo excepturi. Voluptatibus culpa
            nesciunt error nemo laborum et dolorum quidem quae, iure molestiae!
            Hic esse, ullam odio voluptas soluta blanditiis veritatis? Alias
            exercitationem corporis repellendus quasi amet sint accusantium
            veritatis laboriosam!
          </p>
          <p className='text-gray-300'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
            reprehenderit, praesentium illum minima qui et est voluptatem vel
            voluptatibus nobis ullam. Nam culpa illo magnam in repellendus
            maiores neque reiciendis!
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-8'>
          <div className='bg-gray-800 p-6 rounded-lg'>
            <h3 className='font-medium mb-2 text-cyan-400'>Technology Stack</h3>
            <ul className='space-y-2 text-gray-300'>
              {/* <li>• Electron {window.electron?.electronVersion || "20+"}</li> */}
              {/* <li>• React {React.version}</li> */}
              <li>• Vite {import.meta.env.VITE_VERSION || "3+"}</li>
              <li>• Tailwind CSS</li>
            </ul>
          </div>
          <div className='bg-gray-800 p-6 rounded-lg'>
            <h3 className='font-medium mb-2 text-cyan-400'>Features</h3>
            <ul className='space-y-2 text-gray-300'>
              <li>• Real-time price monitoring</li>
              <li>• AI-driven predictions</li>
              <li>• Desktop notifications</li>
              <li>• Cross-platform support</li>
            </ul>
          </div>
        </div>

        <div className='border-t border-gray-700 pt-6'>
          <h3 className='font-medium mb-4 text-cyan-400'>Connect With Us</h3>
          <div className='flex space-x-4'>
            <button className='p-2 bg-gray-800 hover:bg-gray-700 rounded transition'>
              <svg
                className='w-5 h-5'
                fill='currentColor'
                viewBox='0 0 24 24'
                aria-hidden='true'
              >
                <path
                  fillRule='evenodd'
                  d='M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z'
                  clipRule='evenodd'
                />
              </svg>
            </button>
            <button className='p-2 bg-gray-800 hover:bg-gray-700 rounded transition'>
              <svg
                className='w-5 h-5'
                fill='currentColor'
                viewBox='0 0 24 24'
                aria-hidden='true'
              >
                <path
                  fillRule='evenodd'
                  d='M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.137.353.3.882.344 1.857.047 1.023.058 1.351.058 3.807v.468c0 2.456-.011 2.784-.058 3.807-.045.975-.207 1.504-.344 1.857-.182.467-.4.8-.748 1.15-.35.35-.683.566-1.15.748-.353.137-.882.3-1.857.344-1.054.048-1.37.058-3.808.058h-.468c-2.456 0-2.784-.011-3.807-.058-.975-.045-1.504-.207-1.857-.344-.467-.182-.8-.4-1.15-.748-.35-.35-.566-.683-.748-1.15-.137-.353-.3-.882-.344-1.857-.047-1.023-.058-1.351-.058-3.807v-.468c0-2.456.011-2.784.058-3.807.045-.975.207-1.504.344-1.857.182-.467.4-.8.748-1.15.35-.35.683-.566 1.15-.748.353-.137.882-.3 1.857-.344 1.023-.047 1.351-.058 3.807-.058h.468c2.456 0 2.784.011 3.807.058.975.045 1.504.207 1.857.344.467.182.8.4 1.15.748.35.35.566.683.748 1.15.137.353.3.882.344 1.857.048 1.023.058 1.351.058 3.807v.468c0 2.456-.011 2.784-.058 3.807-.045.975-.207 1.504-.344 1.857-.182.467-.4.8-.748 1.15-.35.35-.683.566-1.15.748-.353.137-.882.3-1.857.344-1.023.047-1.351.058-3.807.058h-.468zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z'
                  clipRule='evenodd'
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
