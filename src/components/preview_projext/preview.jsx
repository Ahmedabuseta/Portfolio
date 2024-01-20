import { Dialog, Transition } from '@headlessui/react'
import { Fragment, } from 'react'

export default function PreviewModel({ isOpen, setIsOpen, previewProject }) {
  function closeModal() {
    setIsOpen(false)
    console.log(previewProject.title);
  }
  return (
    <>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10  sm:max-w lg:w-6/12 " onClose={closeModal}>
          <div className="fixed inset-0 backdrop-blur-sm bg-white/1 " aria-hidden="true" />

          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/5" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto top-5">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-gray-800 text-white  p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-3xl pb-3 uppercase text-indigo-200 z-20 font-medium leading-6 ext-white"
                  >
                    {previewProject.title}
                  </Dialog.Title>
                  <div className="mt-2">
                    <div className='p-3 ps-0 pe-0'>
                      <img src={previewProject.previewImgSrc} className='rounded-lg max-h-52 w-100' alt='preview img for website' />
                    </div>
                    <div>
                      <p className='text-lg font-medium'> <span className='text-red-500'>*</span>live :
                        <a className=' text-sky-600 ps-2' href={previewProject.liveLink} target="_blank" rel="noreferrer"> press here</a>
                      </p>
                      <p className='text-lg font-medium'><span className='text-red-500'>*</span>repo :
                        <a className=' text-sky-600 ps-2' href={previewProject.repoLink} target="_blank" rel="noreferrer"> press here</a>
                      </p>
                      <div>
                        <h3 className='text-indigo-500 uppercase font-medium'>
                          project features :
                        </h3>
                        <h5 className='ps-2 font-medium'>Admin Features:</h5>
                        <ul className='text-stone-200 ' style={{ listStyle: 'square' }}>
                          <li>Add courses.</li>
                          <li>Add job offers.</li>
                        </ul>
                        <h5 className='ps-2 font-medium'>Admin Features:</h5>
                        <ul className='text-stone-200 ' style={{ listStyle: 'square' }}>
                          <li>Login with data from the admin.</li>
                          <li>Access articles (for all visitors).</li>
                        </ul>


                      </div>
                    </div>
                  </div>
                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Ok, thanks!
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
