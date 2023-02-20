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
      <Container className='mt-9'>
        <div className="max-w-2xl">
          <h1 className="text-4xl sm:text-5xl font-bold text-neutral-800 dark:text-neutral-100 tracking-tight">
            Jason Whitney
          </h1>
          <h2 className="text-xl sm:text-2xl font-semibold text-neutral-800 dark:text-neutral-100 tracking-tight">
            Full Stack Web Developer
          </h2>
          <p className="mt-6 text-neutral-900 dark:text-neutral-500">
            Full stack web developer and music educator based in Texas with a
            focus on building modern accessible applications that are responsive
            and that optimize the user experience.
          </p>
          <div className="mt-6 flex gap-4">
            <SkillIcon />
          </div>
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
        </Container>
    </>
  );
}

export default Home;
