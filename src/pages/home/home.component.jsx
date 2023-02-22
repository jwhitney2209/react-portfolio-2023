import { Container } from "../../components/container/container.component";
import { SkillIcon } from "../../components/skill-icons/skill-icons.component";
import {
  GitHubIcon,
  LinkedInIcon,
} from "../../components/social-icons/social-icons.component";

function SocialLink({ icon: Icon, ...props }) {
  return (
    <a className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </a>
  );
}

function Home() {
  return (
    <>
      <Container className="mt-9">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="max-w-2xl">
            <h1 className="text-4xl sm:text-5xl font-bold text-neutral-800 dark:text-neutral-100 tracking-tight">
              Jason Whitney
            </h1>
            <h2 className="text-xl sm:text-2xl font-semibold text-neutral-800 dark:text-neutral-100 tracking-tight">
              Full Stack Web Developer
            </h2>
            <div className="mt-6 flex sm:flex-row flex-col">
              <div className="flex gap-2">
                <SkillIcon />
              </div>
            </div>
            <p className="mt-6 text-neutral-900 dark:text-neutral-500">
              Full stack web developer and music educator based in Texas with a
              focus on building modern accessible applications that are
              responsive and that optimize the user experience.
            </p>
            <p className="mt-6 text-neutral-900 dark:text-neutral-500">
              With nine years of experience as a program director in education,
              I have skills that can translate well into a variety of roles. A
              key component of my job is setting short and long-term goals for
              small and large teams of people and devising a plan to scaffold
              and build towards those goals.
            </p>
            <p className="mt-6 text-neutral-900 dark:text-neutral-500">
              I am passionate about anything I put my name on and I have very
              high expectations of myself. I enjoy seeking solutions to
              problems.
            </p>

            <div className="mt-6 flex gap-6">
              <SocialLink
                href="https://github.com/jwhitney2209/"
                target="_blank"
                icon={GitHubIcon}
              />
              <SocialLink
                href="https://www.linkedin.com/in/jwhitney2209/"
                target="_blank"
                icon={LinkedInIcon}
              />
            </div>
          </div>
          <div className="invisible sm:visible lg:pl-20">
            <h1 className="text-4xl sm:text-9xl font-bold text-neutral-800 dark:text-neutral-100 tracking-tight">
              DO WHAT YOU LOVE!
            </h1>
          </div>
        </div>
      </Container>
    </>
  );
}

export default Home;
