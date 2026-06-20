import { Link } from "react-router-dom";
import WorkshopCard from "../components/WorkshopCard";

function Home() {
  return (
    <div className="bg-slate-50 overflow-x-hidden">

      {/* HERO SECTION */}

      <section className="min-h-screen bg-gradient-to-br from-blue-950 via-blue-700 to-cyan-500 flex flex-col justify-center items-center text-center px-6">

        <h1 className="text-5xl md:text-7xl font-bold text-white max-w-5xl leading-tight">
          AI & Robotics Summer Workshop
        </h1>

        <p className="mt-6 text-xl text-blue-100 max-w-3xl leading-8">
          Learn Artificial Intelligence, Robotics,
          Coding, Automation, and Smart Technologies
          through live interactive classes and real-world projects.
        </p>

        {/* BASIC DETAILS */}

        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6">

          <div className="bg-white/10 backdrop-blur-md px-6 py-5 rounded-2xl border border-white/20">
            <h3 className="text-white font-bold text-xl">
              Age
            </h3>

            <p className="text-blue-100 mt-2">
              8–14 Years
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-md px-6 py-5 rounded-2xl border border-white/20">
            <h3 className="text-white font-bold text-xl">
              Duration
            </h3>

            <p className="text-blue-100 mt-2">
              4 Weeks
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-md px-6 py-5 rounded-2xl border border-white/20">
            <h3 className="text-white font-bold text-xl">
              Mode
            </h3>

            <p className="text-blue-100 mt-2">
              Online
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-md px-6 py-5 rounded-2xl border border-white/20">
            <h3 className="text-white font-bold text-xl">
              Fee
            </h3>

            <p className="text-blue-100 mt-2">
              ₹2,999
            </p>
          </div>

        </div>


        {/* BUTTONS */}

        <div className="flex flex-col sm:flex-row gap-5 mt-12">

          <Link to="/register">
            <button className="px-8 py-4 bg-white text-blue-700 rounded-full font-bold hover:scale-105 transition shadow-lg">
              Enroll Now
            </button>
          </Link>

          <Link to="/details">
            <button className="px-8 py-4 border-2 border-white text-white rounded-full font-bold hover:bg-white hover:text-blue-700 transition">
              View Details
            </button>
          </Link>

        </div>

      </section>


      {/* LEARNING OUTCOMES */}

      <section className="py-24 px-6 bg-white">

        <h2 className="text-5xl font-bold text-center mb-16">
          Learning Outcomes
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto">

          <div className="bg-blue-50 p-10 rounded-3xl shadow-lg hover:scale-105 transition">

            <h3 className="text-2xl font-bold text-blue-700">
              AI Fundamentals
            </h3>

            <p className="mt-4 text-gray-600 leading-7">
              Understand Artificial Intelligence,
              machine learning, and smart systems.
            </p>

          </div>

          <div className="bg-blue-50 p-10 rounded-3xl shadow-lg hover:scale-105 transition">

            <h3 className="text-2xl font-bold text-blue-700">
              Robotics Projects
            </h3>

            <p className="mt-4 text-gray-600 leading-7">
              Build robotics models, automation systems,
              and sensor-based projects.
            </p>

          </div>

          <div className="bg-blue-50 p-10 rounded-3xl shadow-lg hover:scale-105 transition">

            <h3 className="text-2xl font-bold text-blue-700">
              Coding Skills
            </h3>

            <p className="mt-4 text-gray-600 leading-7">
              Learn coding logic, programming basics,
              and problem-solving techniques.
            </p>

          </div>

        </div>

      </section>


      {/* WORKSHOP CARDS */}

      <section className="py-24 px-6 bg-slate-100">

        <h2 className="text-5xl font-bold text-center mb-16">
          Popular Workshops
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">

          {/* AI ROBOTICS */}

          <WorkshopCard
            title="AI & Robotics"
            image="https://images.unsplash.com/photo-1531746790731-6c087fecd65a"
            desc="Learn robotics and artificial intelligence with practical projects."
            duration="4 Weeks"
          />

          {/* OTHER CARDS */}

          <div className="bg-white rounded-3xl overflow-hidden shadow-lg">

            <img
              src="https://images.unsplash.com/photo-1511512578047-dfb367046420"
              alt=""
              className="h-56 w-full object-cover"
            />

            <div className="p-6">

              <h2 className="text-2xl font-bold">
                Game Development
              </h2>

              <p className="mt-3 text-gray-600">
                Create exciting games with coding and creativity.
              </p>

              <p className="mt-4 font-semibold text-blue-700">
                Duration: 6 Weeks
              </p>

              <button className="mt-6 w-full bg-gray-300 text-gray-700 py-3 rounded-xl cursor-not-allowed">
                Coming Soon
              </button>

            </div>

          </div>


          <div className="bg-white rounded-3xl overflow-hidden shadow-lg">

            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
              alt=""
              className="h-56 w-full object-cover"
            />

            <div className="p-6">

              <h2 className="text-2xl font-bold">
                Web Development
              </h2>

              <p className="mt-3 text-gray-600">
                Build websites and interactive applications.
              </p>

              <p className="mt-4 font-semibold text-blue-700">
                Duration: 5 Weeks
              </p>

              <button className="mt-6 w-full bg-gray-300 text-gray-700 py-3 rounded-xl cursor-not-allowed">
                Coming Soon
              </button>

            </div>

          </div>

        </div>

      </section>


      {/* FAQ */}

      <section className="py-24 px-6 bg-white">

        <h2 className="text-5xl font-bold text-center mb-16">
          Frequently Asked Questions
        </h2>

        <div className="max-w-5xl mx-auto space-y-6">

          <div className="bg-slate-100 p-8 rounded-3xl shadow">
            <h3 className="text-2xl font-bold text-blue-700">
              Do students need coding experience?
            </h3>

            <p className="mt-4 text-gray-600">
              No, this workshop is beginner friendly.
            </p>
          </div>

          <div className="bg-slate-100 p-8 rounded-3xl shadow">
            <h3 className="text-2xl font-bold text-blue-700">
              Will recordings be provided?
            </h3>

            <p className="mt-4 text-gray-600">
              Yes, recordings will be shared after every session.
            </p>
          </div>

          <div className="bg-slate-100 p-8 rounded-3xl shadow">
            <h3 className="text-2xl font-bold text-blue-700">
              Is there any certificate?
            </h3>

            <p className="mt-4 text-gray-600">
              Yes, certificates are provided after completion.
            </p>
          </div>

          <div className="bg-slate-100 p-8 rounded-3xl shadow">
            <h3 className="text-2xl font-bold text-blue-700">
              What is the class mode?
            </h3>

            <p className="mt-4 text-gray-600">
              Classes are conducted online live.
            </p>
          </div>

          <div className="bg-slate-100 p-8 rounded-3xl shadow">
            <h3 className="text-2xl font-bold text-blue-700">
              What projects will students build?
            </h3>

            <p className="mt-4 text-gray-600">
              Students build AI models, robotics systems,
              and coding projects.
            </p>
          </div>

        </div>

      </section>


      {/* LAST CTA */}

      <section className="py-24 px-6 bg-gradient-to-r from-blue-900 to-cyan-600 text-center text-white">

        <h2 className="text-5xl font-bold">
          Ready To Start Learning?
        </h2>

        <p className="mt-6 text-xl text-blue-100">
          Join the AI & Robotics Workshop today.
        </p>

        <Link to="/register">
          <button className="mt-10 px-10 py-4 bg-white text-blue-700 rounded-full font-bold hover:scale-105 transition">
            Register Now
          </button>
        </Link>

      </section>

    </div>
  );
}

export default Home;