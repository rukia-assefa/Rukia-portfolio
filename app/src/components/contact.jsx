'use client'
export default function Contact() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const email = formData.get("email");
    const name = formData.get("name");
    const message = formData.get("message");

    const mailtoLink = `mailto:rukassefa@gmail.com?subject=New%20Message%20from%20Your%20Portfolio%20Website&body=Email:%20${email}%0A%0AName:%20${name}%0A%0AMessage:%20${message}`;
    window.location.href = mailtoLink;
  };

  return (
    <div id="contact">
      <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
        Contact Me
      </h2>
      <div className="text-md pb-2">rukassefa@gmail.com</div>
      <div className="text-md pb-2">Feel free to contact me with any inquiries or questions.</div>
      <form className="max-w-sm mx-auto" onSubmit={handleSubmit}>
        <label className="pt-6 block mb-2 text-sm font-medium text-white dark:text-white">
          Your Name
          <input
            name="name"
            id="name"
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="John Doe"
          />
        </label>
        <label className="pt-6 block mb-2 text-sm font-medium text-white dark:text-white">
          Your Email
          <input
            name="email"
            id="email"
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="john@mail.com"
          />
        </label>
        <label className="pt-6 block mb-2 text-sm font-medium text-white dark:text-white">
          Your Message
          <textarea
            name="message"
            id="message"
            rows="4"
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-teal-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Leave your request..."
          ></textarea>
        </label>
        <div className="pt-6 flex justify-center">
          <button
            type="submit"
            className="text-teal-300 bg-teal-400/10 hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Send Email
          </button>
        </div>
      </form>
    </div>
  );
}
