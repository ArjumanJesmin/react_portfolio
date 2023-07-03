
import Section from "./Common/Section";
import contact from "../assets/contact.png";


const Contact = () => {
  
  return (
    <section>
      <Section title="Contact 📞" />

      <div className="flex flex-col items-center justify-center gap-8 text-center">
        <>
          <img src={contact} alt="Contact info" className="w-32 h-32" />
        </>
        <div>
          <p className="max-w-xs md:max-w-lg font-extralight">I am open to talk full-time opportunities. Feel free to contact me using your preferred medium.</p>
        </div>
        {/* bottom form */}
        <div className="p-8 text-left w-full">
          <form action="https://getform.io/f/eb994db9-2dbd-4441-bacf-559020d154fb" method="POST">
            <div className="gap-4 md:w-1/3 mx-auto">

              <div className="flex flex-col my-2">
                <label className="capitalize text-sm py-2 font-extralight">
                  name
                </label>
                <input type="text" name="name" className="border-2 rounded-lg p-3 flex focus:outline-none border-gray-400 dark:bg-gray-900 dark:text-white" />
              </div>

              <div className="flex flex-col my-2">
                <label className="capitalize text-sm py-2 font-extralight">
                  phone
                </label>
                <input type="text" name="phone" className="border-2 rounded-lg p-3 flex focus:outline-none border-gray-400 dark:bg-gray-900 dark:text-white" />
              </div>

              <div className="flex flex-col my-2">
                <label className="capitalize text-sm py-2 font-extralight">
                  email
                </label>
                <input type="email" name="email" className="border-2 rounded-lg p-3 flex focus:outline-none border-gray-400 dark:bg-gray-900 dark:text-white" />
              </div>

              <div className="flex flex-col my-2">
                <label className="capitalize text-sm py-2 font-extralight">
                  message
                </label>
                <textarea name="message" rows="10" className="border-2 rounded-lg p-3 flex focus:outline-none border-gray-400 dark:bg-gray-900 dark:text-white resize-none"></textarea>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <button className='flex justify-center mt-10 bg-rose-500 dark:bg-gradient-to-r from-indigo-500 from-10% via-sky-600 via-30% to-violet-800 to-90% font:roboto text-white py-2 px-6 my-8 duration-200 uppercase rounded-lg  hover:bg-amber-500'>Send message</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
