import Link from "next/link";
import Layout from "../components/layout";
import { skills, experiencies, projects } from "../profile";

const Index = () => (
    <Layout>
        {/** header */}
        <header className="row">
            <div className="col-md-12">
                <div className="card card-body bg-primary text-light">
                    <div className="row">
                        <div className="col-md-2">
                            <img className="img-fluid h-100 float-right"
                                src="/images/profile.jpg" />
                        </div>
                        <div className="col-md-10">
                            <h1 className="text-light">Eduardo Ferreira</h1>
                            <h3 className="text-light">Backend Developer Java/Nodejs</h3>
                            <p className="text-light text-justify">
                                Soy Desarrollador backend con de 5 años de experiencia en tecnologías como Java/Spring,
                                Nodejs/Expressjs/Nestjs y PHP/Laravel y Android.

                                A lo largo de estos años, he tenido el privilegio de formar parte en
                                la creación, mantenimiento y diseño de diversas soluciones tecnologicas tanto web como móviles
                                desempeñandome como desarrollador backend y fullstack.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </header>

        {/** second section */}
        <div className="row py-2">
            <div className="col-md-12">
                <div className="card bg-ligh">
                    <div className="card-body">
                        <h2 className="py-2">Experience</h2>

                        <ul>
                            {
                                experiencies.map(({ description, title, to, from }, i) => (
                                    <li key={i}>
                                        <h3>{title}</h3>
                                        <h5>{from} - {to ? to : 'Actualmente'}</h5>
                                        <p>{description}</p>
                                    </li>
                                ))
                            }
                        </ul>

                        <Link href="https://www.linkedin.com/in/eferreiramarques/">
                            <a className="btn btn-light">Conoce Mas</a>
                        </Link>

                    </div>
                </div>
            </div>
        </div>

        {/**three section */}
        <div className="row py-2">
            <div className="col-md-12">
                <div className="card bg-light">

                    <div className="container">

                        <div className="row">
                            <div className="col-md-12 py-2">
                                <h2>Skills</h2>
                            </div>

                            {
                                skills.map(({ skill, percentage }, index) => (
                                    <div className="col-md-3" key={index}>
                                        <div className="py-3">
                                            <h5>{skill}</h5>
                                            <div className="progress border border-secondary">
                                                <div className="progress-bar  bg-info"
                                                    role="progressbar"
                                                    style={{ width: `${percentage}%` }}
                                                    aria-valuenow="50"
                                                    aria-valuemin="0"
                                                    aria-valuemax="100"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>

                </div>
            </div>
        </div>

        {/** portafolio */}
        <div className="row">
            <div className="col-md-12">
                <div className="card card-body bg-primary">
                    <div className="row">
                        <div className="col-md-12">
                            <h2 className="text-center text-light">Portafolio</h2>
                        </div>

                        {
                            projects.map(({ description, image, name, know }, id) => (
                                <div className="col-md-4 py-2" key={id}>
                                    <div className="card h-100">
                                        <div className="overflow">
                                            <img className="img-fluid card-img-top" src={`/images/${image}`} />
                                        </div>
                                        <div className="card-body">
                                            <h3>{name}</h3>
                                            <p>{description}</p>
                                            <a href={know}>Conoce Mas</a>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>

                </div>
            </div>


        </div>
    </Layout>
)

export default Index;