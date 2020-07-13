import React, { useState } from "react"
import styled from 'styled-components'

const StyledContainer = styled.section` 
    /* margin: 0 20%; */
    /* width: 50%; */
    padding-top: 50px;

    @media (max-width: 768px) {
        margin: 0;
        padding: 100px 0;
    }
`

const StyledContent = styled.div` 
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    justify-content: space-between;
`

const StyledTabs = styled.ul`
    display: block;
    position: relative;
    width: max-content;
    z-index: 3;
    padding: 0px;
    margin: 0px;
    list-style: none;
    cursor: pointer;
    

    li {
        border-left: 2px solid #bcbfc5;
        margin: 0;
        padding: 5px;
        height: 42px;

        &:hover {
            background-color: #e0e0e0;
        }
    }
`;

const JobContainer = styled.div` 
    height: 10rem;
    width: 100%;
    background-color: rgba(32,32,34,1);
    color: whitesmoke;
    margin-bottom: 2rem;
    overflow: hidden; /*remove after */
`


const Jobs = ({ data }) => {
    console.log(data);

    const [ activeTab, setActiveTab ] = useState(data[ 1 ].node.frontmatter.company);
    const onClickTabItem = tab => {
        setActiveTab(tab);
    };

    return (
        <StyledContainer id="jobs">
            <h1>Here's what I've done so far</h1>
            <StyledContent>
                {/* <StyledTabs>
                    {data.map(company => (
                        <li onClick={() => onClickTabItem(company.node.frontmatter.company)}>
                            {company.node.frontmatter.company}
                        </li>
                    ))}
                </StyledTabs> */}
                {data.map(company => <JobContainer
                    // style={{ width: '80%' }}
                    dangerouslySetInnerHTML={{ __html: company.node.html }}
                />
                )}
            </StyledContent>

        </StyledContainer>
        // activeTab === company.node.frontmatter.company && (  ) 


        // <StyledContainer id="jobs">
        //     <h1>Here's what I've done so far</h1>
        //     <div>

        //         <ul>{data.map(job => <li>
        //             <button>
        //                 {job.node.frontmatter.company}
        //             </button>
        //         </li>)}

        //         </ul>


        //         {/* <h1>{job.node.frontmatter.title}</h1>
        //         <h1>{job.node.frontmatter.range}</h1>
        //         <h1>{job.node.frontmatter.location}</h1>
        //         <h1>{job.node.frontmatter.company}</h1>
        //         <div dangerouslySetInnerHTML={{ __html: job.node.html }} /> */}


        //     </div>
        // </StyledContainer>
    )
}
export default Jobs;