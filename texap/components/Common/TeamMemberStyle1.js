import React from 'react'

const TeamMemberStyle1 = ({ teamMember }) => {
    return (
        <>
            {teamMember && (
                <div className="team-area pt-100 pb-75">
                    <div className="container">
                        <div className="section-title">
                            <span className="sub-title">
                                {teamMember.subTitle}
                            </span>
                            <h2>{teamMember.title}</h2>
                        </div>

                        <div className="row justify-content-center">
                            {teamMember.teamMembers.slice(0,6).map(member => (
                                <div className="col-xl-2 col-lg-3 col-md-4 col-sm-4 col-6" key={member.id}>
                                    <div className="single-team-box">
                                        <div className="image">
                                            <div 
                                                style={{ 
                                                    backgroundImage: `url(${member.image.url})` 
                                                }}
                                            ></div>
                                        </div>
                                        <div className="content">
                                            <h3>{member.name}</h3>
                                            <span>{member.designation}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default TeamMemberStyle1;