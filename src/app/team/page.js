import React from "react";

function Team() {
    let message = `There are many variations of passages of Lorem Ipsum available but the \n majority have suffered alteration in some injected humour.`;
    return (
        <section className="bg-slate-50 py-16 sm:py-32">

            <div className="container">

                <div className="mb-16 ms-60 -mt-16 items-center text-center">
                    <h1 className="primary-heading">
                        Meet Our <span className="highlight">Team</span><br />
                    </h1>
                    <h2 className="mt-5 -mb-10">Our team, comprised of individuals with varied backgrounds and <br />expertise, is the driving force behind our success.</h2>
                </div>

                <div className="grid grid-cols-1 ms-60 lg:grid-cols-3 gap-8">

                    <div className="col-sm-6 col-md-4">
                        <div className="team-item bg-gray-200 text-center shadow-lg p-6 rounded-lg transition duration-300 ease-in-out hover:bg-blue-500 hover:text-white">
                            <img src="https://demo.epic-webdesign.com/tf-pacifico/v1/images/team1a.jpg" className="team-img w-28 h-28 rounded-full mx-auto mb-4" alt="pic" />
                            <h3 className="text-xl font-semibold mb-1">JOHNATHAN HAWKINS</h3>
                            <div className="team-info"><p>CEO Founder</p></div>
                            <p>Johnathan is our co-founder and has developed search strategies for a variety of clients from international brands to medium sized businesses for over five years.</p>
                            {/* <ul className="team-icon flex justify-center space-x-3 mt-4">
                                <li><a href="#" className="twitter"><i className="fa fa-twitter"></i></a></li>
                                <li><a href="#" className="pinterest"><i className="fa fa-pinterest"></i></a></li>
                                <li><a href="#" className="facebook"><i className="fa fa-facebook"></i></a></li>
                                <li><a href="#" className="dribble"><i className="fa fa-dribbble"></i></a></li>
                            </ul> */}
                        </div>
                    </div>

                    <div className="col-sm-6 col-md-4">
                        <div className="team-item bg-gray-200 text-center shadow-lg p-6 rounded-lg transition duration-300 ease-in-out hover:bg-blue-500 hover:text-white">
                            <img src="https://demo.epic-webdesign.com/tf-pacifico/v1/images/team2a.jpg" className="team-img w-28 h-28 rounded-full mx-auto mb-4" alt="pic" />
                            <h3 className="text-xl font-semibold mb-1">ALEXANDRA SMITHS</h3>
                            <div className="team-info"><p>Managing Director</p></div>
                            <p>Graduating with a degree in Spanish and English, Alexandra has always loved writing and now she’s lucky enough to do it as part of her new job inside our agency.</p>
                            {/* <ul className="team-icon flex justify-center space-x-3 mt-4">
                                <li><a href="#" className="twitter"><i className="fa fa-twitter"></i></a></li>
                                <li><a href="#" className="pinterest"><i className="fa fa-pinterest"></i></a></li>
                                <li><a href="#" className="facebook"><i className="fa fa-facebook"></i></a></li>
                                <li><a href="#" className="dribble"><i className="fa fa-dribbble"></i></a></li>
                            </ul> */}
                        </div>
                    </div>

                    <div className="col-sm-6 col-md-4">
                        <div className="team-item bg-gray-200 text-center shadow-lg p-6 rounded-lg transition duration-300 ease-in-out hover:bg-blue-500 hover:text-white">
                            <img src="https://demo.epic-webdesign.com/tf-pacifico/v1/images/team3a.jpg" className="team-img w-28 h-28 rounded-full mx-auto mb-4" alt="pic" />
                            <h3 className="text-xl font-semibold mb-1">ELISA JOHANSON</h3>
                            <div className="team-info"><p>Project Manager</p></div>
                            <p>Elisa first fell in love with digital marketing at the university. He loves to learn, and looks forward to being part of this new exciting industry for many years.</p>
                            {/* <ul className="team-icon flex justify-center space-x-3 mt-4">
                                <li><a href="#" className="twitter"><i className="fa fa-twitter"></i></a></li>
                                <li><a href="#" className="pinterest"><i className="fa fa-pinterest"></i></a></li>
                                <li><a href="#" className="facebook"><i className="fa fa-facebook"></i></a></li>
                                <li><a href="#" className="dribble"><i className="fa fa-dribbble"></i></a></li>
                            </ul> */}
                        </div>
                    </div>


                    <div className="col-sm-6 col-md-4">
                        <div className="team-item bg-gray-200 text-center shadow-lg p-6 rounded-lg transition duration-300 ease-in-out hover:bg-blue-500 hover:text-white">
                            <img src="https://demo.epic-webdesign.com/tf-pacifico/v1/images/team2a.jpg" className="team-img w-28 h-28 rounded-full mx-auto mb-4" alt="pic" />
                            <h3 className="text-xl font-semibold mb-1">ALEXANDRA SMITHS</h3>
                            <div className="team-info"><p>Writing Specialist</p></div>
                            <p>Graduating with a degree in Spanish and English, Alexandra has always loved writing and now she’s lucky enough to do it as part of her new job inside our agency.</p>
                            {/* <ul className="team-icon flex justify-center space-x-3 mt-4">
                                <li><a href="#" className="twitter"><i className="fa fa-twitter"></i></a></li>
                                <li><a href="#" className="pinterest"><i className="fa fa-pinterest"></i></a></li>
                                <li><a href="#" className="facebook"><i className="fa fa-facebook"></i></a></li>
                                <li><a href="#" className="dribble"><i className="fa fa-dribbble"></i></a></li>
                            </ul> */}
                        </div>
                    </div>

                    <div className="col-sm-6 col-md-4">
                        <div className="team-item bg-gray-200 text-center shadow-lg p-6 rounded-lg transition duration-300 ease-in-out hover:bg-blue-500 hover:text-white">
                            <img src="https://demo.epic-webdesign.com/tf-pacifico/v1/images/team3a.jpg" className="team-img w-28 h-28 rounded-full mx-auto mb-4" alt="pic" />
                            <h3 className="text-xl font-semibold mb-1">ELISA JOHANSON</h3>
                            <div className="team-info"><p>Solution Manager</p></div>
                            <p>Elisa first fell in love with digital marketing at the university. He loves to learn, and looks forward to being part of this new exciting industry for many years.</p>
                            {/* <ul className="team-icon flex justify-center space-x-3 mt-4">
                                <li><a href="#" className="twitter"><i className="fa fa-twitter"></i></a></li>
                                <li><a href="#" className="pinterest"><i className="fa fa-pinterest"></i></a></li>
                                <li><a href="#" className="facebook"><i className="fa fa-facebook"></i></a></li>
                                <li><a href="#" className="dribble"><i className="fa fa-dribbble"></i></a></li>
                            </ul> */}
                        </div>
                    </div>


                    <div className="col-sm-6 col-md-4">
                        <div className="team-item bg-gray-200 text-center shadow-lg p-6 rounded-lg transition duration-300 ease-in-out hover:bg-blue-500 hover:text-white">
                            <img src="https://demo.epic-webdesign.com/tf-pacifico/v1/images/team1a.jpg" className="team-img w-28 h-28 rounded-full mx-auto mb-4" alt="pic" />
                            <h3 className="text-xl font-semibold mb-1">JOHNATHAN HAWKINS</h3>
                            <div className="team-info"><p>Head of SEO</p></div>
                            <p>Johnathan is our co-founder and has developed search strategies for a variety of clients from international brands to medium sized businesses for over five years.</p>


                            {/* <ul className="team-icon flex justify-center space-x-3 mt-4">
                                
                                <li><a href="#" className="twitter"><img src="twitter_icon_url" alt="Twitter" /></a></li>
                               
                                <li><a href="#" className="pinterest"><img src="pinterest_icon_url" alt="Pinterest" /></a></li>
                                
                                <li><a href="#" className="facebook"><img src="facebook_icon_url" alt="Facebook" /></a></li>
                              
                                <li><a href="#" className="dribble"><img src="dribble_icon_url" alt="Dribble" /></a></li>
                            </ul> */}

                        </div>
                    </div>
                </div>

            </div>

        </section>
    )
}

export default Team;
