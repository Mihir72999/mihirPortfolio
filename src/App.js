import { useState} from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import './App.css';
import { Link, NavLink } from 'react-router-dom';

import Logo from './component/logo';



const navigation = [
  { name: 'HOME', href: '/home' },
  { name: 'ABOUT ME', href: '/about' },
  { name: 'SERVICES', href: '/services' },
  { name: 'CONTACT', href: '/contact' },
]

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

 
   return (
    <>
    <div className="isolate bg-black  lg:py-1 ">
    
  
 
    <div className="">
      <nav className="flex  items-center justify-between" aria-label="Global">
        <Logo/>
      
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white mr-4"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <NavLink key={item.name} to={item.href} className="text-sm font-semibold leading-6 text-white">
              {item.name}
            </NavLink>
          ))}
        </div>
     
      </nav>
          
      <Dialog as="div" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <Dialog.Panel className="fixed inset-0 z-10 overflow-y-auto bg-white px-6 py-6 lg:hidden">
          <div className="flex items-center justify-between">
            <Link to="/home" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img className="h-8" src="/images/mylogo.jpeg" alt="" />
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-900"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-400/10"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </div>
   
  
 
   
    </div>
   
    </>
  );
}

export default App;
