import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import Face from '../images/home/face.png';
import Arrow from '../images/home/arrow.png';

const Contact = () => {
  const form = useRef();
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formError, setFormError] = useState(null);
  const [sending, setSending] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setFormError(null);
    setSending(true);

    emailjs
      .sendForm('service_vhxomp3', 'template_mmscrxr', form.current, {
        publicKey: 'NOu8nzcrdG_mUsXFp',
      })
      .then(
        () => {
          form.current.reset();
          setSending(false);
          setFormSubmitted(true);
        },
        () => {
          setSending(false);
          setFormError(true);
        },
      );
  };

  useEffect(() => {
    if (!formSubmitted) return;
    const timer = setTimeout(() => setFormSubmitted(false), 5000);
    return () => clearTimeout(timer);
  }, [formSubmitted]);

  return (
    <div id='contact' className='mt-8'>
      <h2 className='text-center text-[var(--primary)] tracking-[1px] text-4xl'>CONTACT ME</h2>
      <h2 className='text-center mt-3 text-[44px] text-[var(--primary)]'>I would love to work with you!</h2>
      <div className='flex flex-col md:flex-row items-center justify-center px-8 py-8 gap-8'>
        <div className='w-full md:w-2/3'>
          {formSubmitted ? (
            <motion.div transition={{ duration: 0.5, delay: 0.5 }} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <p className="text-center text-green-500 text-xl lg:mt-40 mt-20 mb-20 ">
                Thank you for your message! We&apos;ll get back to you shortly!
              </p>
            </motion.div>
          ) : (
          <form method="POST" action="" ref={form} onSubmit={sendEmail}>
            <div className='flex flex-col items-end justify-center'>
              <div className='w-full'>
                <div className="mb-2">
                  <label htmlFor="name">Enter your name</label>
                  <input type="text" id="name" name="user_name" className="w-full px-2 py-2 rounded-sm focus:outline-none focus:border-2 focus:border-[var(--primary)]" required />
                </div>
                <div className="mb-2">
                  <label htmlFor="email">Enter your email address</label>
                  <input type="email" id="email" name="user_email" className="w-full px-2 py-2 rounded-sm focus:outline-none focus:border-2 focus:border-[var(--primary)]" required />
                </div>
                <div className='mb-2'>
                  <label htmlFor="message">Enter message body</label>
                  <textarea id="message" name="message" required rows="8" className="w-full py-2 px-2 rounded-sm focus:outline-none focus:border-2 focus:border-[var(--primary)]" />
                </div>
              </div>
              {formError && <p role="alert" className="text-red-700">Your message could not be sent. Please email joel.biswas11@gmail.com directly.</p>}
              <div className='hover:scale-105 transition-transform duration-300 ease-in-out'>
                <button disabled={sending} type="submit" value='Send' className="flex gap-x-3 items-center bg-[var(--primary)] text-[var(--light)] font-[Lekton] py-2 px-2 rounded-sm justify-self-end self-end">
                  <p className='text-lg'>{sending ? 'Sending…' : 'Send Message'}</p>
                  <img src={Arrow} alt='Arrow' className='w-[30px] h-[20px]' />
                </button>
              </div>
            </div>
          </form>)}
        </div>
        <div className='flex flex-col items-center justify-center w-full md:w-1/3'>
          <div className='rounded-full overflow-clip my-1 h-[250px] w-[250px] md:h-[250px] md:w-[250px] lg:h-[300px] lg:w-[300px]'>
            <img src={Face} alt='Joel Biswas' />
          </div>
          <p className='my-1'>joel.biswas11@gmail.com</p>
          <p className='my-1'>470-628-4997</p>
          <p className='my-1'>Georgia Institute of Technology</p>
        </div>
      </div>
    </div>
  )
}

export default Contact;
