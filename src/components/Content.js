import React, { ReactDOM } from 'react';
import PersonalInfo from './Information/PersonalInfo';
// import Experience from './Information/Experience';
import Header from './Preview/Header';
import Description from './Preview/Description';
import Experience from './Information/Experience';
import {StyledTitle, AddExperienceButton} from "./Information/Misc";
import {StyledLabel} from "./Preview/Misc";
import PreviewExperience from './Preview/Experience';

export class Content extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            firstName: '',
            lastName: '',
            title: '',
            address: '',
            phoneNumber: '',
            email: '',
            description: '',
            experiences: [{
                position: '',
                company: '',
                city: '',
                from: '',
                to: '',
                index: 0,
            }],
        }

        this.changeExperiencePosition = this.changeExperiencePosition.bind(this);
        this.changeExperienceCompany = this.changeExperienceCompany.bind(this);
        this.changeExperienceCity = this.changeExperienceCity.bind(this);
        this.changeExperienceFrom = this.changeExperienceFrom.bind(this);
        this.changeExperienceTo = this.changeExperienceTo.bind(this);
        this.deleteExperience = this.deleteExperience.bind(this);
    }

    changeFirstName(name) {
        this.setState({firstName: name});
    }

    changeLastName(name) {
        this.setState({lastName: name});
    }
    
    changeTitle(title) {
        this.setState({title});
    }

    changeAddress(address) {
        this.setState({address});
    }

    changePhoneNumber(phoneNumber) {
        this.setState({phoneNumber});
    }

    changeEmail(email) {
        this.setState({email});
    }

    changeDescription(description) {
        this.setState({description});
    }

    changeExperiencePosition(position, index = 0) {

        this.setState(prevState => {
            const newExperiences = [...prevState.experiences];
            newExperiences[index].position = position;
            return {experiences: newExperiences};
        });
    }

    changeExperienceCompany(company, index = 0) {

        this.setState(prevState => {
            const newExperiences = [...prevState.experiences];
            newExperiences[index].company = company;
            return {experiences: newExperiences};
        });
    }

    changeExperienceCity(city, index = 0) {

        this.setState(prevState => {
            const newExperiences = [...prevState.experiences];
            newExperiences[index].city = city;
            return {experiences: newExperiences};
        });
    }

    changeExperienceFrom(from, index = 0) {

        this.setState(prevState => {
            const newExperiences = [...prevState.experiences];
            newExperiences[index].from = from;
            return {experiences: newExperiences};
        });
    }

    changeExperienceTo(to, index = 0) {

        this.setState(prevState => {
            const newExperiences = [...prevState.experiences];
            newExperiences[index].to = to;
            return {experiences: newExperiences};
        });
    }

    addExperienceClicked(){        
        this.setState({experiences: this.state.experiences.concat(
            {
                position: '',
                company: '',
                city: '',
                from: '',
                to: ''
            }
        )});
    }

    deleteExperience(index){
        this.setState({experiences: this.state.experiences.filter((e, i) => {
            console.log(e)
            return i !== index;
        })});
    }

    addExperienceUI(){
        var experiences = [];
        for (let i = 0; i < this.state.experiences.length; i++) {
            console.log(this.state.experiences)
            experiences.push((<Experience key={this.state.experiences[i].index} 
                positionEvent={this.changeExperiencePosition} 
                companyEvent={this.changeExperienceCompany}
                cityEvent={this.changeExperienceCity}
                fromEvent={this.changeExperienceFrom}
                toEvent={this.changeExperienceTo}
                deleteEvent={this.deleteExperience}
                index={i}/>))
        }

        return experiences;
    }

    render() {
        return(
            <div className="grid grid-cols-2 mx-20 my-10 gap-10">
                <div id="personal-info" className='bg-slate-400 p-2 text-left p-5 shadow-2xl bg-white'>
                    <div>
                        <StyledTitle text={"Personal Information"}/>

                        <PersonalInfo 
                                    firstNameEvent={this.changeFirstName.bind(this)}
                                    lastNameEvent={this.changeLastName.bind(this)}
                                    titleEvent={this.changeTitle.bind(this)}
                                    addressEvent={this.changeAddress.bind(this)}
                                    phoneNumberEvent={this.changePhoneNumber.bind(this)}
                                    emailEvent={this.changeEmail.bind(this)}
                                    descriptionEvent={this.changeDescription.bind(this)}
                                    />
                    </div>
                    <hr></hr>
                    <div>
                        <StyledTitle text={"Experience"}/>
                        {this.addExperienceUI()}
                        <AddExperienceButton onClickHandler={this.addExperienceClicked.bind(this)}/>
                    </div>
                </div>

                <div id="preview-info" className="grid grid-rows-5">
                    <div className='grid row-span-1'>
                        <Header 
                            firstName={this.state.firstName}
                            lastName={this.state.lastName}
                            title={this.state.title}
                            />
                    </div>

                    <div className='grid row-span-4'>
                        <Description 
                            address={this.state.address}
                            phoneNumber={this.state.phoneNumber}
                            email={this.state.email}
                            description={this.state.description}
                            />

                        <StyledLabel text="Experience"/>
                        
                        {
                            this.state.experiences.map(e => {
                                return <PreviewExperience 
                                        position={e.position}
                                        company={e.company}
                                        city={e.city}
                                        from={e.from}
                                        to={e.to} />
                            })
                        }
                    </div>
                    
                </div>
            </div>
        );
    }
}

