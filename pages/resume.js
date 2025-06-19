
const Resume = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <iframe
        src="/resume/resume.pdf"
       allowFullScreen
       title="My Resume"
      
        className="border shadow-lg mb-6 w-screen h-screen"
      />
    </div>
  );
};

export default Resume;
