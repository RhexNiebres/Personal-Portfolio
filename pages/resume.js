
const Resume = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      {/* <h1 className="text-3xl font-bold mb-6">My Resume</h1> */}

      <iframe
        src="/images/gmail.png"
        width="100%"
        height="800px"
        className="border shadow-lg mb-6"
      />

      <a
        href="/resume/RhexNiebres_resume.pdf"
        download="My_Resume.pdf"
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        Download Resume
      </a>
    </div>
  );
};

export default Resume;
