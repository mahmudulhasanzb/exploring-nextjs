import Image from "next/image";
import Link from "next/link";

const AboutPage = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <p className="text-2xl font-bold">Hi~ I am Hasan</p>
      <Image
        src="/blue-profile-bg.png"
        alt="hasan image"
        width={200}
        height={100}
      />
      <p className="text-xl font-bold">I am a web developer</p>
      <p className=" text-sm">
        I am a student of political science at nabiganj government college{' '}
        <br />I have a passion for web development and I am a quick learner
      </p>
      <a
        href="https://www.facebook.com/mahmudulhasanzb"
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-primary mt-6 transition-transform hover:scale-105"
      >
        Contact Me
      </a>
    </div>
  );
};

export default AboutPage;