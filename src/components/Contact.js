const Contact = () => {
  return (
    <div className="text-center">
      <h1 className="p-2 m-2 font-bold text-2xl">Contact Page</h1>
      <form className="flex flex-col w-6/12 mx-auto">
        <input type="text" placeholder="name" className="border p-2 m-2" />
        <input type="text" placeholder="message" className="border p-2 m-2" />
        <button className="border p-2 m-2 rounded-lg bg-black text-white">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
