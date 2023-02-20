import { Link } from "react-router-dom";
import clsx from "clsx";

import { Container } from "../../components/container/container.component";
import { GitHubIcon, LinkedInIcon } from "../../components/social-icons/social-icons.component";
import portraitImage from "../../assets/images/headshot.jpg";

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, "flex")}>
      <Link
        to={href}
        target="_blank"
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  );
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  );
}

function About() {
  return (
    <>
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <img
                src={portraitImage}
                alt=""
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              I’m Jason Whitney. I live in Texas, and I like to make
              stuff.
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <p>
                I’ve loved making things for as long as I can remember, when I
                was 11 years old I taught myself photoshop and dreamweaver to
                design websites for the clans I would play online video games
                with.
              </p>
              <p>
                The only thing I loved more than computers as a kid was music.
                When I was 12, I got my first guitar, and in the years to follow
                I taught myself audio engineering so that I could record the
                music I would write.
              </p>
              <p>
                While I was in college, I spent my summers outside working for
                an architect. I learned to build things with my bare hands and
                took pride in the work that was being done. Ultimately, I
                graduated with a degree in music education because music opened
                many doors in my life, and I wanted to give that back to my
                students.
              </p>
              <p>
                But I never stopped playing with computers. During the pandemic
                I quickly learned how to <em>go virtual</em>. I assisted my
                colleagues with understanding the platforms that would be using
                over the next year and a half. I troubleshooted many ways to
                make learning more fun and interactive for my students. I taught
                myself how to livestream events to assist my church in their
                outreach to their congregation. There was a lot to learn, and
                even with hurdles and setbacks, I loved that moment when I would
                conquer a problem that was in my way.
              </p>
              <p>
                Today, I’m part of the instructional staff as a teaching assistant for a Full Stack coding bootcamp, a choir director and the founder of
                Prestissmo, where we’re working on developing solutions for
                music educators to help them better manage all of the business
                side of music program management, so that they can focus more on
                what they’re great at... teaching!
              </p>
            </div>
          </div>
          <div className="lg:pl-20">
            <ul>
              <SocialLink
                href="https://github.com/jwhitney2209/"
                icon={GitHubIcon}
                className="mt-4"
              >
                Follow on GitHub
              </SocialLink>
              <SocialLink
                href="https://www.linkedin.com/in/jwhitney2209/"
                icon={LinkedInIcon}
                className="mt-4"
              >
                Follow on LinkedIn
              </SocialLink>
              <SocialLink
                href="mailto:jason@notjson.com"
                icon={MailIcon}
                className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
              >
                jason@notjson.com
              </SocialLink>
            </ul>
          </div>
        </div>
      </Container>
    </>
  );
}

export default About;
