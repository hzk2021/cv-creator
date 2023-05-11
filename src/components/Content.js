import React, { ReactDOM } from 'react';
import PersonalInfo from './Information/PersonalInfo';
// import Experience from './Information/Experience';
import Header from './Preview/Header';
import Body from './Preview/Body';

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
        }
    }

    changeFirstName(name) {
        this.setState({firstName: name})
    }

    changeLastName(name) {
        this.setState({lastName: name})
    }
    
    changeTitle(title) {
        this.setState({title})
    }

    changeAddress(address) {
        this.setState({address})
    }

    changePhoneNumber(phoneNumber) {
        this.setState({phoneNumber})
    }

    changeEmail(email) {
        this.setState({email})
    }

    changeDescription(description) {
        this.setState({description})
    }

    render() {
        return(
            <div className="grid grid-cols-2">
                <div id="personal-info" className='bg-slate-400 p-2'>
                    <PersonalInfo 
                                firstNameEvent={this.changeFirstName.bind(this)}
                                lastNameEvent={this.changeLastName.bind(this)}
                                titleEvent={this.changeTitle.bind(this)}
                                addressEvent={this.changeAddress.bind(this)}
                                phoneNumberEvent={this.changePhoneNumber.bind(this)}
                                emailEvent={this.changeEmail.bind(this)}
                                descriptionEvent={this.changeDescription.bind(this)}
                                />
                    {/* <Experience /> */}
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
                        <Body 
                            address={this.state.address}
                            phoneNumber={this.state.phoneNumber}
                            email={this.state.email}
                            description={this.state.description}
                            />
                    </div>
                </div>
            </div>
        );
    }
}

