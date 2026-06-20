import { Link } from "react-router-dom";
import hero from "../assets/hero.png";

function WorkshopDetails() {
  return (
    <div className="bg-slate-50 overflow-x-hidden">


      <section className="min-h-screen bg-gradient-to-br from-blue-950 via-blue-800 to-cyan-500 text-white px-6 py-20 flex items-center">

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

          
          <div>

            <p className="bg-white/10 border border-white/20 w-fit px-5 py-2 rounded-full text-sm backdrop-blur-md">
              🚀 Future Skills Program
            </p>

            <h1 className="mt-8 text-5xl md:text-7xl font-bold leading-tight">
              AI & Robotics Workshop
            </h1>

            <p className="mt-8 text-xl text-blue-100 leading-9 max-w-2xl">
              A beginner-friendly workshop where students
              learn Artificial Intelligence, Robotics,
              Automation, Coding, and Future Technologies
              through live practical sessions and exciting projects.
            </p>

            {/* INFO BOXES */}

            <div className="mt-10 grid grid-cols-2 gap-5">

              <div className="bg-white/10 border border-white/20 backdrop-blur-md p-6 rounded-3xl">
                <h3 className="text-2xl font-bold">
                  4 Weeks
                </h3>

                <p className="mt-2 text-blue-100">
                  Workshop Duration
                </p>
              </div>

              <div className="bg-white/10 border border-white/20 backdrop-blur-md p-6 rounded-3xl">
                <h3 className="text-2xl font-bold">
                  8–14
                </h3>

                <p className="mt-2 text-blue-100">
                  Age Group
                </p>
              </div>

              <div className="bg-white/10 border border-white/20 backdrop-blur-md p-6 rounded-3xl">
                <h3 className="text-2xl font-bold">
                  Online
                </h3>

                <p className="mt-2 text-blue-100">
                  Live Classes
                </p>
              </div>

              <div className="bg-white/10 border border-white/20 backdrop-blur-md p-6 rounded-3xl">
                <h3 className="text-2xl font-bold">
                  ₹2,999
                </h3>

                <p className="mt-2 text-blue-100">
                  Program Fee
                </p>
              </div>

            </div>


            {/* BUTTONS */}

            <div className="flex flex-wrap gap-5 mt-12">

              <Link to="/register">
                <button className="px-10 py-4 bg-white text-blue-700 rounded-full font-bold hover:scale-105 transition shadow-lg">
                  Register Now
                </button>
              </Link>

              <button className="px-10 py-4 border-2 border-white rounded-full font-bold hover:bg-white hover:text-blue-700 transition">
                Download Brochure
              </button>

            </div>

          </div>


          {/* RIGHT IMAGE */}

          <div className="flex justify-center">

            <img
              src={hero}
              alt="AI Workshop"
              className="w-full max-w-2xl drop-shadow-2xl"
            />

          </div>

        </div>

      </section>


      {/* ABOUT */}

      <section className="py-24 px-6">

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14">

          <div className="bg-white p-10 rounded-[40px] shadow-xl">

            <h2 className="text-4xl font-bold text-gray-800">
              About This Workshop
            </h2>

            <p className="mt-8 text-lg text-gray-600 leading-9">
              This workshop introduces students to AI,
              robotics systems, coding logic, sensors,
              automation tools, and smart technologies
              through engaging practical learning methods.
            </p>

            <div className="mt-10 space-y-5 text-lg">

              <p>✅ Beginner Friendly Curriculum</p>

              <p>✅ Real-world Hands-on Projects</p>

              <p>✅ Interactive Live Sessions</p>

              <p>✅ Completion Certificate Included</p>

            </div>

          </div>


          <div className="bg-gradient-to-br from-blue-900 to-cyan-600 p-10 rounded-[40px] text-white shadow-xl">

            <h2 className="text-4xl font-bold">
              Workshop Features
            </h2>

            <div className="mt-10 grid gap-6">

              <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20">
                🤖 AI & Robotics Projects
              </div>

              <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20">
                💻 Coding & Automation
              </div>

              <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20">
                🎯 Practical Learning Activities
              </div>

              <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20">
                🚀 Mentor Support & Guidance
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* LEARNING ROADMAP */}

      <section className="py-24 px-6 bg-white">

        <h2 className="text-5xl font-bold text-center mb-20">
          Learning Roadmap
        </h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">

          <div className="bg-slate-50 p-10 rounded-3xl shadow-lg border-l-8 border-blue-700">
            <h3 className="text-3xl font-bold text-blue-700">
              Week 1
            </h3>

            <p className="mt-4 text-gray-600 leading-8">
              Introduction to Artificial Intelligence,
              Machine Learning, and smart systems.
            </p>
          </div>

          <div className="bg-slate-50 p-10 rounded-3xl shadow-lg border-l-8 border-cyan-500">
            <h3 className="text-3xl font-bold text-cyan-600">
              Week 2
            </h3>

            <p className="mt-4 text-gray-600 leading-8">
              Robotics fundamentals, sensors,
              and automation systems.
            </p>
          </div>

          <div className="bg-slate-50 p-10 rounded-3xl shadow-lg border-l-8 border-blue-700">
            <h3 className="text-3xl font-bold text-blue-700">
              Week 3
            </h3>

            <p className="mt-4 text-gray-600 leading-8">
              Coding projects and AI-based applications.
            </p>
          </div>

          <div className="bg-slate-50 p-10 rounded-3xl shadow-lg border-l-8 border-cyan-500">
            <h3 className="text-3xl font-bold text-cyan-600">
              Week 4
            </h3>

            <p className="mt-4 text-gray-600 leading-8">
              Final AI & Robotics project with mentor guidance.
            </p>
          </div>

        </div>

      </section>


      {/* MENTORS ANNOUNCED SOON */}

      <section className="py-24 px-6">

        <h2 className="text-5xl font-bold text-center mb-16">
          Mentors
        </h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">

          <div className="bg-white p-10 rounded-3xl shadow-xl text-center hover:scale-105 transition">

            <div className="w-28 h-28 mx-auto rounded-full bg-blue-100 flex items-center justify-center text-5xl">
              👨‍🏫
            </div>

            <h3 className="mt-8 text-2xl font-bold">
              Mentor 1
            </h3>

            <p className="mt-3 text-gray-500">
              To Be Announced
            </p>

          </div>

          <div className="bg-white p-10 rounded-3xl shadow-xl text-center hover:scale-105 transition">

            <div className="w-28 h-28 mx-auto rounded-full bg-cyan-100 flex items-center justify-center text-5xl">
              🤖
            </div>

            <h3 className="mt-8 text-2xl font-bold">
              Mentor 2
            </h3>

            <p className="mt-3 text-gray-500">
              To Be Announced
            </p>

          </div>

          <div className="bg-white p-10 rounded-3xl shadow-xl text-center hover:scale-105 transition">

            <div className="w-28 h-28 mx-auto rounded-full bg-blue-100 flex items-center justify-center text-5xl">
              💻
            </div>

            <h3 className="mt-8 text-2xl font-bold">
              Mentor 3
            </h3>

            <p className="mt-3 text-gray-500">
              To Be Announced
            </p>

          </div>

        </div>

      </section>


      {/* CTA */}

      <section className="py-24 px-6 bg-gradient-to-r from-blue-950 to-cyan-600 text-center text-white">

        <h2 className="text-5xl font-bold">
          Ready To Join?
        </h2>

        <p className="mt-6 text-xl text-blue-100">
          Start your AI & Robotics journey today.
        </p>

        <Link to="/register">
          <button className="mt-10 px-10 py-4 bg-white text-blue-700 rounded-full font-bold hover:scale-105 transition shadow-lg">
            Register Now
          </button>
        </Link>

      </section>

    </div>
  );
}

export default WorkshopDetails;
``