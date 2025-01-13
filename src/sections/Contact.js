
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
// components
import Iconify from '../components/Iconify';
import SocialLinks from '../components/social/SocialLinks';
import HeadingAnimate from '../components/animate/HeadingAnimate';
import LoadAnimate from '../components/animate/LoadAnimate';
// mock
import { contactEmail } from '../mock/profile';

// ----------------------------------------------------------------------

export default function Contact() {
  const [isSending, setIsSending] = useState(false);
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs
      .sendForm('service_d84cybh', 'template_vote1l2', formRef.current, '2InahhGQBV9MnZeo0')
      .then(
        (result) => {
          console.log('SUCCESS!', result.text);
          alert('Email sent successfully!');
          e.target.reset();
        },
        (error) => {
          console.error('FAILED...', error.text);
          alert('Failed to send email. Please try again later.');
        }
      )
      .finally(() => {
        setIsSending(false);
      });
  };

  return (
    <section className="container mx-auto mt-5 px-5 pt-12 pb-10">
      <div className="mb-12 flex w-full flex-col text-center">
        <HeadingAnimate amount={1}>
          <h2 className="text-center font-lato text-3xl font-semibold text-primary-700 dark:text-primary-300 sm:text-4xl">
            Get In Touch
          </h2>
        </HeadingAnimate>
        <LoadAnimate amount={0}>
          <p className="mx-auto mt-5 text-base leading-relaxed opacity-80 md:w-1/2">
            I'm actively looking for any new opportunities, my inbox is always open. Whether you have a question, want
            to hire me, or just want to say hello, I'll try my best to get back to you!
          </p>
        </LoadAnimate>
      </div>
      <div className="mx-auto md:w-2/3 lg:w-1/2">
        <LoadAnimate amount={0}>
          <form ref={formRef} onSubmit={sendEmail}>
            <div className="-m-2 flex flex-wrap">
              <div className="w-full p-2 sm:w-1/2">
                <label htmlFor="name" className="mb:1 text-sm leading-7">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  placeholder="Full Name"
                  name="user_name"
                  className="w-full rounded border border-primary-700/70 bg-primary-100/20 py-1 px-3 text-base leading-8 outline-none transition-colors duration-200 ease-in-out focus:ring-1 focus:ring-primary-700/70 dark:border-primary-300/50 dark:bg-primary-300/10 dark:focus:ring-primary-300/50"
                />
              </div>
              <div className="w-full p-2 sm:w-1/2">
                <label htmlFor="email" className="text-sm leading-7">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  placeholder="email@example.com"
                  name="user_email"
                  className="w-full rounded border border-primary-700/70 bg-primary-100/20 py-1 px-3 text-base leading-8 outline-none transition-colors duration-200 ease-in-out focus:ring-1 focus:ring-primary-700/70 dark:border-primary-300/50 dark:bg-primary-300/10 dark:focus:ring-primary-300/50"
                />
              </div>
              <div className="w-full p-2">
                <label htmlFor="message" className="text-sm leading-7">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  className="h-32 w-full resize-none rounded border border-primary-700/70 bg-primary-100/20 py-1 px-3 text-base leading-8 outline-none transition-colors duration-200 ease-in-out focus:ring-1 focus:ring-primary-700/70 dark:border-primary-300/50 dark:bg-primary-300/10 dark:focus:ring-primary-300/50"
                  defaultValue={'Hello Yash,'}
                />
              </div>
              <div className="flex w-full justify-end p-2">
                <button
                  type="submit"
                  disabled={isSending}
                  className="text-md mb-2 inline-flex w-28 items-center justify-center rounded-lg border bg-primary-700 px-1 py-2.5 font-medium text-primary-50 hover:bg-primary-700/80 focus:outline-none focus:ring-2 dark:border-primary-700 dark:bg-primary-500 dark:hover:bg-primary-700 dark:focus:ring-primary-600"
                >
                  {isSending ? (
                    'Sending...'
                  ) : (
                    <>
                      Send
                      <Iconify classes="ml-2" icon="fluent:send-16-filled" />
                    </>
                  )}
                </button>
              </div>
              <div className="mt-4 w-full border-t border-neutral-700/50 p-2 pt-6 text-center dark:border-neutral-300/50">
              <a
                  href={`mailto:${contactEmail}?subject=Inquiry&body=Hello Yash`}
                  className="inline-flex items-center space-x-2 hover:text-primary-700 dark:hover:text-primary-300"
              >
  <Iconify classes="text-lg text-primary-700 dark:text-primary-300" icon="clarity:email-solid" />
  <span>{contactEmail}</span>
</a>

                <p className="my-5 leading-normal">
                  <Iconify
                    classes="inline-block text-lg mr-1 text-primary-700 dark:text-primary-300"
                    icon="bytesize:location"
                  />
                  Pune
                  <br />
                  Maharashtra, India
                </p>
                <div className="flex w-full justify-center">
                  <SocialLinks />
                </div>
              </div>
            </div>
          </form>
        </LoadAnimate>
      </div>
    </section>
  );
}

Contact.propTypes = {};