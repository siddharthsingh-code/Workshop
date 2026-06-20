import { useState } from "react";

function Register() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    workshop: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const response = await fetch(
        "http://localhost:8000/api/enquiry",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (data.success) {

        setMessage("Registration Successful!");

        setFormData({
          name: "",
          email: "",
          phone: "",
          workshop: "",
        });

      } else {

        setMessage(data.message);

      }

    } catch (error) {

      console.log(error);
      setMessage("Server Error");

    }

  };

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center px-6 py-20">

      <div className="w-full max-w-3xl bg-white rounded-3xl shadow-2xl overflow-hidden">

        {/* TOP */}

        <div className="bg-gradient-to-br from-blue-900 to-cyan-600 text-white p-12 text-center">

          <h1 className="text-5xl font-bold">
            Workshop Registration
          </h1>

          <p className="mt-4 text-blue-100 text-lg">
            Register now and reserve your seat.
          </p>

        </div>


        {/* FORM */}

        <div className="p-10">

          <form
            onSubmit={handleSubmit}
            className="space-y-6"
          >

            <input
              type="text"
              name="name"
              placeholder="Enter Full Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Enter Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
              required
            />

            <input
              type="text"
              name="phone"
              placeholder="Enter Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
              required
            />

            <select
              name="workshop"
              value={formData.workshop}
              onChange={handleChange}
              className="w-full p-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
              required
            >

              <option value="">
                Select Workshop
              </option>

              <option value="AI & Robotics">
                AI & Robotics
              </option>

            

            </select>

            <button
              type="submit"
              className="w-full bg-blue-700 text-white py-4 rounded-xl text-lg font-bold hover:bg-blue-800 transition"
            >
              Register Now
            </button>

          </form>

          {message && (
            <p className="mt-6 text-center text-green-600 font-semibold">
              {message}
            </p>
          )}

        </div>

      </div>

    </div>
  );
}

export default Register;