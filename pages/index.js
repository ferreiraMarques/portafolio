import Head from "next/head";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { BsFillMoonStarsFill } from "react-icons/bs";
import {
  DiAngularSimple,
  DiMongodb,
  DiPhp,
  DiReact,
  DiMsqlServer,
  DiRedis,
  DiJava,
  DiLinux,
  DiJenkins,
  DiMysql,
  DiPostgresql,
  DiNodejs,
  DiLaravel,
} from "react-icons/di";
import {
  SiSpringboot,
  SiAmazonaws,
  SiJavascript,
  SiTypescript,
  SiJest,
  SiJunit5,
  SiDocker,
  SiRabbitmq,
  SiPhp,
} from "react-icons/si";
import { useState } from "react";
import Image from "next/image";
import web1 from "../public/1.png";
import code from "../public/code.png";

const languagues = {
  EN: {
    job: "Backend Developer",
    about1: `Backend developer with 7 years of experience with technologies
    such as Java,Nodejs and PHP. Throughout these years, I have had
    the privilege of being part of the creation and maintenance of
    various web and mobile applications such as`,
    about2: `and`,
    projects: "Latest Projects",
    expirience: "Work Experience",
    tools: "Tools",
    currently: "currently",
    contact: "Contact",
    skills: "skills",
    jobs: {
      one: {
        title: "Backend Developer",
        company: "Tinet",
        description: `Participate in the development of webservices for the new
        client website Americar Click together with the connection
        to the client's backoffice`,
      },
      two: {
        title: "Backend Developer",
        company: "Zinli",
        description: `Participate in the development of new Rest webservices of
        the P2P platform, maintenance of existing webservices`,
      },
      three: {
        title: "FullStack Developer",
        company: "Banco Occidental de Descuento (BOD)",
        description: `Participate in the development as fullstack of the company
        banking system "Banca Agile"`,
      },
      four: {
        title: "FullStack Developer",
        company: "Soluciones Integrales GIS, C.A (SIGIS)",
        description: `Participate in the development and maintenance of the
        satellite tracking application GTR`,
      },
    },
    projectsDescripcion: {
      one: {
        title: "Chat Room",
        description:
          "A chat made with Reactjs, Express and Socket.io to send messages through websockets",
      },
      two: {
        title: "Api CQRS, DDD and Event Driven Design",
        description:
          "Exercise applying the Command and Query Responsibility Segregation patterns, Domain Driven Design and Event Driven Design in  Java 17, Spring Boot, Kafka, MongoDB and Mysql",
      },
      three: {
        title: "API for Product Management",
        description:
          "API for the management and handling of products with jwt authentication made with Nestjs, Nodejs, Typescript, Mysql, Jest",
      },
    },
  },
  ES: {
    job: "Backend Developer",
    about1: `Backend Developer con 7 años de experiencia en tecnologías
    como Java, Nodejs y PHP. A lo largo de estos años he tenido
    el privilegio de ser parte de la creación y mantenimiento de
    diversas aplicaciones web y móviles como`,
    about2: `y`,
    projects: "Ultimos Proyectos",
    expirience: "Experiencia Laboral",
    tools: "Herramientas",
    currently: "Actualmente",
    contact: "Contacto",
    skills: "Habilidades",
    jobs: {
      one: {
        title: "Backend Developer",
        company: "Tinet",
        description: `Participe en el desarrollo de los webservices para la nueva pagina web del cliente
        Americar Clicar en conjunto con la conexión al backoffice del cliente`,
      },
      two: {
        title: "Backend Developer",
        company: "Zinli",
        description: `Participe en el desarrollo de nuevos webservices Rest de la plafaforma P2P, mantenimiento de
        los webservices ya existentes`,
      },
      three: {
        title: "FullStack Developer",
        company: "Banco Occidental de Descuento (BOD)",
        description: `Participe en el desarrollo del nuevo sistema de banca empresa “Banca Agil”, tanto en la aplicacion cliente como en el backoffice`,
      },
      four: {
        title: "FullStack Developer",
        company: "Soluciones Integrales GIS, C.A (SIGIS)",
        description: `Participe en el desarrollo y mantenimiento de la aplicación de seguimiento satelital GTR`,
      },
    },
    projectsDescripcion: {
      one: {
        title: "Chat Room",
        description:
          "Un chat hecho con Reactjs, Express y Socket.io para el envio de mensajes mediante websockets",
      },
      two: {
        title: "Api CQRS, DDD y Event Driven Design",
        description:
          "Ejercicio aplicando los patrones Command and Query Responsability Segregation y Event Driven Design en Java 17, Spring Boot, Kafka, MongoDB y Mysql",
      },
      three: {
        title: "Api para la Gestion de Productos",
        description:
          "Api para la gestion y manejo de productos con autenticacion jwt hecho con Nestjs, Nodejs, Typescript, Mysql, Jest",
      },
    },
  },
};

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState("ES");

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Eduardo Ferreira | Backend Developer</title>
        <meta name="description" content="backend portafolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
        <section className="py-2">
          <nav className="py-2 mb-12 flex justify-between dark:text-white">
            <h1 className="font-burtons text-xl">eferreira</h1>
            <ul className="flex items-center gap-3">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className=" cursor-pointer text-2xl"
                />
              </li>
              <li>
                <b
                  className="cursor-pointer"
                  onClick={() => setLanguage(language === "EN" ? "ES" : "EN")}
                >
                  {language}
                </b>
              </li>
            </ul>
          </nav>
          {/**description */}
          <div className="text-center p-10 py-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
              Eduardo Ferreira
            </h2>
            <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
              {language === "EN" ? languagues.EN.job : languagues.ES.job}.
            </h3>
            <p className="text-md py-3 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
              {language === "EN" ? languagues.EN.about1 : languagues.ES.about1}{" "}
              <a
                className="underline decoration-sky-500"
                href="https://tramites.insopesca.gob.ve/web/login"
              >
                Sipac
              </a>
              &nbsp;
              {language === "EN" ? languagues.EN.about2 : languagues.ES.about2}
              &nbsp;
              <a
                className="underline decoration-sky-500"
                href="https://app.gtrmax.com"
              >
                GTR Max
              </a>
              .
            </p>
          </div>
        </section>
        {/**projects */}
        <section className="py-10">
          <div>
            <h3 className="text-center text-3xl py-1 dark:text-white ">
              {language === "EN"
                ? languagues.EN.projects
                : languagues.ES.projects}
            </h3>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/4 flex-1 ">
              <div class="max-w-sm rounded overflow-hidden shadow-lg">
                <Image
                  class="w-full"
                  src={web1}
                  className="rounded-lg object-cover"
                  width={60}
                  height={30}
                  layout="responsive"
                  alt=""
                />
                <div class="px-6 py-4 bg-white">
                  <div class="font-bold text-xl mb-2">
                    {language === "EN"
                      ? languagues.EN.projectsDescripcion.one.title
                      : languagues.ES.projectsDescripcion.one.title}
                  </div>
                  <p class="text-gray-700 text-base">
                    {language === "EN"
                      ? languagues.EN.projectsDescripcion.one.description
                      : languagues.ES.projectsDescripcion.one.description}
                  </p>
                </div>
                <div class="px-6 pt-4 pb-2 bg-white">
                  <a
                    href="https://github.com/ferreiraMarques/room-chat"
                    class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                  >
                    #Link Github
                  </a>
                </div>
              </div>
            </div>

            <div className="basis-1/4 flex-1 ">
              <div class="max-w-sm rounded overflow-hidden shadow-lg">
                <Image
                  class="w-full"
                  src={code}
                  className="rounded-lg object-cover"
                  width={60}
                  height={30}
                  layout="responsive"
                  alt=""
                />
                <div class="px-6 py-4 bg-white">
                  <div class="font-bold text-xl mb-2">
                    {language === "EN"
                      ? languagues.EN.projectsDescripcion.two.title
                      : languagues.ES.projectsDescripcion.two.title}
                  </div>
                  <p class="text-gray-700 text-base">
                    {language === "EN"
                      ? languagues.EN.projectsDescripcion.two.description
                      : languagues.ES.projectsDescripcion.two.description}
                  </p>
                </div>
                <div class="px-6 pt-4 pb-2 bg-white">
                  <a
                    href="https://github.com/ferreiraMarques/cqrs-eventsourcing-spring-boot"
                    class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                  >
                    #Link Github
                  </a>
                </div>
              </div>
            </div>

            <div className="basis-1/4 flex-1 ">
              <div class="max-w-sm rounded overflow-hidden shadow-lg">
                <Image
                  class="w-full"
                  src={code}
                  className="rounded-lg object-cover"
                  layout="responsive"
                  width={60}
                  height={30}
                  alt=""
                />
                <div class="px-6 py-4 bg-white">
                  <div class="font-bold text-xl mb-2">
                    {language === "EN"
                      ? languagues.EN.projectsDescripcion.three.title
                      : languagues.ES.projectsDescripcion.three.title}
                  </div>
                  <p class="text-gray-700 text-base">
                    {language === "EN"
                      ? languagues.EN.projectsDescripcion.three.description
                      : languagues.ES.projectsDescripcion.three.description}
                  </p>
                </div>
                <div class="px-6 pt-4 pb-2 bg-white">
                  <a
                    href="https://github.com/ferreiraMarques/product-managment"
                    class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                  >
                    #Link Github
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/**experience */}
        <section>
          <div>
            <h3 className="text-center text-3xl py-1 dark:text-white ">
              {language === "EN"
                ? languagues.EN.expirience
                : languagues.ES.expirience}
            </h3>
          </div>
          <div className="flex justify-center lg:flex gap-10 py-4 dark:text-white">
            <ul className="list-disc">
              <li>
                <div className="text-justify py-2">
                  <p>
                    <b>
                      {language === "EN"
                        ? languagues.EN.jobs.one.title
                        : languagues.ES.jobs.one.title}
                    </b>{" "}
                    -{" "}
                    <a href="https://www.tinet.cl/">
                      <b>
                        {language === "EN"
                          ? languagues.EN.jobs.one.company
                          : languagues.ES.jobs.one.company}
                      </b>
                    </a>
                    &nbsp;(2022 -{" "}
                    {language === "EN"
                      ? languagues.EN.currently
                      : languagues.ES.currently}
                    )
                  </p>
                  <p>
                    {language === "EN"
                      ? languagues.EN.jobs.one.description
                      : languagues.ES.jobs.one.description}{" "}
                  </p>
                  <p>
                    <b>
                      {language === "EN"
                        ? languagues.EN.tools
                        : languagues.ES.tools}
                      :
                    </b>
                    Typescript, Nodejs, Nestjs, Postgresql, ArgoCI/CD, Jest,
                    Microservices Architecture
                  </p>
                </div>
              </li>
              <li>
                <div className="text-justify py-2">
                  <p>
                    <b>
                      {language === "EN"
                        ? languagues.EN.jobs.two.title
                        : languagues.ES.jobs.two.title}
                    </b>{" "}
                    -{" "}
                    <a href="https://www.zinli.com/">
                      <b>
                        {language === "EN"
                          ? languagues.EN.jobs.two.company
                          : languagues.ES.jobs.two.company}
                      </b>
                    </a>
                    &nbsp;(2022 - 2023)
                  </p>
                  <p>
                    {language === "EN"
                      ? languagues.EN.jobs.two.description
                      : languagues.ES.jobs.two.description}{" "}
                  </p>
                  <p>
                    <b>
                      {language === "EN"
                        ? languagues.EN.tools
                        : languagues.ES.tools}
                      :
                    </b>
                    Typescript, Nodejs, Serverless Framework, AWS (RDS, Lambda,
                    CloudWatch, DynamoDB, Cognito), Epsagon
                  </p>
                </div>
              </li>
              <li>
                <div className="text-justify py-2">
                  <p>
                    <b>
                      {language === "EN"
                        ? languagues.EN.jobs.three.title
                        : languagues.ES.jobs.three.title}
                    </b>{" "}
                    -{" "}
                    <a href="https://www.bncenlinea.com/">
                      <b>
                        {language === "EN"
                          ? languagues.EN.jobs.three.company
                          : languagues.ES.jobs.three.company}
                      </b>
                    </a>
                    &nbsp;(2020 - 2022)
                  </p>
                  <p>
                    {language === "EN"
                      ? languagues.EN.jobs.three.description
                      : languagues.ES.jobs.three.description}{" "}
                  </p>
                  <p>
                    <b>
                      {language === "EN"
                        ? languagues.EN.tools
                        : languagues.ES.tools}
                      :
                    </b>
                    Kubernetes, Spring Boot, Java 8, Nodejs, Angular 9, Angular
                    Material, DB2, Microservices Architecture.
                  </p>
                </div>
              </li>
              <li>
                <div className="text-justify py-2">
                  <p>
                    <b>
                      {language === "EN"
                        ? languagues.EN.jobs.four.title
                        : languagues.ES.jobs.four.title}
                    </b>{" "}
                    -{" "}
                    <a href="https://www.sigis.com.ve/">
                      <b>
                        {language === "EN"
                          ? languagues.EN.jobs.four.company
                          : languagues.ES.jobs.four.company}
                      </b>
                    </a>
                    &nbsp;(2020 - 2021)
                  </p>
                  <p>
                    {language === "EN"
                      ? languagues.EN.jobs.four.description
                      : languagues.ES.jobs.four.description}{" "}
                  </p>
                  <p>
                    <b>
                      {language === "EN"
                        ? languagues.EN.tools
                        : languagues.ES.tools}
                      :
                    </b>
                    Angular, Docker, Docker Swarm, Jenkins, PHP, Javascript,
                    Nodejs, Expressjs, Microservices Architecture
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </section>
        {/**skills */}
        <section>
          <div>
            <h3 className="text-center text-3xl py-1 dark:text-white ">
              {language === "EN" ? languagues.EN.skills : languagues.ES.skills}
            </h3>
          </div>
          <div className="grid grid-cols-6 gap-4 text-5xl justify-items-center md:justify-items-center py-5 text-gray-600 dark:text-gray-400 py-10 lg:flex-row lg:flex-wrap dark:text-white">
            <div>
              <DiJava />
            </div>
            <div>
              <SiSpringboot />
            </div>
            <div>
              <SiJavascript />
            </div>
            <div>
              <DiAngularSimple />
            </div>
            <div>
              <DiMongodb />
            </div>
            <div>
              <DiPhp />
            </div>
            <div>
              <DiReact />
            </div>
            <div>
              <DiMsqlServer />
            </div>
            <div>
              <SiAmazonaws />
            </div>
            <div>
              <DiRedis />
            </div>
            <div>
              <DiJenkins />
            </div>
            <div>
              <DiLinux />
            </div>
            <div>
              <DiMysql />
            </div>
            <div>
              <DiPostgresql />
            </div>
            <div>
              <SiTypescript />
            </div>
            <div>
              <DiNodejs />
            </div>
            <div>
              <DiLaravel />
            </div>
            <div>
              <SiJunit5 />
            </div>
            <div>
              <SiDocker />
            </div>
            <div>
              <SiJest />
            </div>
            <div>
              <SiRabbitmq />
            </div>
          </div>
        </section>
        {/**contact */}
        <section>
          <div className="p-2">
            <h3 className="text-center text-3xl py-1 dark:text-white ">
              {language === "EN"
                ? languagues.EN.contact
                : languagues.ES.contact}
            </h3>
          </div>
          <div className="text-6xl flex justify-center gap-16 py-2 text-gray-600 dark:text-gray-400 dark:text-white">
            <AiFillGithub
              onClick={() => window.open("https://github.com/ferreiraMarques")}
              className="cursor-pointer"
            />
            <AiFillLinkedin
              onClick={() =>
                window.open("https://www.linkedin.com/in/eferreiramarques/")
              }
              className="cursor-pointer"
            />
          </div>
          <div>
            <p className="text-center py-5 text-base underline decoration-2 dark:text-white">
              <a
                className="cursor-pointer"
                onClick={() =>
                  (window.location.href = "mailto:eduardoferreira960@gmail.com")
                }
              >
                eduardoferreira960@gmail.com
              </a>
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
